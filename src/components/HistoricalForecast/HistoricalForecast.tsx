import { useState } from 'react';
import HistoricalForecastForm from 'components/HistoricalForecastForm';
import HistoricalForecastWidget from 'components/HistoricalForecastWidget';
import { FormValuesType } from '../HistoricalForecastForm/validation';

export default function HistoricalForecast() {
  const [selectedFormValues, onSelectFormValues] =
    useState<FormValuesType | null>(null);

  return (
    <>
      <HistoricalForecastForm setFormValues={onSelectFormValues} />
      {selectedFormValues && (
        <HistoricalForecastWidget formValues={selectedFormValues} />
      )}
    </>
  );
}
