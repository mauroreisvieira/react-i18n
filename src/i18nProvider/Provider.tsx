import React, { Fragment } from 'react';
import { IntlProvider } from 'react-intl';
import { LOCALES } from './constants';
import messages from './messages';

interface Provider {
    locale: React.ComponentProps<typeof IntlProvider>['locale'];
    children: React.ReactNode;
}

const Provider: React.FC<Provider> = ({ children, locale = LOCALES.ENGLISH }: Provider) => (
    <IntlProvider
        textComponent={Fragment}
        locale={locale}
        messages={messages[locale]}
    >
        {children}
    </IntlProvider>
);

Provider.displayName = 'I18nProvider';

export default Provider;
