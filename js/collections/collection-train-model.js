
const COLLECTION_TRAIN_MODEL = [
  {
    'title': 'Trainiere deine eigenen Gesten',
    'text': 'Hier kannst du den Ablauf eines Trainings selbst ausprobieren. Dafür kannst du dem Modell, dass deine Hand erkennt, zwei verschiedene Gesten beibringen. Überlege dir kurz, mit welcher Trainingsmethode das Training ablaufen könnte und wähle die entsprechenden Begriffe rechts aus (wenn du die beiden richtigen Begriffe gefunden hast, klicke auf Weiter).',
    'info': 'Kurzer Disclaimer: die generierten Daten werden nicht gespeichert und auch nicht an andere weitergegeben. Soabld das Browserfenster neu lädt oder sobald du diese Seite verlässt, werden alle Daten gelöscht.',
    'event': 'Weiter',
    'class': '',
    'back': false,
    'col2': `<div class="select-methods"><button class="method gclick" data-id="sel-43435">Regression</button><button class="method gclick" data-id="sel-23523">unüberwacht</button><button class="method gclick" data-id="sel-04938">Assoziationsanalyse</button><button class="method gclick" data-id="sel-93858">überwacht</button><button class="method gclick" data-id="sel-12309">Klassifikation</button><button class="method gclick" data-id="sel-34097">Anomalieerkennung</button><button class="method gclick" data-id="sel-10293">Clusteranalyse</button></div>`,
    'state': true,
    getState() {
      return true
    },
    setInit() {
      disableTrainEvent()
      const selects = document.querySelectorAll('.method');
      const selectedSolution = ['überwacht', 'Klassifikation']
      let selected = []
      selects.forEach(btn => {
        btn.onclick = () => {
          btn.classList.toggle('active')
          if(btn.classList.contains('active')) selected.push(btn.innerText)
          else removeItem(selected, btn.innerText)
          if(arraysEqual(selectedSolution, selected)) enableTrainEvent()
          else disableTrainEvent()
        }
      })
    }
  },
  {
    'title': 'Definiere den Output',
    'text': 'Da das Training überwacht abläuft und deine Gesten klassifiziert werden, musst du als erstes die beiden Outputs (die beiden Gesten, die das Modell erkennen soll) benennen. Tippe rechts jeweils die Namen der Gesten ein und wähle für jede Geste ein passendes Emoji aus.',
    'info': 'Wichtig: Diese beiden Handgesten sollten sich gut voneinander unterscheiden. Ausserdem müssen die Gesten statisch sein. Bewegungsabläufe werden nicht erkannt.',
    'event': 'Weiter',
    'class': '',
    'back': false,
    'col2': `<form autocomplete="off" spellcheck="false" data-id="labl-12345"><label id="pose-1" data-id="labl-12345"><input placeholder="1. Geste" name="pose-1" type="text" class="gclick" data-id="labl-12345"><span class="emoji"></span><p class="select-emoji select-emoji-1"><span data-opt="1">👉</span><span data-opt="1">🥄</span><span data-opt="1">🦞</span><span data-opt="1">🔥</span><span data-opt="1">🦒</span><span data-opt="1">🎸</span><span data-opt="1">🤏</span></p></label><label id="pose-2" data-id="labl-54321"><input placeholder="2. Geste" name="pose-2" type="text" class="gclick" data-id="labl-54321"><span class="emoji"></span><p class="select-emoji select-emoji-2"><span data-opt="2">🐐</span><span data-opt="2">🛹</span><span data-opt="2">🧟‍</span><span data-opt="2">🤙</span><span data-opt="2">✌️</span><span data-opt="2">🚬</span><span data-opt="2">🤙</span></p></label></form>`,
    getState() {
      train_model_data.poseLabels[0] = document.querySelector('#pose-1 input').value
      train_model_data.poseLabels[1] = document.querySelector('#pose-2 input').value
      return true
    },
    setInit() {
      disableTrainEvent()
      const form = document.querySelector('form')
      const input1 = document.querySelector('#pose-1 input')
      const input2 = document.querySelector('#pose-2 input')
      const emojiHolder1 = document.querySelector('#pose-1 .emoji')
      const emojiHolder2 = document.querySelector('#pose-2 .emoji')
      const emojiOptions = document.querySelectorAll('.select-emoji span')
      let input1valid = false
      let input2valid = false

      function handleForm(event) { event.preventDefault(); }
      form.addEventListener('submit', handleForm);

      setRandomEmojis(emojiHolder1,emojiHolder2, emojiOptions)

      emojiOptions.forEach(opt => {
        const group = opt.getAttribute('data-opt')
        const holder = group === '1' ? emojiHolder1 : emojiHolder2
        opt.onclick = () => {
          train_model_data.selectedEmojis[group-1] = opt.innerText
          holder.innerText = opt.innerText
          console.log(train_model_data.selectedEmojis)
        }
      })

      input1.addEventListener ("input", function () {
        input1valid = input1.value !== ''
        if(input1valid && input2valid) enableTrainEvent()
        else disableTrainEvent()
      });

      input2.addEventListener ("input", function () {
        input2valid = input2.value !== ''
        if(input1valid && input2valid) enableTrainEvent()
        else disableTrainEvent()
      });
    }
  },
  {
    'title': 'Sammle die Daten für ',
    'text': 'Bereite deine Geste im Feld rechts vor, bevor du auf Start klickst. Die Datensammlung startet direkt nachdem du auf Start geklickt hast. Je ruhiger du deine Hand hältsts, desto sauberer werden die Daten und desto besser können deine Gesten später klassifiziert werden. Deine Geste wird während 4 Sekunden verfolgt.',
    'info': '',
    'event': 'Weiter',
    'back': false,
    'class': 'border',
    'col2': `<div class="collect-data-info"><p></p></div><div class="collect-data-controls pose-1"><button class="btn-collect-start" data-pose="1">Start</button><button class="btn-collect-restart invisible" data-pose="2">Daten neu sammeln</button></div><p class="instruction">Positioniere deine Hand vor dem Start im diesem Feld. Halte sie während der Aufnahme so ruhig wie möglich.</p>`,
    getState() {
      return poseCollected
    },
    preInit(){
      train_model_data.activePoseLabel = train_model_data.poseLabels[0]
      this.title = `Sammle die Daten für die Geste "${train_model_data.activePoseLabel}" ${train_model_data.selectedEmojis[0]}`
    },
    setInit(){
      disableTrainEvent()
      gesturalInteractionEnabled = false
      gestureLabelingEnabled = false
      document.querySelector('.btn-collect-start').onclick = () => startCollecting()
      document.querySelector('.btn-collect-restart').onclick = () => startCollecting('restart')
    }
  },
  {
    'title': 'Sammle die Daten für ',
    'text': 'Das Gleiche machen wir noch mit der zweiten Geste. Halte deine Hand ruhig im Feld rechts während 4 Sekunden. Bereite deine Geste vor, bevor du auf Start klickst.',
    'info': '',
    'event': 'Weiter',
    'class': 'border',
    'back': false,
    'col2': `<div class="collect-data-info"><p></p></div><div class="collect-data-controls pose-2"><button class="btn-collect-start" data-pose="2">Start</button><button class="btn-collect-restart invisible" data-pose="2">Daten neu sammeln</button></div><p class="instruction">Positioniere deine Hand vor dem Start im diesem Feld. Halte sie während der Aufnahme so ruhig wie möglich.</p>`,
    getState() {
      return poseCollected
    },
    preInit(){
      train_model_data.activePoseLabel = train_model_data.poseLabels[1]
      this.title = `Sammle die Daten für die Geste "${train_model_data.activePoseLabel}" ${train_model_data.selectedEmojis[1]}`
    },
    setInit(){
      disableTrainEvent();
      poseCollected = false
      this.title = `Trainiere "${create_poseLabel_active}"`
      document.querySelector('.btn-collect-start').onclick = () => startCollecting()
      document.querySelector('.btn-collect-restart').onclick = () => startCollecting('restart')
    }
  },
  {
    'title': 'Training',
    'text': 'Nun kommt der einfachste Teil: Lasse das Modell mit deinen gelabelten Daten trainieren. Alles was du dafür tun musst, ist auf Trainieren zu klicken. Klicke anschliessend auf Model ausprobieren, um das Training abzuschliessen.',
    'info': '<strong>Epochs:</strong> Definiert die Anzahl Runden, die das Modell mit dem vollständigen Datensatz trainiert wird. Je höher dieser Wert, desto besser wird das Modell trainiert.\n ' +
      '<strong>Accuracy:</strong> Dieser Wert gibt an, wie viele richtige Vorhersagen das Modell gemacht hat (in Prozent). Bei einem Wert von 1 (100%) kannst du dir sicher sein, dass alle Vorhersagen stimmen werden.\n' +
      '<strong>Loss:</strong> Dieser Wert sollte so tief wie möglich sein, denn er gibt die Summe aller Fehlinterpretationen während des Trainings an.',
    'event': 'Model ausprobieren',
    'back': false,
    'class': '',
    'col2': `<div class="train-data-info"><div class="train-data-summary"><p>Epochs: <span class="train-epochs">-</span>/19</p><p>Accuracy: <span class="train-accuracy">-</span></p><p>Loss: <span class="train-loss">-</span></p></div><div class="train-data-controls"><button class="btn-train-start">Trainiere das Modell</button></div><div><button class="train-save">Daten herunterladen</button></div></div>`,
    getState() {
      return brainCreated
    },
    setInit() {
      disableTrainEvent();
      disableButton('train-save');
      document.querySelector('.btn-train-start').onclick = () => trainCollection()
      trainingDataEpochs = document.querySelector('.train-epochs')
      trainingDataLoss = document.querySelector('.train-loss')
      trainingDataAccuracy = document.querySelector('.train-accuracy')
      trainingSaveData = document.querySelector('.train-save').onclick = () => trainingSaveData()
    }
  },
  {
    'title': 'Modell Ausprobieren',
    'text': 'Das Modell ist fertig trainiert und sollte nun deine Gesten erkennen. Probiere die Gesten aus, die du gerade trainiert hast!',
    'info': '',
    'event': 'Kehre auf die Hauptseite zurück',
    'back': false,
    'col2': `<div><div class="pose-created">Erkannte Geste: <span>-</span></div><span class="pose-created-emoji"></span></div>`,
    'class': '',
    setInit() {
      trainedPoseLabel = document.querySelector('.pose-created')
      trainedPoseEmoji = document.querySelector('.pose-created-emoji')
      stateTestModel = true
      showEmojis = true
    },
    getState() {
      stateTestModel = false
      showEmojis = false
      return true
    }
  }
]

