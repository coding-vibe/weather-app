import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import SettingsContext from 'contexts/SettingsContext';
import Languages from 'constants/languages';
import TEMPERATURE_UNITS_OPTIONS from 'constants/temperatureUnitsOptions';
import TemperatureUnits from 'constants/temperatureUnits';
import * as classes from './styles';

interface Props {
  className?: string;
}

export default function Settings({ className }: Props) {
  const { t } = useTranslation();
  const {
    language: selectedLanguage,
    onSelectLanguage,
    temperatureUnit,
    onSelectTemperatureUnit,
  } = useContext(SettingsContext);

  return (
    <div
      className={className}
      css={classes.container}>
      <ToggleButtonGroup
        value={selectedLanguage}
        exclusive
        onChange={(_, newLanguage: Languages) =>
          !!newLanguage && onSelectLanguage(newLanguage)
        }>
        {Object.values(Languages).map((language) => (
          <ToggleButton
            key={language}
            value={language}>
            {language}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
      <FormControl
        fullWidth
        css={classes.select}>
        <InputLabel id='temperature-select'>
          {t('labels.temperatureUnitsSelect')}
        </InputLabel>
        <Select
          fullWidth
          css={classes.select}
          label={t('labels.temperatureUnitsSelect')}
          labelId='temperature-select'
          name='temperatureUnit'
          onChange={(e) =>
            onSelectTemperatureUnit(e.target.value as TemperatureUnits)
          }
          value={temperatureUnit}>
          {TEMPERATURE_UNITS_OPTIONS.map(({ label, value }) => (
            <MenuItem
              value={value}
              key={value}>
              {t(label)}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

Settings.defaultProps = {
  className: null,
};
