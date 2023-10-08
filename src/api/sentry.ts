// eslint-disable-next-line import/no-extraneous-dependencies
import * as Sentry from '@sentry/browser';

Sentry.init({
  dsn: 'YOUR_SENTRY_DSN',
});

export default Sentry;
