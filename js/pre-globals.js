randomNumber = (min, max) => {
  return Math.random() * (max - min) + min;
}

generateRandomID = function () {
  return '_' + Math.random().toString(36).substr(2, 9);
};