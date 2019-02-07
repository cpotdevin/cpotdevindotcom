import React from 'react';

const Video = ({width, height, src}) => (
  <iframe width={width} height={height} src={src} title={src} frameBorder='0' allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen />
);

export default Video;