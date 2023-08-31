import { TextField } from '@mui/material';
import { useField } from 'formik';

interface Props {
  name: string;
}

export default function TextfieldWrapper({ name, ...otherProps }: Props) {
  const [field, meta] = useField(name);

  const configTextfield = {
    ...field,
    ...otherProps,
    variant: 'outlined' as const,
  };

  if (meta && meta.touched && meta.error) {
    configTextfield.error = true;
    configTextfield.helperText = meta.error;
  }

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <TextField {...configTextfield} />;
}
