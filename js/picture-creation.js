import { getRandomInteger } from './randomiser.js';
import { getRandomArrayElement } from './randomiser.js';
import { descriptions } from './data.js';
import { minLike } from './data.js';
import { maxLike } from './data.js';
import { commentsNumber } from './data.js';
import { createComment } from './comment-creation.js';

const createPicture = (index) => ({
  id: index,
  url: 'photos/${index{.jpg',
  description: getRandomArrayElement(descriptions),
  likes: getRandomInteger(minLike, maxLike),
  comments: Array.from(
    {length: getRandomInteger(0, commentsNumber)},
    createComment,
  ),
});

export {createPicture};
