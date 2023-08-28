import { useState } from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { FieldChangeHandlerContext } from '@mui/x-date-pickers/internals';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import MinimizeRoundedIcon from '@mui/icons-material/MinimizeRounded';
import { startOfYesterday, subDays } from 'date-fns';
import * as classes from './styles';

export default function DataPicker() {
  const [startDate, setStartDate] = useState<string | null>(null);
  const [endDate, setEndDate] = useState<string | null>(null);
  const yesterday = startOfYesterday();
  const dayBeforeYesterday = subDays(yesterday, 1);

  const onChangeDate = (
    value: string,
    context: FieldChangeHandlerContext,
  ) => {

  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        disableFuture
        disableHighlightToday
        css={classes.datePicker}
        label='Start'
        defaultValue={dayBeforeYesterday}
        maxDate={yesterday}
      />
      <MinimizeRoundedIcon css={classes.icon} />
      <DatePicker
        disableFuture
        disableHighlightToday
        css={classes.datePicker}
        label='End'
        defaultValue={yesterday}
        maxDate={yesterday}
      />
    </LocalizationProvider>
  );
}
