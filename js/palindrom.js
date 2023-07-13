const less = function (line, length = 20) {
  if (typeof line !== 'string') {
    return false;
  }
  return line.length < length;
};

less (15, 20);

const equal = function (line, length) {
  return line.length === length;
};

equal (15, 18);

const more = function (line, length) {
  return line.length > length;
};

more (15, 10);

const palindrom = function(word) {
  const checkedWord = word.replaceAll(' ','').toLowerCase();
  for (let i = 0; i < checkedWord.length / 2; i++) {
    if (checkedWord[i] !== checkedWord[checkedWord.length - i - 1]) {
      //Собака
      return false;
    }
  }
  return true;
};

palindrom('собака');

palindrom ('довод');
