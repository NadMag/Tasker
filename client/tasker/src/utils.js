export const getOrderedByKey = (unordered, keySelector) => {
  const sortedKeys = Array.sort(unordered.map(o => keySelector(o)));
  return sortedKeys.map(key => unordered[key]);
};

export const mapObjectToArray = obj => {
  return Object.entries(obj).map(keyValueArr => keyValueArr[1]);
};
