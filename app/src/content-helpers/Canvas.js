import React from 'react';
import SkillWaves from '../proyects/test/SkillWaves';

class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialCanvasWidth: props.width,
      initialCanvasHeight: props.height,
      canvasWidth: props.width,
      canvasHeight: props.height,
      canvasID: props.canvasID
    };
    
    this.resizeCanvas = this.resizeCanvas.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.resizeCanvas);
    this.canvas = new SkillWaves(this.state.canvasWidth, this.state.canvasHeight, this.state.canvasID);
    this.resizeCanvas();
    this.canvas.setup(this.state.canvasID);
    this.canvas.begin();
  }

  async resizeCanvas() {
    const width = window.innerWidth;
    const scale = width/1000;
    let newCanvasWidth = this.state.initialCanvasWidth*scale;
    // let newCanvasHeight = this.state.initialCanvasHeight*scale;
    if (width < 500) {
      newCanvasWidth = this.state.initialCanvasWidth*0.5;
      // newCanvasHeight = this.state.initialCanvasHeight*0.5;
    } else if (1200 < width) {
      newCanvasWidth = this.state.initialCanvasWidth*1.2;
      // newCanvasHeight = this.state.initialCanvasHeight*1.2;
    }
    this.canvas.setSize(newCanvasWidth, this.state.initialCanvasHeight);
    await this.setState({canvasWidth: newCanvasWidth});
  }

  render() {
    return (
      <canvas id={this.state.canvasID} width={this.state.canvasWidth} height={this.state.canvasHeight} />
    );
  }
}

export default Canvas;