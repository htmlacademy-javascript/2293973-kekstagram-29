import { generateCommentId } from './data.js';
import { getRandomInteger } from './randomiser.js';
import { getRandomArrayElement } from './randomiser.js';
import { createMessage } from './message-creation.js';
import { avatars } from './data.js';
import { names } from './data.js';

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger (1, avatars)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(names),
});

export {createComment};
