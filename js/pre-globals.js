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
