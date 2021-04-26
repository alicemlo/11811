class Particle{
  constructor(x, y, color){
    this.x = x/640*width;
    this.y = y/480*height;
    this.color = color
    this.alpha = 200
  }
  show(){
    noStroke();
    fill(this.color[0], this.color[1], this.color[2], this.alpha);
    ellipse(this.x, this.y, 10, 10)
  }
  update(){
    this.alpha -= 20
  }
  destroy(){
    return this.alpha < 0
  }
}