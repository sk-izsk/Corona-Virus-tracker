export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    backgroundColor: string;
  };
  text: {
    style: {
      fontFamily: string;
    };
  };
}

export const theme: Theme = {
  colors: {
    primary: '#6a1b9a',
    secondary: '#1e88e5',
    backgroundColor: 'black',
  },
  text: {
    style: {
      fontFamily: 'comic-neue',
    },
  },
};
