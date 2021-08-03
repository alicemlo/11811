// not in use

class Dot{
  constructor() {
    this.x = 0;
    this.y = 0;
    this.color = [255, 255, 255]
    this.alpha = 0
  }

  create(){

  }

  update(x, y, index){
    noStroke();
    fill(251, 136, 141);
    ellipse(x, y, 10, 10)
  }

  hide(){
    this.alpha = 0
  }

  show(){
    this.alpha = 1
  }

  run(){

  }
}