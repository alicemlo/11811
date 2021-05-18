toggleGi = (item, button) => {
  loader = document.querySelector('#loader')
  giEnabled = !giEnabled;
  if(button) giEnabled ? button.classList.add('active') : button.classList.remove('active')

  if(giEnabled){
    loader.classList.remove('invisible')
    giScripts.forEach(itm =>{
      const script = document.createElement('script');
      script.id = itm.id;
      script.src = itm.src;
      item.append(script);
    })
  }else{
    loader.classList.add('invisible')
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

// ml5js

modelLoaded = () => {
  loader = document.querySelector('#loader')
  loader.classList.add('invisible')
  modelIsLoaded = true;
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


detectSwipe = () => {
  let x = xAvg / 22
  if (labelHandPose === 'X') {
    gestureSwipeLeftIndex = 0
    gestureSwipeRightIndex = 0
  } else {

    if(x > breakpoints[2]){
      // area 3
      if(gestureSwipeLeftIndex===2) gestureSwipeLeftIndex = 3
      gestureSwipeRightIndex = 0
    }else if(x < breakpoints[0]){
      // area 0
      gestureSwipeLeftIndex = 0
      if(gestureSwipeRightIndex===2) gestureSwipeRightIndex = 3
    }else if(x >= breakpoints[0] && x<breakpoints[1]){
      // area 1
      if(gestureSwipeLeftIndex===0) gestureSwipeLeftIndex = 1
      if(gestureSwipeRightIndex===1) gestureSwipeRightIndex = 2
    }else if(x >= breakpoints[1] && x<breakpoints[2]){
      // area 2
      if(gestureSwipeLeftIndex===1) gestureSwipeLeftIndex = 2
      if(gestureSwipeRightIndex===0) gestureSwipeRightIndex = 1
    }
  }
  if (gestureSwipeRightIndex===3) {
    gestureSwipeRightIndex = 0
    return "swipeRight"
  }
  if (gestureSwipeLeftIndex===3) {
    gestureSwipeLeftIndex = 0
    return "swipeLeft"
  }
  return null
}



detectBeforeSwipe = () =>{
  if(gestureSwipeLeftIndex===2) return "beforeLeft"
  if(gestureSwipeRightIndex===2) return "beforeRight"
  else return false
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

    gestureBox = {
      x0: pose[0].boundingBox.topLeft[0],
      y0: pose[0].boundingBox.topLeft[1],
      x1: pose[0].boundingBox.bottomRight[0],
      y1: pose[0].boundingBox.bottomRight[1],
    }
  }else{
    gestureBox = {
      x0: 0,
      y0: 0,
      x1: 0,
      y1: 0,
    }
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



stopCollecting = () => {
  collectionState = 'waiting'
  console.log(collectionState)
}

startCollecting = (arg) => {
  let activeLabel = train_model_data.activePoseLabel
  if(arg && arg==='restart'){
    brainCreate.neuralNetworkData.data.raw = brainCreate.neuralNetworkData.data.raw.filter(input => input.ys[0] !== activeLabel)
  }
  if(!activeLabel) return
  collectionState = 'collecting'
  wait(4000).then(() =>{
    collectionState = 'waiting'
    poseCollected = true
  })
}

trainingSaveData = () =>{
  brainCreate.saveData(); // provide file name (input field)
}

trainCollection = () => {
  collectionState = 'waiting'
  brainCreate.normalizeData();
  brainCreate.train(trainingOptions, whileTraining, finishedTraining)
}


whileTraining = (epoch, loss) => {
  // console.log(`epoch: ${epoch}, loss:${loss}`);
  // console.log(loss)
  trainingDataEpochs.innerText=epoch
  trainingDataLoss.innerText=loss.acc
  trainingDataAccuracy.innerText=loss.loss
  // loss should get smaller and accuracy should get higher
  //  If the errors are high, the loss will be high, which means that the model does not do a good job. Otherwise, the lower it is, the better our model works.
}

finishedTraining = (x, y) =>{
  console.log("model has finished training")
  console.log(brainCreate)
  brainCreated = true
}

collectPose = () => {
  let inputs = [];
  if (pose.length > 0) {
    pose[0].landmarks.forEach(key => {
      let x = key[0]
      let y = key[1]
      inputs.push(x);
      inputs.push(y);
    })
  } else {
    for (let i = 0; i < 21; i++) {
      let x = 0
      let y = 0
      inputs.push(x);
      inputs.push(y);
    }
  }
  console.log(inputs)
  let target = [create_poseLabel_active];
  brainCreate.addData(inputs, target);
  console.log(brainCreate)
}

gestureSize = () =>{
  return dist(gestureBox.x0, gestureBox.y0, gestureBox.x1, gestureBox.y1)
}


swipeToRoute = (route) => {
  console.log(route)
  window.location.hash = `/${route}`
}

// random functions

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