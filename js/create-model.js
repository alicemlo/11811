// variables
let collectionState = 'waiting' // can have state waiting or collecting
let collectionLabelIndex = -1
let trainingOptions = {
  epochs: 20,
}

stopCollecting = () => {
  collectionState = 'waiting'
  console.log(collectionState)
}

startCollecting = (arg) => {
  if(arg && arg==='restart'){
    brainCreate.neuralNetworkData.data.raw = brainCreate.neuralNetworkData.data.raw.filter(input => input.ys[0] !== create_poseLabel_active)
  }
  if(!create_poseLabel_active) return
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
