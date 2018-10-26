import React from 'react';
import StackGrid, { transitions } from "react-stack-grid";

const transition = transitions.fade;

const images = [
  { src: 'https://ucarecdn.com/0108b138-e59c-4ead-93f7-f4041eae122b/-/resize/300x/IMG_1111.jpg', label: 'Sample image 1' },
  { src: 'https://ucarecdn.com/f093ff7d-54a9-472e-a1a4-b99358e3a184/-/resize/300x/IMG_0024.jpg', label: 'Sample image 2' },
  { src: 'https://ucarecdn.com/baafbdb8-c0da-46a9-98cf-0c48d06ba917/-/resize/300x/IMG_0180.jpg', label: 'Sample image 4' },
  { src: 'https://ucarecdn.com/fc53fc72-896c-46f7-a3eb-91b984fd9837/-/resize/300x/IMG_0200.jpg', label: 'Sample image 5' },
  { src: 'https://ucarecdn.com/fdb1be32-b19c-4c2f-8c9f-22c496016511/-/resize/300x/IMG_0203.jpg', label: 'Sample image 6' },
  { src: 'https://ucarecdn.com/ea8d4c52-4363-4ca9-9cc3-1b7728c7a9f7/-/resize/300x/IMG_0204.jpg', label: 'Sample image 7' },
  { src: 'https://ucarecdn.com/f8484a94-7cea-47ba-957b-72d890f005c8/-/resize/300x/IMG_0206.jpg', label: 'Sample image 8' },
  { src: 'https://ucarecdn.com/2aee865b-cebb-4086-9754-57481a5c8cff/-/resize/300x/IMG_0207.jpg', label: 'Sample image 9' },
]

const RealWorld = () => (
  <StackGrid
    monitorImagesLoaded
    columnWidth={'25%'}
    duration={0}
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