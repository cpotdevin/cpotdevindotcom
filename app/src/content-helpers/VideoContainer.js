import React from 'react';
import Video from './Video';

class VideoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialVideoWidth: props.width,
      initialVideoHeight: props.height,
      videoWidth: props.width,
      videoHeight: props.height,
      src: props.src
    };

    this.resizeVideo = this.resizeVideo.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.resizeVideo);
    this.resizeVideo();
  }

  resizeVideo() {
    const width = window.innerWidth;
    const scale = width/1000;
    let newVideoWidth = this.state.initialVideoWidth*scale;
    let newVideoHeight = this.state.initialVideoHeight*scale;
    if (width < 500) {
      newVideoWidth = this.state.initialVideoWidth*0.5;
      newVideoHeight = this.state.initialVideoHeight*0.5;
    } else if (1200 < width) {
      newVideoWidth = this.state.initialVideoWidth*1.2;
      newVideoHeight = this.state.initialVideoHeight*1.2;
    }
    this.setState({videoWidth: newVideoWidth, videoHeight: newVideoHeight});
  }

  render() {
    return (
      <Video width={this.state.videoWidth} height={this.state.videoHeight} src={this.state.src} />
    );
  }
}

export default VideoContainer;