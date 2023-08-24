import { createContext } from 'react';
import Languages from 'constants/languages';

const LanguageContext = createContext<Languages>(Languages.ENGLISH);

export default LanguageContext;
