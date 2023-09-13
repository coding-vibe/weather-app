import { format } from 'date-fns';

const convertTimestampToDate = (unixDate: number): Date => {
  const date = new Date(unixDate * 1000);
  return date;
};
export default convertTimestampToDate;

export const formatDate = (date: Date): string => {
  const formattedDate = format(date, 'dd MMM');
  return formattedDate;
};
