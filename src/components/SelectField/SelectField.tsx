import { useTranslation } from 'react-i18next';
import { FieldProps } from 'formik';
import { SelectChangeEvent } from '@mui/material/Select';
import Select from 'components/Select';
import { FormValuesType } from 'components/HistoricalWeatherForm/validation';
import OptionBase from 'types/optionBase';

interface Props<Option extends OptionBase>
  extends FieldProps<Option['value'], FormValuesType> {
  label: string;
  labelId: string;
  options: Option[];
  setOption?: (value: Option['value']) => void;
}

export default function SelectField<Option extends OptionBase>({
  field: { name, value },
  form: { getFieldMeta, setFieldValue },
  label,
  labelId,
  options,
  setOption,
}: Props<Option>) {
  const { t } = useTranslation();
  const meta = getFieldMeta(name);
  const hasError = meta?.touched && !!meta?.error;
  const helperText = meta?.touched && !!meta?.error ? t(meta?.error) : '';

  const handleChange = (event: SelectChangeEvent) => {
    const selectedOption = event.target.value;
    if (setOption) {
      setOption(selectedOption);
    }
    setFieldValue(name, selectedOption);
  };

  return (
    <Select<Option>
      error={hasError}
      helperText={helperText}
      label={label}
      labelId={labelId}
      name={name}
      options={options}
      setValue={handleChange}
      value={value}
    />
  );
}

SelectField.defaultProps = {
  setOption: null,
};
