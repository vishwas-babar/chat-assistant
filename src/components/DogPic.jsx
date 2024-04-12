// new file called DogPicture.jsx
import React, { useEffect, useState } from 'react';

const DogPic = () => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    setImageUrl('https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*')
  }, []);

  return (
    <div>
      <img src={imageUrl} alt='a dog' />
    </div>
  );
};

export default DogPic;