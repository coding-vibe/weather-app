import { useState } from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import MinimizeRoundedIcon from '@mui/icons-material/MinimizeRounded';
import { startOfYesterday, subDays } from 'date-fns';
import { useSnackbar } from 'notistack';
import * as classes from './styles';

export default function DataPicker() {
  const { enqueueSnackbar } = useSnackbar();
  const yesterday = startOfYesterday();
  const dayBeforeYesterday = subDays(yesterday, 1);
  const [startDate, setStartDate] = useState<Date | null>(dayBeforeYesterday);
  const [endDate, setEndDate] = useState<Date | null>(yesterday);

  const onChangeStartDate = (value: Date | null) =>
    endDate && value && value <= endDate
      ? setStartDate(value)
      : enqueueSnackbar('Start date must be less than or equal to end date', {
          variant: 'error',
        });
  const onChangeEndDate = (value: Date | null) =>
    startDate && value && startDate <= value
      ? setEndDate(value)
      : enqueueSnackbar(
          'End date date must be greater then or equal to start date',
          {
            variant: 'error',
          },
        );

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        disableFuture
        disableHighlightToday
        css={classes.datePicker}
        label='Start'
        value={startDate}
        defaultValue={dayBeforeYesterday}
        maxDate={yesterday}
        onChange={onChangeStartDate}
      />
      <MinimizeRoundedIcon css={classes.icon} />
      <DatePicker
        disableFuture
        disableHighlightToday
        css={classes.datePicker}
        label='End'
        defaultValue={yesterday}
        value={endDate}
        maxDate={yesterday}
        onChange={onChangeEndDate}
      />
    </LocalizationProvider>
  );
}
