import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import * as classes from './styles';

export default function DataPicker() {
  const onChangeDate = (value: string) => {
    setNewDate(value);
  };

  return (
    <DatePicker
      disableFuture
      disableHighlightToday
      css={classes.datePicker}
      label='Start'
      defaultValue={dayBeforeYesterday}
      maxDate={yesterday}
      onChange={onChangeDate}
    />
  );
}
