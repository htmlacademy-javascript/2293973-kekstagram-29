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

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (index) => index[getRandomInteger(0, index.length - 1)];

const createIdGenerator = () => {
  let generatedId = 0;
  return () => {
    generatedId += 1;
    return generatedId;
  };
};

const generateCommentId = createIdGenerator ();

const createMessage = () => Array.from (
  {length: getRandomInteger(1,2)},
  () => getRandomArrayElement(commentsText),
).join(' ');

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger (1, avatars)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(names),
});

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

const getPictures = () => Array.from(
  {length: photoId},
  (_, pictureIndex) => createPicture(pictureIndex += 1)
);

getPictures();
