class Dot{
  constructor() {
    this.x = 0;
    this.y = 0;
    this.color = [255, 255, 255]
    this.alpha = 0
  }

  create(){

  }

  update(xNew, yNew, xOld, yOld){
    const x = lerp(xOld, xNew, 0.5)
    const y = lerp(yOld, yNew, 0.5)

    noStroke();
    fill(this.color[0], this.color[1], this.color[2]);
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