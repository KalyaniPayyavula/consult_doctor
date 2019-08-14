import React from 'react';
import { Image } from 'grommet';

const MelodyImage = (props) => {
  return (
    <Image 
      src={props.src}
      fit={props.fit}
      alignSelf={props.alignSelf}
    />
  )
}

export default MelodyImage;