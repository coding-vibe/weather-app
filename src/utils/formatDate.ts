import { format } from 'date-fns';

const DATE_FORMAT = 'dd.MM.YYY';

export const formatDate = (date: Date): string => {
  const formattedDate = format(date, DATE_FORMAT);

  return formattedDate;
};

export default formatDate;
