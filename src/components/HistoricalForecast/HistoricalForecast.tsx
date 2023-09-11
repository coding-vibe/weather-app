import { useState } from 'react';
import HistoricalWeatherForm from 'components/HistoricalWeatherForm';
import HistoricalWeatherWidget from 'components/HistoricalWeatherWidget';
import { FormValuesType } from '../HistoricalWeatherForm/validation';

export default function HistoricalForecast() {
  const [selectedFormValues, onSelectFormValues] =
    useState<FormValuesType | null>(null);

  return (
    <>
      <HistoricalWeatherForm setFormValues={onSelectFormValues} />
      {selectedFormValues && (
        <HistoricalWeatherWidget formValues={selectedFormValues} />
      )}
    </>
  );
}
