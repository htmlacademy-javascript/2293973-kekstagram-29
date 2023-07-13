const createIdGenerator = () => {
  let generatedId = 0;
  return () => {
    generatedId += 1;
    return generatedId;
  };
};

export {createIdGenerator};
