import { format } from 'date-fns';

const dateFormat = 'dd MMMM';

export const formatDate = (date: Date): string => {
  const formattedDate = format(date, dateFormat);
  return formattedDate;
};

export default formatDate;
