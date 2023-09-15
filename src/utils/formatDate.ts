import { format } from 'date-fns';

const convertTimestampToDate = (unixDate: number): Date => {
  const date = new Date(unixDate * 1000);
  return date;
};
export default convertTimestampToDate;

const dateFormat = 'dd MMMM';
export const formatDate = (date: Date): string => {
  const formattedDate = format(date, dateFormat);
  return formattedDate;
};
