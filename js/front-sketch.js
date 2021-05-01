let total = 50;

let boids = []
let indexes = []

function setup() {
  createCanvas(width, height);
  // Add an initial set of boids into the system
  for (let i = 0; i < total; i++) {
    boids[i] = new Boid(random(width), random(height));
  }

  for (let i = 0; i < total; i++) {
    indexes.push([i, Math.floor(random(5))])
  }
}


function draw() {
  background(col__dark_01);

  boids.forEach((item, index) =>{
    item.run(boids)
    let pos = item.getPosition()
  })
  stroke(255, 255, 255, 100)
  strokeWeight(1)

  indexes.forEach(i =>{
    let b1 = boids[i[0]].getPosition()
    let b2 = boids[i[1]].getPosition()
    line(b1.x,b1.y,b2.x, b2.y)

  })
}

  class Boid {
    constructor(x, y) {
      this.acceleration = createVector(0, 0);
      this.velocity = p5.Vector.random2D();
      this.position = createVector(x, y);
      this.r = 3.0;
      this.maxspeed = 0.2;    // Maximum speed
      this.maxforce = 0.05; // Maximum steering force
    }

    getPosition(){
      return this.position
    }

    run(boids) {
      this.flock(boids);
      this.update();
      this.borders();
      this.render();
    }

    // Forces go into acceleration
    applyForce(force) {
      this.acceleration.add(force);
    }

    // We accumulate a new acceleration each time based on three rules
    flock(boids) {
      let sep = this.separate(boids); // Separation
      sep.mult(2.5);
      this.applyForce(sep);
    }

    // Method to update location
    update() {
      this.velocity.add(this.acceleration);
      this.velocity.limit(this.maxspeed);
      this.position.add(this.velocity);
      this.acceleration.mult(0);
    }


    render() {
      fill(127, 127);
      noStroke();
      ellipse(this.position.x, this.position.y, 4, 4);
    }

    borders() {
      if (this.position.x < -this.r) this.position.x = width + this.r;
      if (this.position.y < -this.r) this.position.y = height + this.r;
      if (this.position.x > width + this.r) this.position.x = -this.r;
      if (this.position.y > height + this.r) this.position.y = -this.r;
    }

    separate(boids) {
      let desiredseparation = 25.0;
      let steer = createVector(0, 0);
      let count = 0;
      for (let i = 0; i < boids.length; i++) {
        let d = p5.Vector.dist(this.position, boids[i].position);
        if ((d > 0) && (d < desiredseparation)) {
          let diff = p5.Vector.sub(this.position, boids[i].position);
          diff.normalize();
          diff.div(d);
          steer.add(diff);
          count++;
        }
      }
      if (count > 0) {
        steer.div(count);
      }

      if (steer.mag() > 0) {
        steer.normalize();
        steer.mult(this.maxspeed);
        steer.sub(this.velocity);
        steer.limit(this.maxforce);
      }
      return steer;
    }

  }