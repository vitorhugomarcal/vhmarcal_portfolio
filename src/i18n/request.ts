import {getRequestConfig} from 'next-intl/server';
import {getUserLocale} from './service';

export default getRequestConfig(async () => {
  // Provide a static locale, fetch a user setting,
  // read from a cookie or analyze the request
  const locale = await getUserLocale();
 
  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});
