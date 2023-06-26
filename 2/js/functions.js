const less = function (line, length) {
  return line.length < length;
  console.log (`Строка ${ line }короче ${ length } символов.`);
};

less (15, 20);

const equal = function (line, length) {
  return line.length === length;
  console.log (`Строка ${ line }равна ${ length } символам.`);
};

equal (15, 18);

const more = function (line, length) {
  return line.length > length;
  console.log (`Строка ${ line }равна ${ length } символам.`);
};

more (15, 10);

const palindrom = function(word) {
  const checkedWord = word.replaceAll(' ','').toLowerCase();
  for (let i = 0; i < String.length / 2; i++) {
    if (checkedWord[i] !== checkedWord[checkedWord.length - i - 1]) {
      return false;
    }
  }
  return true;
};

palindrom('собака');

palindrom ('довод');
