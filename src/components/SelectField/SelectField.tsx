import { useTranslation } from 'react-i18next';
import { FieldProps } from 'formik';
import { SelectChangeEvent } from '@mui/material/Select';
import omit from 'lodash/omit';
import Select from 'components/Select';
import { FormValuesType } from 'components/HistoricalWeatherForm/validation';
import Languages from 'constants/languages';
import OptionBase from 'types/optionBase';

interface Props<Option extends OptionBase>
  extends FieldProps<Option['value'], FormValuesType> {
  label: string;
  labelId: string;
  options: Option[];
  onSelectLanguage?: (value: Languages) => void;
}

export default function SelectField<Option extends OptionBase>({
  field: { name, value },
  form: { getFieldMeta, setFieldValue },
  onSelectLanguage,
  ...props
}: Props<Option>) {
  const { t } = useTranslation();
  const meta = getFieldMeta(name);
  const hasError = meta?.touched && !!meta?.error;
  const helperText = meta?.touched && !!meta?.error ? t(meta?.error) : '';

  const changeHandler = (event: SelectChangeEvent) => {
    const selectedOption = event.target.value;
    if (onSelectLanguage) {
      onSelectLanguage(selectedOption as Languages);
    }
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    setFieldValue(name, selectedOption);
  };

  return (
    <Select<Option>
      error={hasError}
      helperText={helperText}
      name={name}
      setValue={changeHandler}
      value={value}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...omit(props)}
    />
  );
}

SelectField.defaultProps = {
  onSelectLanguage: null,
};
