import { getRandomInteger } from './randomiser.js';
import { getRandomArrayElement } from './randomiser.js';
import { commentsText } from './data.js';
const createMessage = () => Array.from (
  {length: getRandomInteger(1,2)},
  () => getRandomArrayElement(commentsText),
).join(' ');

export {createMessage};
