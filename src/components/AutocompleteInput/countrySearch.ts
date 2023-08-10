import { COUNTRY_CODES } from './countryCodes';

export const countrySearch = (countryCode: string) =>
  COUNTRY_CODES.find((country) => country.code === countryCode)?.name;
