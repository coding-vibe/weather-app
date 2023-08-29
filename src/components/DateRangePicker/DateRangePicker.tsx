import { useState } from 'react';
import Box from '@mui/material/Box';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { startOfYesterday } from 'date-fns';
import * as classes from './styles';

export default function DataPicker() {
  const yesterday = startOfYesterday();
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const onChangeStartDate = (value: Date | null) => setStartDate(value);
  const onChangeEndDate = (value: Date | null) => setEndDate(value);

  return (
    <Box css={classes.wrap}>
      <DatePicker
        disableHighlightToday
        css={classes.startDatePicker}
        label='Start'
        value={startDate}
        maxDate={yesterday}
        onChange={onChangeStartDate}
      />
      <DatePicker
        disableHighlightToday
        css={classes.endDatePicker}
        label='End'
        value={endDate}
        maxDate={yesterday}
        onChange={onChangeEndDate}
      />
    </Box>
  );
}
