p5.disableFriendlyErrors = true;

let fraction = 1;

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
  fraction = 640*width

  for (let i = 0; i<21; i++){
    dots.push(new Dot())
  }


  frameRate(30);
}

function draw() {
  if(!modelIsLoaded) return
  let beforeSwipe = null
  let swipe = null
  background(col__dark_01);
  push();
  translate(width, 0);
  scale(-1, 1);
  image(video, 0, 0, 64, 48);
  createParticles();
  setIndexPoints()

  particles.forEach((p, index) =>{
    p.show()
    p.update()
    if(p.destroy()) particles.splice(index, 1)
  })

  if (collectionState === 'collecting') collectPose()
  if(brainCreated) classifyCreatedPose();
  classifyPose();


  if(gesturalInteractionEnabled){
    beforeSwipe = detectBeforeSwipe();
    swipe = detectSwipe();
    detectClick();
    detectScroll()
  }

  if(gestureLabelingEnabled){
    drawLabels();
  }


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


document.addEventListener("giToggle", function() {
  if(giEnabled) showP5();
  else hideP5()
});

hideP5 = () => {
  noLoop();
  document.querySelector('CANVAS').classList.add('hidden')
}

showP5 = () => {
  loop()
  document.querySelector('CANVAS').classList.remove('hidden')
}

drawLabels = () => {
  const x0Inversed = map(xAvg, 0, 14080, 0, width)
  // const x0 = map(xAvg, 14080, 0, 0, width)
  const y0 = map(yAvg, 0, 10560, 0, height)
  fill(251, 136, 141);
  textSize(28);
  let label = ""
  if (labelHandPose === 'Y') label = 'Hand offen'
  if (labelHandPose === 'X') label = 'Hand geschlossen'
  text(label, x0Inversed, y0);
  // if(labelHandPose === 'Y'){
  //   text("<- nach links", xAvg/22+100, yAvg/22+100);
  //   text("nach rechts ->", xAvg/22-100, yAvg/22+100);
  // }
}