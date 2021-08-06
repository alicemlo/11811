/*
* In dieser Datei werden Funktionen gesammelt, die von Anfang an verfügbar sein müssen
* Das sind alles sehr generalistische Funktionen, die man immer irgendwie brauchen kann.
* */

randomNumber = (min, max) => {
  return Math.random() * (max - min) + min;
}

generateRandomID = function () {
  return '_' + Math.random().toString(36).substr(2, 9);
};

wait = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

hide = (el) => {
  el.style.display = 'none'
}

show = (el) => {
  el.style.display = 'inline-block'
}


arraysEqual = (a, b) => {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  const same = b.filter(it =>{
    return a.includes(it)
  })

  return same.length === b.length;
}

removeStringFromArray = (array, item) => {
  array.forEach((i, index) => {
    if (i === item) array.splice(index, 1)
  })
}

getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function appendChildren(parent, nodeList){
  nodeList.forEach(item => {
    parent.appendChild(item);
  })
}