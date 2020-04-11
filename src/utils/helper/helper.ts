export const isObjectEmpty = (obj: Object) => {
  if (Object.keys(obj).length === 0) {
    return true;
  } else {
    return false;
  }
};
