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
    this.drawSine(50, this.t, 12, 70, 12, 1, 'Java');
    this.drawSine(110, this.t, 25, 70, 3, 3, 'C/C++');
    // this.drawSine(150, this.t, 2, 50, 6, 2.5, 'MATLAB');
    this.drawSine(170, this.t, 15, 50, 8, 0, 'Python');
    this.drawSine(230, this.t, 12, 55, 10, 0, 'HTML');
    this.drawSine(290, this.t, 13, 40, 9, 0, 'CSS');
    this.drawSine(350, this.t, 18, 45, 10, 0, 'JavaScript');
  }

  drawSine(yPos, time, amplitude, frequency, speed, noise, text) {
    let start = 130;

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