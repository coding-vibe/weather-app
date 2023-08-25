import FutureForecast from 'components/FutureForecast/FutureForecast';
import LanguageProvider from 'components/LanguageProvider';

export default function App() {
  return (
    <LanguageProvider>
      <FutureForecast />
    </LanguageProvider>
  );
}
