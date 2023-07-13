import { photoId } from './data.js';
import { createPicture } from './picture-creation.js';

const getPictures = () => Array.from(
  {length: photoId},
  (_, pictureIndex) => createPicture(pictureIndex += 1)
);

getPictures();
