import React from 'react';
import StackGrid, { transitions } from "react-stack-grid";

const transition = transitions.fade;

const images = [
  { src: require('../static/photos/IMG_1111.jpg'), label: 'Sample image 1' },
  { src: require('../static/photos/IMG_0024.jpg'), label: 'Sample image 2' },
  { src: require('../static/photos/IMG_0180.jpg'), label: 'Sample image 4' },
  { src: require('../static/photos/IMG_0200.jpg'), label: 'Sample image 5' },
  { src: require('../static/photos/IMG_0203.jpg'), label: 'Sample image 6' },
  { src: require('../static/photos/IMG_0204.jpg'), label: 'Sample image 7' },
  { src: require('../static/photos/IMG_0206.jpg'), label: 'Sample image 8' },
  { src: require('../static/photos/IMG_0207.jpg'), label: 'Sample image 9' },
]

const RealWorld = () => (
  <StackGrid
    monitorImagesLoaded
    columnWidth={'25%'}
    duration={600}
    gutterWidth={2}
    gutterHeight={2}
    easing={null}
    appearDelay={0}
    appear={transition.appear}
    appeared={transition.appeared}
    enter={transition.enter}
    entered={transition.entered}
    leaved={transition.leaved}
  >
    {images.map(obj => (
      <picture
        key={obj.src}
      >
        <img src={obj.src} alt={obj.label} />
      </picture>
    ))}
  </StackGrid>
);

export default RealWorld;