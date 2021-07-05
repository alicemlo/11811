p5.disableFriendlyErrors = true;

let fraction = 1;

window.setup = setup;
window.draw  = draw;
new p5();

let tutIndex = 0
const tutGestures = [
  // {
  //   name: 'start tutorial',
  //   completed: false,
  //   instruction: 'Drücke die Leertaste, um das Tutorial zu starten.',
  //   perform: () => {
  //     let self = this;
  //     document.querySelector('BODY').addEventListener('click', () => {
  //       console.log(self)
  //       self.completed = false
  //     })
  //   }
  // },
  {
    name: 'open hand',
    completed: false,
    instruction: 'Öffne deine Hand',
    perform(){
      if(labelHandPose==='X') xCounter++
      else xCounter=0
      if(xCounter>70) {
        this.completed = true
      }
    }
  },
  {
    name: 'closed hand',
    completed: false,
    instruction: 'Schliesse deine Hand',
    perform(){
      if(labelHandPose==='Y') xCounter++
      else xCounter=0
      if(xCounter>70) {
        this.completed = true
      }
    }
  },
  {
    name: 'swipe right',
    completed: false,
    instruction: 'Mit geöffneter Hand nach rechts',
    perform(){
      if(gestureSwipeLeftIndex === 3) this.completed = true
      console.log("swipe right")
    }
  },
  {
    name: 'swipe left',
    completed: false,
    instruction: 'Mit geöffneter Hand nach links',
    perform(){
      if(gestureSwipeRightIndex === 3) this.completed = true
    }
  },
]

let xCounter = 0;
let yCounter = 0;

function setup(){
  createCanvas(width, height);
  video = createCapture(VIDEO);
  video.hide();

  poseNet = ml5.handpose(video, modelLoaded);
  poseNet.on('predict', getPoses);

  brain = ml5.neuralNetwork(options);
  brain.load(modelHandPose, handModelLoaded);

  brainCreate = ml5.neuralNetwork(options);
  fraction = 640*width

  frameRate(30);
}

function draw() {
  if(!modelIsLoaded) return
  let viewGestures = window.location.hash==='#/gestures'

  background(col__dark_01);
  push();
  translate(width, 0);
  scale(-1, 1);
  image(video, 0, 0, 64, 48);
  createParticles();
  particles.forEach((p, index) =>{
    p.show()
    p.update()
    if(p.destroy()) particles.splice(index, 1)
  })


  if (collectionState === 'collecting') collectPose()
  if(brainCreated) classifyCreatedPose();
  classifyPose();


  let beforeSwipe = detectBeforeSwipe();
  let swipe = detectSwipe();
  let click = detectClick();

  if(beforeSwipe){
    noStroke()
    fill(255, 255, 255, 30)
    if(beforeSwipe==='beforeLeft'){
      ellipse(0, height/2, 400, height)
    }else if(beforeSwipe==='beforeRight'){
      ellipse(width,height/2, 400, height)
    }
  }

  if(swipe){
    if(viewGestures) return
    if(swipe==='swipeLeft'){
      if(storyIndex<story.length-1) storyIndex++
      swipeToRoute(story[storyIndex])
    }
    if(swipe ==='swipeRight'){
      if(storyIndex>0) storyIndex--
      swipeToRoute(story[storyIndex])
    }
  }



  if(viewGestures){
    console.log(tutIndex)
    if(tutIndex>=tutGestures.length) {
      console.log("tutorial completed")
      return
    }
    if(tutGestures[tutIndex].completed) tutIndex++
    else tutGestures[tutIndex].perform()
  }
}


window.onresize = () => {
  width = window.innerWidth
  height = window.innerHeight
}

