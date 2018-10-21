import React from 'react';
import StackGrid, { transitions, easings } from "react-stack-grid";

const transition = transitions.scaleDown;

const images = [
  { src: './static/photos/IMG_1111.jpg', label: 'Sample image 1' },
  { src: './static/photos/IMG_0024.jpg', label: 'Sample image 2' },
  { src: './static/photos/IMG_0180.jpg', label: 'Sample image 4' },
  { src: './static/photos/IMG_0200.jpg', label: 'Sample image 5' },
  { src: './static/photos/IMG_0203.jpg', label: 'Sample image 6' },
  { src: './static/photos/IMG_0204.jpg', label: 'Sample image 7' },
  { src: './static/photos/IMG_0206.jpg', label: 'Sample image 8' },
  { src: './static/photos/IMG_0207.jpg', label: 'Sample image 9' },
];


const RealWorld = () => (
  <StackGrid
    monitorImagesLoaded
    columnWidth={'25%'}
    duration={600}
    gutterWidth={2}
    gutterHeight={2}
    easing={easings.cubicOut}
    appearDelay={0}
    appear={transition.appear}
    appeared={transition.appeared}
    enter={transition.enter}
    entered={transition.entered}
    leaved={transition.leaved}
  >
    {images.map(obj => (
      <div
        key={obj.src}
        className="image"
      >
        <img src={obj.src} alt={obj.label} />
      </div>
    ))}
  </StackGrid>
);

export default RealWorld;