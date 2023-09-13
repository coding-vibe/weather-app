import { useState } from 'react';
import HistoricalWeatherForm from 'components/HistoricalWeatherForm';
import HistoricalWeatherWidget from 'components/HistoricalWeatherWidget';
import { FormValuesType } from '../HistoricalWeatherForm/validation';

export default function HistoricalForecast() {
  const [selectedSearchParams, onSelectSearchParams] =
    useState<FormValuesType | null>(null);
  return (
    <>
      <HistoricalWeatherForm setSearchParams={onSelectSearchParams} />
      {selectedSearchParams && (
        <HistoricalWeatherWidget searchParams={selectedSearchParams} />
      )}
    </>
  );
}
