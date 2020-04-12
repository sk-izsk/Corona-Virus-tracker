export const isObjectEmpty = (obj: Object) => {
  if (Object.keys(obj).length === 0) {
    return true;
  } else {
    return false;
  }
};

export const isArrayEmpty = (arr: Array<any>) => {
  if (arr.length === 0) {
    return true;
  } else {
    false;
  }
};
