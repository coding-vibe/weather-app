const convertTimestampToDate = (timestamp: number): Date => {
  const date = new Date(timestamp * 1000);

  return date;
};
export default convertTimestampToDate;
