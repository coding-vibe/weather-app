import { format } from 'date-fns';

const dateFormat = 'dd MMM';

export const formatDate = (date: Date): string => {
  const formattedDate = format(date, dateFormat);
  return formattedDate;
};

export default formatDate;
