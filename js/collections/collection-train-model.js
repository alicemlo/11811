let train_model_data = {
  poseLabels: [],
  activePoseLabel: null
}

const COLLECTION_TRAIN_MODEL = [
  {
    'title': 'Bringe dem Modell deine Gesten bei',
    'text': 'Auf dieser Seite kannst du die Gestensteuerung personalisieren. Definiere deine eigenen Gesten, um zwischen dark und light mode zu switchen.',
    'info': 'Kurzer Disclaimer: die generierten Daten werden nicht gespeichert und auch nicht an andere weitergegeben. Soabld das Browserfenster neu lädt oder sobald du diese Seite verlässt, werden alle Daten gelöscht.',
    'event': 'Weiter',
    'back': false,
    'col2': false,
    'state': true,
    getState() {
      return true
    }
  },
  {
    'title': 'Gesten definieren',
    'text': 'Als Grundlage braucht braucht das Modell Daten. Definiere und bennene hierfür zwei Handgesten, die du dem Modell beibringen möchtest.',
    'info': 'Wichtig: Diese beiden Handgesten sollten sich gut voneinander unterscheiden. Ausserdem müssen die Gesten statisch sein. Es werden keine Bewegungsabläufe erkannt.',
    'event': 'Weiter',
    'back': false,
    'col2': `<form autocomplete="off" spellcheck="false"><label id="pose-1"><input placeholder="1. Geste" name="pose-1" type="text"></label></form><form autocomplete="off" spellcheck="false"><label id="pose-2"><input placeholder="2. Geste" name="pose-2" type="text"></label><p>👋, ✌, 🤙️</p></form>`,
    getState() {
      let v1 = document.querySelector('#pose-1 input')?.value
      let v2 = document.querySelector('#pose-2 input')?.value
      train_model_data.poseLabels.push(v1)
      train_model_data.poseLabels.push(v2)
      return v1 !== '' && v2 !== '' && v1 !== v2
    }
  },
  {
    'title': 'Trainiere ',
    'text': 'Bereite deine Geste vor, bevor du auf Start klickst. Die Datensammlung startet sobalb du gestartet hast. Je sauberer deine Daten sind, desto besser können deine Gesten später klassifiziert werden. Deine Geste wird während 4 Sekunden verfolgt.',
    'info': '',
    'event': 'Weiter',
    'back': false,
    'col2': `<div class="collect-data-info"><p>Positioniere deine Hand vor dem Start im diesem Feld. Halte sie während der Aufnahme so ruhig wie möglich.</p></div><div class="collect-data-controls pose-1"><button class="btn-collect-start" data-pose="1">Start</button><button class="btn-collect-restart" data-pose="2">Neu sammeln</button></div>`,
    getState() {
      return poseCollected
    },
    preInit(){
      train_model_data.activePoseLabel = train_model_data.poseLabels[0]
      this.title = `Trainiere "${train_model_data.activePoseLabel}"`
    },
    setInit(){
      document.querySelector('.btn-collect-start').onclick = () => startCollecting()
      document.querySelector('.btn-collect-restart').onclick = () => startCollecting('restart')
    }
  },
  {
    'title': 'Trainiere ',
    'text': 'Bereite deine Geste vor, bevor du auf Start klickst. Die Datensammlung startet sobalb du gestartet hast. Je sauberer deine Daten sind, desto besser können deine Gesten später klassifiziert werden. Deine Geste wird während 4 Sekunden verfolgt.',
    'info': '',
    'event': 'Weiter',
    'back': false,
    'col2': `<div class="collect-data-info"><p>Positioniere deine Hand vor dem Start im grauen Bereich. Halte sie während der Aufnahme so ruhig wie möglich.</p></div><div class="collect-data-controls pose-2"><button class="btn-collect-start" data-pose="2">Start</button><button class="btn-collect-restart" data-pose="2">Neu sammeln</button></div>`,
    getState() {
      return poseCollected
    },
    preInit(){
      train_model_data.activePoseLabel = train_model_data.poseLabels[1]
      this.title = `Trainiere "${train_model_data.activePoseLabel}"`
    },
    setInit(){
      poseCollected = false
      this.title = `Trainiere "${create_poseLabel_active}"`
      document.querySelector('.btn-collect-start').onclick = () => startCollecting()
      document.querySelector('.btn-collect-restart').onclick = () => startCollecting('restart')
    }
  },
  {
    'title': 'Training',
    'text': 'Nun kommt der einfachste Teil: Lasse das Modell trainieren. Wenn du magst, kann du hier noch ein paar Einstellungen vornehmen. Zum Beispiel kannst du die Anzahl Epochs oder die  Learning Rate anpassen. Für diesen Aufgabe reichen aber die vorgegebenen Werte.',
    'info': 'input epochs, input learning rate',
    'event': 'Model ausprobieren',
    'back': false,
    'col2': `<div class="train-data-info"><p>Klicke Hier um deine Date zu trainieren</p><div class="train-data-controls"><button class="btn-train-start">Trainiere das Modell</button><p>epochs</p><p>learning rate</p></div><div class="train-data-summary"><p>Epochs: <span class="train-epochs">-</span></p><p>Loss: <span class="train-loss">-</span></p><p>Accuracy: <span class="train-accuracy">-</span></p></div><div><button class="train-save">Daten herunterladen</button></div></div>`,
    getState() {
      return brainCreated
    },
    setInit() {
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
    'event': 'Zurück zum Machine Learning',
    'back': false,
    'col2': '',
    getState() {
      return true
    }
  }
]