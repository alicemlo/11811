window.setup = setup;
window.draw  = draw;
new p5();

function setup(){
  createCanvas(width, height);
  video = createCapture(VIDEO);
  video.hide();

  poseNet = ml5.handpose(video, modelLoaded);
  poseNet.on('predict', getPoses);

  brain = ml5.neuralNetwork(options);
  brain.load(modelHandPose, handModelLoaded);

  brainCreate = ml5.neuralNetwork(options);

  console.log("Setup")
}

function draw() {
  if(!modelIsLoaded) return
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



  let swipe = detectSwipe()
  if(swipe){
    if(swipe==='swipeLeft'){
      if(storyIndex<story.length-1) storyIndex++
      swipeToRoute(story[storyIndex])
    }
    if(swipe ==='swipeRight'){
      if(storyIndex>0) storyIndex--
      swipeToRoute(story[storyIndex])
    }
  }
}

