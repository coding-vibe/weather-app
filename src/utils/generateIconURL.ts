const ASSETS_BASE_URL = import.meta.env.VITE_ASSETS_BASE_URL;

const generateIconURL = (iconName: string): string =>
  `${ASSETS_BASE_URL}img/wn/${iconName}.png`;

export default generateIconURL;
