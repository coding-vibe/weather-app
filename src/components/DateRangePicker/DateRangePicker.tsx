import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import MinimizeIcon from '@mui/icons-material/Minimize';
import * as classes from './styles';

export default function DataRangePicker() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        css={classes.datePicker}
        defaultValue={dayjs('2022-04-17')}
      />
      <MinimizeIcon />
      <DatePicker
        css={classes.datePicker}
        defaultValue={dayjs('2022-04-17')}
      />
    </LocalizationProvider>
  );
}
