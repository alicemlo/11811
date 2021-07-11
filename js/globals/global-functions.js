toggleGi = (item, button) => {
  const body = document.querySelector('body')
  loader = document.querySelector('#loader')
  giEnabled = !giEnabled;
  if (button) giEnabled ? button.classList.add('active') : button.classList.remove('active')
  giEnabled ? body.classList.add('gi') : body.classList.remove('gi')
  if(!scriptsLoaded && giEnabled) appendScripts(item);
  if(scriptsLoaded) document.dispatchEvent(giToggleEvent);
}

appendScripts = (item) => {
  loader.classList.remove('invisible')
  giScripts.forEach(itm => {
    const script = document.createElement('script');
    script.id = itm.id;
    script.src = itm.src;
    item.append(script);
  })
  scriptsLoaded = true
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

let landmarksOld = null
let landmarks = null
let transformedLandmarks = null

getPoses = (p) => {
  poseOld = pose
  pose = p
  landmarksOld = poseOld[0] ? poseOld[0].landmarks : null
  landmarks = pose[0] ? pose[0].landmarks : null
  transformLandmarks()
}


transformLandmarks = () => {
  if(landmarksOld?.length && landmarks?.length){
    transformedLandmarks = landmarks.map((entry, index) => {
      return {
        x: lerp(entry[0], landmarksOld[index][0], 0.5 ),
        y: lerp(entry[1], landmarksOld[index][1], 0.5 ),
      }
    })
  }else if(landmarks?.length){
    transformedLandmarks = landmarks.map(entry => {
      return { x: entry[0], y: entry[1] }
    })
  }else{
    transformedLandmarks = null
  }
}


createParticles = () => {
  if (!transformedLandmarks) return
  //if(!pose[0] || !landmarks || !landmarksOld) return
  if (pose[0].handInViewConfidence < 0.95) return

  transformedLandmarks.forEach(key => particles.push(new Particle(key.x, key.y, col__accent)))

  // dots.forEach((dot, index) =>{
  //   const x = lerp(landmarks[index][0], landmarksOld[index][0], 0.5) / 640 * width
  //   const y = lerp(landmarks[index][1], landmarksOld[index][1], 0.5) / 420 * height
  //   dot.update(x, y)
  // })

}

detectClick = () => {
  const hoveredElement = document.elementFromPoint(xIndex, yIndex-80)
  if(!hoveredElement) return
  const id = hoveredElement.getAttribute('data-id');
  if (!id) {
    resetTimeout()
    hoveredElementID = null
    return
  }
  if (id && id !== hoveredElementID) setHoveredElementID(id);
}

resetTimeout = () => {
  clearTimeout(clickTimeout)
  document.querySelectorAll('.click-animation')?.forEach(it => it.classList.remove('click-animation'))
}

setHoveredElementID = (id) => {
  resetTimeout()
  hoveredElementID = id
  document.querySelectorAll('.click-animation')?.forEach(it => it.classList.remove('click-animation'))
  const el = document.querySelector(`.gclick[data-id=${id}]`)
  if(el) el.classList.add('click-animation')
  clickTimeout = setTimeout(function () {
    if(el) {
      el.click();
      el.classList.remove('click-animation')
    }
  }, 600);
}

setIndexPoints = () => {
  const oldXIndex = xIndex
  const oldYIndex = yIndex

  if(!pose[0]){
    xIndex = 0
    yIndex = 0
  }else{
    xIndex = map(pose[0].annotations.indexFinger[3][0], 640, 0, 0, width)
    yIndex = map(pose[0].annotations.indexFinger[3][1], 0, 420, 0, height)
  }

  // if(!pose[0]){
  //   xIndex = 0
  //   yIndex = 0
  // }else if(oldXIndex === 0){
  //   xIndex = map(pose[0].annotations.indexFinger[3][0], 640, 0, 0, width)
  //   yIndex = map(pose[0].annotations.indexFinger[3][1], 0, 420, 0, height)
  // }else {
  //   const xNew = map(pose[0].annotations.indexFinger[3][0], 640, 0, 0, width)
  //   const yNew = map(pose[0].annotations.indexFinger[3][1], 0, 420, 0, height)
  //   xIndex = lerp(xNew, oldXIndex, 0.5)
  //   yIndex = lerp(yNew, oldYIndex, 0.5)
  // }
}

detectScroll = () => {
  let y = 0
  if(pose[0]){
    y = yAvg/22
    if(y > 400) window.scroll({ top: window.scrollY+22,  left: 0});
    else if(y > 370) window.scroll({ top: window.scrollY+15,  left: 0});
    else if(y < 50)window.scroll({ top: window.scrollY-22,  left: 0});
    else if(y < 100)window.scroll({ top: window.scrollY-15,  left: 0});
  }
}

detectSwipe = () => {
  let x = xAvg / 22
  if (labelHandPose === 'Y') {
    if (x > breakpoints[2]) {
      // area 3
      if (gestureSwipeLeftIndex === 2) gestureSwipeLeftIndex = 3
      gestureSwipeRightIndex = 0
    } else if (x < breakpoints[0]) {
      // area 0
      gestureSwipeLeftIndex = 0
      if (gestureSwipeRightIndex === 2) gestureSwipeRightIndex = 3
    } else if (x >= breakpoints[0] && x < breakpoints[1]) {
      // area 1
      if (gestureSwipeLeftIndex === 0) gestureSwipeLeftIndex = 1
      if (gestureSwipeRightIndex === 1) gestureSwipeRightIndex = 2
    } else if (x >= breakpoints[1] && x < breakpoints[2]) {
      // area 2
      if (gestureSwipeLeftIndex === 1) gestureSwipeLeftIndex = 2
      if (gestureSwipeRightIndex === 0) gestureSwipeRightIndex = 1
    }
  } else {
    gestureSwipeLeftIndex = 0
    gestureSwipeRightIndex = 0
  }
  if (gestureSwipeRightIndex === 3) {
    gestureSwipeRightIndex = 0
    return "swipeRight"
  }
  if (gestureSwipeLeftIndex === 3) {
    gestureSwipeLeftIndex = 0
    return "swipeLeft"
  }
  return null
}


detectBeforeSwipeRight = () => {
  return gestureSwipeRightIndex === 2;
}

detectBeforeSwipeLeft = () => {
  return gestureSwipeLeftIndex === 2;
}


classifyPose = () => {
  if (!handModelIsLoaded) return
  poseInputsOld = poseInputs

  if (pose.length > 0) {
    poseInputs = [];
    xAvg = 0
    yAvg = 0
    pose[0].landmarks.forEach(key => {
      xAvg += key[0];
      yAvg += key[1];
      poseInputs.push(key[0]);
      poseInputs.push(key[1]);
    })
    brain.classify(poseInputs, gotResult);
    // setGestureBox(pose[0])
  } else {
    // setGestureBox(null)
  }
}

setGestureBox = (pose) =>{
  if(!pose){
    gestureBox = { x0: 0,  y0: 0,  x1: 0,  y1: 0, }
  }else{
    gestureBox = {
      x0: pose.boundingBox.topLeft[0],
      y0: pose.boundingBox.topLeft[1],
      x1: pose.boundingBox.bottomRight[0],
      y1: pose.boundingBox.bottomRight[1],
    }
  }

}

classifyCreatedPose = () => {
  if (pose.length > 0) {
    let inputs = [];
    xAvg = 0
    yAvg = 0
    pose[0].landmarks.forEach(key => {
      let x = key[0]
      let y = key[1]
      xAvg += key[0];
      yAvg += key[1];
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
  if (!results.length) return
  if (results[0].confidence < 0.9) {
    labelCreatedPose = ''
    setPoseLabelModelCreated(false)
  } else if (results[0].confidence > 0.93 && results[0].label !== labelCreatedPose) {
    labelCreatedPose = results[0].label
    if (stateTestModel) setPoseLabelModelCreated(true)
    console.log(labelCreatedPose)
  }

}


setPoseLabelModelCreated = (pose) => {
  trainedPoseLabel.innerText = pose ? labelCreatedPose : '-'
}


stopCollecting = () => {
  collectionState = 'waiting'
  console.log(collectionState)
}

startCollecting = (arg) => {
  const activeLabel = train_model_data.activePoseLabel
  if (arg && arg === 'restart') {
    console.log(brainCreate)
    brainCreate.neuralNetworkData.data.raw = brainCreate.neuralNetworkData.data.raw.filter(input => input.ys[0] !== activeLabel)
  }
  if (!activeLabel) return
  collectionState = 'collecting'

  setCountdown();

  document.querySelector('.collect-data-controls').classList.add('opacity-25')

  wait(trainingTime).then(() => {
    collectionState = 'waiting'
    poseCollected = true
    document.querySelector('.collect-data-controls').classList.remove('opacity-25')
    if (!arg) {
      document.querySelector('.btn-collect-start').classList.add('invisible')
      document.querySelector('.btn-collect-restart').classList.remove('invisible')
      enableTrainEvent()
    }
  })
}


setCountdown = () => {
  trainingCountdown = 4
  const pre = document.querySelector('.col-2 pre')
  let i = trainingCountdown
  pre.innerText = i

  const timer = setInterval(function () {
    i--;
    if (i <= 0) clearInterval(timer);
    else pre.innerText = `${i}`
    if (i === 0) pre.innerText = "Sammlung fertig"
  }, 1000);

}


disableTrainEvent = () => {
  const button = document.querySelector('.col-1-event')
  if (button) button.classList.add('opacity-25')
}

enableTrainEvent = () => {
  const button = document.querySelector('.col-1-event')
  if (button) button.classList.remove('opacity-25')
}

disableButton = (btnClass) => {
  const classname = "." + btnClass
  const button = document.querySelector(classname)
  if (button) button.classList.add('opacity-25')
  else console.log("no button found")
}

enableButton = (btnClass) => {
  const classname = "." + btnClass
  const button = document.querySelector(classname)
  if (button) button.classList.remove('opacity-25')
  else console.log("no button found")
}


trainingSaveData = () => {
  brainCreate.saveData(); // provide file name (input field)
}

trainCollection = () => {
  collectionState = 'waiting'
  brainCreate.normalizeData();
  console.log(brainCreate)
  brainCreate.train(trainingOptions, whileTraining, finishedTraining)
}


whileTraining = (epoch, loss) => {
  // console.log(`epoch: ${epoch}, loss:${loss}`);
  // console.log(loss)
  trainingDataEpochs.innerText = epoch
  trainingDataLoss.innerText = loss.acc
  trainingDataAccuracy.innerText = loss.loss

  if (loss.loss < 0.001) trainingDataLoss.innerText += '(gut)'
  if (loss.acc > 0.7) trainingDataAccuracy.innerText += '(gut)'
  // loss should get smaller and accuracy should get higher
  //  If the errors are high, the loss will be high, which means that the model does not do a good job. Otherwise, the lower it is, the
  // better our model works.
}

finishedTraining = () => {
  brainCreated = true
  enableTrainEvent();
  enableButton('train-save');
  disableButton('btn-train-start')
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
  const target = [train_model_data.activePoseLabel];
  brainCreate.addData(inputs, target);
}

gestureSize = () => {
  return dist(gestureBox.x0, gestureBox.y0, gestureBox.x1, gestureBox.y1)
}


swipeToRoute = (route) => {
  console.log(route)
  window.location.hash = `/${route}`
}


document.documentElement.addEventListener('keydown', function (e) {
  if ((e.keycode || e.which) == 32) {
    e.preventDefault();
    alert('„Nr. 11811, Sie gehen sofort an die Maschine zurück und vergessen, dass Sie sie jemals verlassen haben – verstanden?“ ... Metropolis [Film], Fritz Lang, 1927 ')
  }
}, false);
