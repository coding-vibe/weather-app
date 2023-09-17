const BASE_URL = import.meta.env.VITE_BASE_URL;

export const generateIconURL = (iconName: string): string =>
  `${BASE_URL}img/wn/${iconName}.png`;

export default generateIconURL;
