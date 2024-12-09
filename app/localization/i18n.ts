import {InitOptions} from 'i18next';

import {languagesDefault, languagesSupported} from './resource';

//
//

type I18nType = Omit<InitOptions, 'react' | 'detection' | 'supportedLngs' | 'fallbackLng'> & {
  supportedLngs: typeof languagesSupported;
  fallbackLng: typeof languagesDefault;
};

export default <I18nType>{
  supportedLngs: languagesSupported,
  fallbackLng: languagesDefault,
  defaultNS: 'common',
  react: {useSuspense: false},
  saveMissing: true,
};
