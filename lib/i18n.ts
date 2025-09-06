import type { Language } from '../types';
import { LanguageCode as LangEnum } from '../types';

export const languages: Language[] = [
  { code: LangEnum.EN, name: 'English' },
  { code: LangEnum.ES, name: 'Español' },
  { code: LangEnum.FR, name: 'Français' },
  { code: LangEnum.DE, name: 'Deutsch' },
  { code: LangEnum.PT, name: 'Português' },
  { code: LangEnum.IT, name: 'Italiano' },
  { code: LangEnum.HI, name: 'हिन्दी' },
  { code: LangEnum.RU, name: 'Русский' },
  { code: LangEnum.JA, name: '日本語' },
  { code: LangEnum.ZH, name: '中文' },
  { code: LangEnum.PL, name: 'Polski' },
  { code: LangEnum.FA, name: 'فارسی' },
  { code: LangEnum.NL, name: 'Nederlands' },
  { code: LangEnum.KO, name: '한국어' },
  { code: LangEnum.TH, name: 'ไทย' },
  { code: LangEnum.TR, name: 'Türkçe' },
  { code: LangEnum.VI, name: 'Tiếng Việt' },
  { code: LangEnum.AR, name: 'العربية' },
];
