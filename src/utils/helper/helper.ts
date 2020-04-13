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

export const deathRate = (obj: any) => {
  return (Number(obj.deaths) / Number(obj.cases)) * 100;
};
