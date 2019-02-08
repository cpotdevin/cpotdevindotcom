class SkillWaves {
  constructor(width, height, canvasID) {
    this.width = width;
    this.height = height;
    this.canvas = null;
    this.ctx = null;
    this.loopInterval = null;

    this.frameRate = 30;

    this.t = 0;

    this.loop = this.loop.bind(this);
  }

  setSize(width, height) {
    this.width = width;
    this.height = height;
  }

  setup(canvasID) {
    this.canvas = document.getElementById(canvasID);
    this.ctx = this.canvas.getContext('2d');
  }

  begin() {
    this.loopInterval = setInterval(this.loop, 1000/this.frameRate);
  }

  stop () {
    clearInterval(this.loopInterval);
  }

  loop() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.t += 0.01;
    this.drawSine(50, this.t, 10, 70, 12, 1.5, 'Java');
    this.drawSine(100, this.t, 18, 70, 2, 3, 'C/C++');
    // this.drawSine(150, this.t, 2, 50, 6, 2.5, 'MATLAB');
    this.drawSine(150, this.t, 25, 40, 8, 1, 'Python');
    this.drawSine(200, this.t, 18, 30, 10, 0, 'HTML');
    this.drawSine(250, this.t, 20, 25, 4, 0, 'CSS');
    this.drawSine(300, this.t, 30, 20, 10, 0, 'JavaScript');
  }

  drawSine(yPos, time, amplitude, frequency, speed, noise, text) {
    let start = 150;

    this.ctx.fillStyle = 'grey';
    this.ctx.fillRect(start, yPos - 14, 1, 30);
    this.ctx.fillRect(start, yPos + 1, this.width - start, 1);

    this.ctx.fillStyle = 'black';
    this.ctx.font = '25px Sans-serif';
    this.ctx.textAlign = 'right';
    this.ctx.fillText(text, start - 5, yPos + 7);

    this.ctx.beginPath();
    for (let i = start; i < this.width; i++) {
      let currentY = yPos + amplitude*Math.sin(time*speed + i/frequency) + Math.random()*noise;
      if (i === start) {
        this.ctx.moveTo(i + Math.random()*noise, currentY);
      } else {
        this.ctx.lineTo(i + Math.random()*noise, currentY);
      }
    }
    this.ctx.stroke();
  }
}

export default SkillWaves;