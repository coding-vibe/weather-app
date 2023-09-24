import { useTranslation } from 'react-i18next';
import { FieldProps } from 'formik';
import omit from 'lodash/omit';
import Select from 'components/Select';
import { FormValuesType } from 'components/HistoricalWeatherForm/validation';
import OptionBase from 'types/optionBase';

interface Props<Option extends OptionBase>
  extends FieldProps<Option['value'], FormValuesType> {
  label: string;
  labelId: string;
  options: Option[];
}

export default function SelectField<Option extends OptionBase>({
  field: { name, onChange, value },
  form,
  ...props
}: Props<Option>) {
  const { t } = useTranslation();
  const meta = form.getFieldMeta(name);
  const hasError = meta?.touched && !!meta?.error;
  const helperText = meta?.touched && !!meta?.error ? t(meta?.error) : '';
  return (
    <Select<Option>
      error={hasError}
      helperText={helperText}
      name={name}
      setValue={onChange}
      value={value}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...omit(props)}
    />
  );
}
