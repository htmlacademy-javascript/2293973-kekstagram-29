import { createIdGenerator } from './id-generator-creation.js';
const photoId = 25;
const avatars = 6;
const minLike = 15;
const maxLike = 200;
const commentsNumber = 30;
const commentsText = [
  'класс',
  'прикольно',
  'нормас',
  'отстой',
  'зачем такое выкладывать',
  'супер',
  'фу',
  'это ты где',
  'наелся и спит'
];
const descriptions = [
  'на чиле!',
  'на расслабоне',
  'отдыхаем',
  '2023',
  'Тагил',
  'мопс дядя пес',
  'обновочка',
  'с любимой',
  'подарочки',
  'жара'
];
const names = [
  'Тима',
  'Саша',
  'Рома',
  'Антуан',
  'Эрих',
  'Мария',
  'Ремарк'
];

const generateCommentId = createIdGenerator ();

export {photoId};
export {generateCommentId};
export {avatars};
export {names};
export {minLike};
export {maxLike};
export {commentsNumber};
export {commentsText};
export {descriptions};

