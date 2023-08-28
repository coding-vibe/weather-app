import { useState } from 'react';
import Box from '@mui/material/Box';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import MinimizeRoundedIcon from '@mui/icons-material/MinimizeRounded';
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
        css={classes.datePicker}
        label='Start'
        value={startDate}
        maxDate={yesterday}
        onChange={onChangeStartDate}
      />
      <MinimizeRoundedIcon css={classes.icon} />
      <DatePicker
        disableHighlightToday
        css={classes.datePicker}
        label='End'
        value={endDate}
        maxDate={yesterday}
        onChange={onChangeEndDate}
      />
    </Box>
  );
}
