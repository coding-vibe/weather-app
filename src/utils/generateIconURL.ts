const BASE_URL = import.meta.env.VITE_BASE_URL;

const generateIconURL = (iconName: string): string =>
  `${BASE_URL}img/wn/${iconName}.png`;

export default generateIconURL;
