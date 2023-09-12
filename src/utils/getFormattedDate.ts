import { format } from 'date-fns';

export const getDate = (unixDate: number) => {
  const date = new Date(unixDate * 1000);
  return date;
};

export const getFormattedDate = (date: Date) => {
  const formattedDate = format(date, 'dd MMM');
  return formattedDate;
};
