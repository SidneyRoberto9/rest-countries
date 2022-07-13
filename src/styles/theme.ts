export const lightTheme = {
  bg: 'hsl(0, 0%, 98%)',
  text: 'hsl(200, 15%, 8%)',
  elements: 'hsl(0, 0%, 100%)',
  input: 'hsl(0, 0%, 52%)',
};

export const darkTheme = {
  bg: 'hsl(207, 26%, 17%)',
  text: 'hsl(0, 0%, 100%)',
  elements: 'hsl(209, 23%, 22%)',
  input: 'hsl(0, 0%, 52%)',
};

export interface DefaultTheme {
  theme: {
    bg: string;
    text: string;
    elements: string;
    input: string;
  };
}
