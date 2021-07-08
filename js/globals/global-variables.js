let giEnabled = false
let loader;
let lastStory = ''

let storyIndex = story.indexOf(window.location.hash.substring(1)) < 0 ? 0 : story.indexOf(window.location.hash.substring(1))
let create_poseLabel_active = ''
let poseCollected = false


// ml5js
let video, poseNet, brain, brainCreate
let modelIsLoaded = false
let handModelIsLoaded = false
let labelHandPose = ''
let labelCreatedPose = ''
let brainCreated = false
let status = false
let gesturalInteractionEnabled = true
let gestureLabelingEnabled = false
let hoveredElementID = null
let clickTimeout = null;

let dots = [];




// gestures
let gestureSwipeLeftIndex = 0
let gestureSwipeRightIndex = 0
let gestureBox = {
  x0: 0,
  y0: 0,
  x1: 0,
  y1: 0,
}
let gesturePushStates = [false, false, false];


// height + width
let width = window.innerWidth
let height = window.innerHeight


// data
let pose = [];
let poseOld = [];
let particles = []
let xAvg = 0
let yAvg = 0
let xIndex = 0
let yIndex = 0





// TRAINING DATA
// variables
let collectionState = 'waiting' // can have state waiting or collecting
let collectionLabelIndex = -1
const trainingOptions = {
  epochs: 20,
  batchSize: 10
}
let stateTestModel = false


// dom
let trainingDataEpochs, trainingDataLoss, trainingDataAccuracy, trainingSaveData, trainedPoseLabel
let eventButtons = []
