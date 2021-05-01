let giEnabled = false

enableGi = (item, button) => {
  giEnabled = !giEnabled;
  if(button) giEnabled ? button.classList.add('active') : button.classList.remove('active')
  if(giEnabled){
    giScripts.forEach(itm =>{
      const script = document.createElement('script');
      script.id = itm.id;
      script.src = itm.src;
      item.append(script);
    })
  }else{
    const canvas = document.querySelector('CANVAS')
    const video = document.querySelector('VIDEO')
    if (canvas) document.body.removeChild(canvas)
    if(video) document.body.removeChild(canvas)
    giScripts.forEach(itm => {
      // TODO fix parent error
      let i = document.getElementById(itm.id)
      i.parentNode.removeChild(i);
    })
  }
}

const giScripts = [
  {
    'src': 'js/create-model.js',
    'id': 'create'
  },
  {
    'src': 'js/gi.js',
    'id': 'gi',
  }
]

const headerLinks = [
  {
    'id': 'Buzzwords',
    'ref': '/buzzwords',
    'class': 'nav-item',
    'index': -1
  },
  {
    'id': 'Machine Learning',
    'ref': '/machine-learning',
    'class': 'nav-item',
    'index': 0
  },
  {
    'id': 'Training',
    'ref': '/train-model',
    'class': 'nav-item on-gi',
    'index': 1
  }
]


let create_poseLabels = []

const routes__story = ['/machine-learning', '/train-model', '/buzzwords']
const routes__info = ['/project', '/home']

let lastStory = ''

const createModelContent = [
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
    'col2': `<div><label id="pose-1"><input placeholder="1. Geste" name="pose-1" type="text"></label></div><div><label id="pose-2"><input placeholder="2. Geste" name="pose-2" type="text"></label><p>👋, ✌, 🤙️</p></div>`,
    getState() {
      let v1 = document.querySelector('#pose-1 input')?.value
      let v2 = document.querySelector('#pose-2 input')?.value
      create_poseLabels.push(v1)
      create_poseLabels.push(v2)
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
      create_poseLabel_active = create_poseLabels[0]
      this.title = `Trainiere "${create_poseLabel_active}"`
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
      create_poseLabel_active = create_poseLabels[1]
      this.title = `Trainiere "${create_poseLabel_active}"`
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

// ml5js
let video, poseNet, brain, brainCreate
let modelIsLoaded = false
let handModelIsLoaded = false
let labelHandPose = ''
let labelCreatedPose = ''
let brainCreated = false
let status = false

// models
let modelHandPose = {
  model: 'data/models/hand-open/model.json',
  metadata: 'data/models/hand-open/model_meta.json',
  weights: 'data/models/hand-open/model.weights.bin',
};

const options = {
  inputs: 42,
  outputs: 2,
  task: 'classification',
}

// data
let pose = [];
let particles = []
let xAvg = 0
let yAvg = 0


// gestures
let gestureSwipeLeftStates = [false, false, false]
let gestureSwipeRightStates = [false, false, false]


// variables
let width = window.innerWidth
let height = window.innerHeight
const breakpoints = [160, 480] // 0 - 640
const story = ['buzzwords', 'machine-learning', 'train-model']
let storyIndex = story.indexOf(window.location.hash.substring(1)) < 0 ? 0 : story.indexOf(window.location.hash.substring(1))
let create_poseLabel_active = ''
let poseCollected = false


// dom
let elStatus, loadingScreen,
  collectedDataFile,
  counter, createContentTitle, createContentText, createContentInfo, createEvent, createEventBack, createCol2,
  trainingDataEpochs, trainingDataLoss, trainingDataAccuracy, trainingSaveData

initDom = () => {
  elStatus = document.getElementById('model-status')
  loadingScreen = document.querySelector('.loading')
  collectedDataFile = document.getElementById("data-collection");
  if (hash === 'create') wait(250).then(() => initCreate())
  counter = 0;
}

initCreate = () => {
  createContentTitle = document.querySelector('.col-1-title')
  createContentText = document.querySelector('.col-1-text')
  createContentInfo = document.querySelector('.col-1-info')
  createEventBack = document.querySelector('.col-1-back')
  createEvent = document.querySelector('.col-1-event')
  createCol2 = document.querySelector('.col-2')

  setCreateContainer();
  createEvent.onclick = () => checkState();
  createEventBack.onclick = () => setCreateContainer(counter--)
}

checkState = () => {
  let content = createModelContent[counter]
  if (content.getState()) setCreateContainer(counter++)
}


setCreateContainer = () => {
  if (counter <= 0) counter = 0
  if (counter >= createModelContent.length - 1) counter = createModelContent.length - 1
  let content = createModelContent[counter]

  if(content.preInit) content.preInit();

  createContentTitle.innerText = content.title
  createContentText.innerText = content.text
  createContentInfo.innerText = content.info
  createEvent.innerText = content.event

  if (content.back) {
    show(createEventBack)
    createEventBack.innerText = content.back
  } else {
    hide(createEventBack)
  }

  if (content.col2) createCol2.innerHTML = content.col2
  else createCol2.innerHTML = ''

  if(content.setInit) content.setInit();
}


// colors
const col__dark_01 = [28, 25, 34]
const col__dark_02 = [38, 46, 49]
const col__main_01 = [58, 186, 125]
const col__main_02 = [82, 125, 111]
const col__accent = [251, 136, 141]



//init
// document.addEventListener('DOMContentLoaded', initDom);

// window.addEventListener('popstate', function () {
//   hash = window.location.hash.substring(1) || 'home';
//   popState(hash)
// })


// functions
modelLoaded = () => {
  modelIsLoaded = true;
  loadingScreen.innerHTML = ''
  loadingScreen.style.display = 'none'
  console.log('ml5js model ready');
}

handModelLoaded = () => {
  handModelIsLoaded = true;
  console.log('handpose model ready');
}

getPoses = (p) => {
  pose = p
}

createParticles = () => {
  if (pose.length === 0) return
  if (pose[0].handInViewConfidence < 0.98) return
  pose[0].landmarks.forEach(key => {
    particles.push(new Particle(key[0], key[1], col__accent))
  })
}

window.onresize = () => {
  width = window.innerWidth
  height = window.innerHeight
}


swipeToRoute = (route) => {
  console.log(route)
  window.location.hash = `/${route}`
}


detectSwipe = () => {
  let x = xAvg / 22
  if (labelHandPose === 'X') {
    gestureSwipeRightStates = [false, false, false]
    gestureSwipeLeftStates = [false, false, false]
  } else {
    if (!gestureSwipeRightStates[0]) {
      if (x > breakpoints[1]) gestureSwipeRightStates[0] = true
    } else if (!gestureSwipeRightStates[1]) {
      if (x < breakpoints[1] && x > breakpoints[0]) gestureSwipeRightStates[1] = true
    } else if (!gestureSwipeRightStates[2]) {
      if (x < breakpoints[0]) gestureSwipeRightStates[2] = true
    }

    if (!gestureSwipeLeftStates[0]) {
      if (x < breakpoints[0]) gestureSwipeLeftStates[0] = true
    } else if (!gestureSwipeLeftStates[1]) {
      if (x < breakpoints[1] && x > breakpoints[0]) gestureSwipeLeftStates[1] = true
    } else if (!gestureSwipeLeftStates[2]) {
      if (x > breakpoints[1]) gestureSwipeLeftStates[2] = true
    }
  }
  if (gestureSwipeRightStates.every(e => e === true)) {
    gestureSwipeRightStates = [false, false, false]
    return "swipeRight"
  }
  if (gestureSwipeLeftStates.every(e => e === true)) {
    gestureSwipeLeftStates = [false, false, false]
    return "swipeLeft"
  }
  return null
}


classifyPose = () => {
  if (!handModelIsLoaded) return
  if (pose.length > 0) {
    let inputs = [];
    xAvg = 0
    pose[0].landmarks.forEach(key => {
      let x = key[0]
      let y = key[1]
      xAvg += key[0];
      inputs.push(x);
      inputs.push(y);
    })
    brain.classify(inputs, gotResult);
  }
}

classifyCreatedPose = () => {
  if (pose.length > 0) {
    let inputs = [];
    xAvg = 0
    pose[0].landmarks.forEach(key => {
      let x = key[0]
      let y = key[1]
      xAvg += key[0];
      inputs.push(x);
      inputs.push(y);
    })
    brainCreate.classify(inputs, gotResultBrainCreated);
  }
}

gotResult = (error, results) => {
  if (results[0].confidence > 0.75) {
    // x for closed hand, y for open hand
    labelHandPose = results[0].label.toUpperCase();
  }
}

gotResultBrainCreated = (error, results) => {
  if (results[0].confidence > 0.95 && results[0].label !== labelCreatedPose) {
    labelCreatedPose = results[0].label
    console.log(labelCreatedPose)
  }
}

wait = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}


hide = (el) => {
  el.style.display = 'none'
}

show = (el) => {
  el.style.display = 'inline-block'
}

randomNumber = (min, max) => {
  return Math.random() * (max - min) + min;
}