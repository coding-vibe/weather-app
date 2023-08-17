import COUNTRY_CODES from 'utils/countryCodes';

const findCountryNameByCode = (code: string) =>
  COUNTRY_CODES.find((country) => country.code === code)?.name;

export default findCountryNameByCode;
