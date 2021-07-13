let train_model_data = {
  poseLabels: [],
  activePoseLabel: null
}

const COLLECTION_TRAIN_MODEL = [
  {
    'title': 'Trainiere deine eigenen Gesten',
    'text': 'Hier kannst du die Gestensteuerung personalisieren. Definiere deine eigenen Gesten, um die Akzentfarbe deiner Hand zu wechseln.',
    'info': 'Kurzer Disclaimer: die generierten Daten werden nicht gespeichert und auch nicht an andere weitergegeben. Soabld das Browserfenster neu lädt oder sobald du diese Seite verlässt, werden alle Daten gelöscht.',
    'event': 'Weiter',
    'class': '',
    'back': false,
    'col2': false,
    'state': true,
    getState() {
      return true
    }
  },
  {
    'title': 'Gesten definieren',
    'text': 'Als erstes musst du deine beiden neuen Gesten bennen. Überlege dir vorher, wie die Gesten aussehen sollten.',
    'info': 'Wichtig: Diese beiden Handgesten sollten sich gut voneinander unterscheiden. Ausserdem müssen die Gesten statisch sein. Es werden keine Bewegungsabläufe erkannt.',
    'event': 'Weiter',
    'class': '',
    'back': false,
    'col2': `<form autocomplete="off" spellcheck="false" data-id="labl-12345"><label id="pose-1" data-id="labl-12345"><input placeholder="1. Geste" name="pose-1" type="text" class="gclick" data-id="labl-12345"></label><label id="pose-2" data-id="labl-54321"><input placeholder="2. Geste" name="pose-2" type="text" class="gclick" data-id="labl-54321"></label><p>👋, ✌, 🤙️</p></form>`,
    getState() {
      let v1 = document.querySelector('#pose-1 input')?.value
      let v2 = document.querySelector('#pose-2 input')?.value

      train_model_data.poseLabels.push(v1)
      train_model_data.poseLabels.push(v2)
      return v1 !== '' && v2 !== '' && v1 !== v2
    },
    setInit() {
      disableTrainEvent()
      const form = document.querySelector('form')
      function handleForm(event) { event.preventDefault(); }
      form.addEventListener('submit', handleForm);

      const input1 = document.querySelector('#pose-1 input')
      const input2 = document.querySelector('#pose-2 input')

      let input1valid = false
      let input2valid = false

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
    'col2': `<div class="collect-data-info"><p>Positioniere deine Hand vor dem Start im diesem Feld. Halte sie während der Aufnahme so ruhig wie möglich.</p></div><div class="collect-data-controls pose-1"><button class="btn-collect-start" data-pose="1">Start</button><button class="btn-collect-restart invisible" data-pose="2">Neu sammeln</button></div><pre>...</pre>`,
    getState() {
      return poseCollected
    },
    preInit(){
      train_model_data.activePoseLabel = train_model_data.poseLabels[0]
      this.title = `Sammle die Daten für die Geste "${train_model_data.activePoseLabel}"`
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
    'col2': `<div class="collect-data-info"><p>Positioniere deine Hand vor dem Start im grauen Bereich. Halte sie während der Aufnahme so ruhig wie möglich.</p></div><div class="collect-data-controls pose-2"><button class="btn-collect-start" data-pose="2">Start</button><button class="btn-collect-restart invisible" data-pose="2">Neu sammeln</button></div><pre>...</pre>`,
    getState() {
      return poseCollected
    },
    preInit(){
      train_model_data.activePoseLabel = train_model_data.poseLabels[1]
      this.title = `Sammle die Daten für die Geste "${train_model_data.activePoseLabel}"`
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
    'text': 'Nun kommt der einfachste Teil: Lasse das Modell trainieren. Alles was du dafür tun musst, ist auf Trainieren zu klicken.',
    'info': '<strong>Epochs:</strong> Definiert die Anzahl Runden, die das Modell mit dem vollständigen Datensatz trainiert wird. Je höher dieser Wert, desto besser wird das Modell trainiert.\n ' +
      '<strong>Accuracy:</strong> Dieser Wert gibt an, wie viele richtige Vorhersagen das Modell gemacht hat (in Prozent). Bei einem Wert von 1 (100%) kannst du dir sicher sein, dass alle Vorhersagen stimmen werden.\n' +
      '<strong>Loss:</strong> Dieser Wert sollte so tief wie möglich sein, denn er gibt die Summe aller Fehlinterpretationen während des Trainings an.',
    'event': 'Model ausprobieren',
    'back': false,
    'class': '',
    'col2': `<div class="train-data-info"><div class="train-data-summary"><p>Epochs: <span class="train-epochs">-</span>/19</p><p>Loss: <span class="train-loss">-</span></p><p>Accuracy: <span class="train-accuracy">-</span></p></div><div class="train-data-controls"><button class="btn-train-start">Trainiere das Modell</button></div><div><button class="train-save">Daten herunterladen</button></div></div>`,
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
    'text': 'Das Modell ist fertig trainiert und sollte nun deine Gesten erkennen. Probiere es aus!',
    'info': '',
    'event': 'Training abschliessen',
    'back': false,
    'col2': `<div> <div class="pose-created">Erkannte Geste: <span>-</span></div></div>`,
    'class': '',
    setInit() {
      trainedPoseLabel = document.querySelector('.pose-created')
      stateTestModel = true
    },
    getState() {
      stateTestModel = false
      return true
    }
  }
]


checkActiveTrainedPose = () => {
  console.log("CHECK POSE")
  console.log(checkActiveTrainedPose)
}