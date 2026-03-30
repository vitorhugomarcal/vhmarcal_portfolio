import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'pt'],
 
  // Used when no locale matches
  defaultLocale: 'pt',

  // No prefix for the default locale
  localePrefix: 'as-needed',

  // Disable automatic detection to keep the root path static
  localeDetection: false
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(pt|en)/:path*']
};
