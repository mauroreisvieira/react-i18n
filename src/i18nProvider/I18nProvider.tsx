import React, { Fragment } from 'react';
import { IntlProvider } from 'react-intl';
import { LOCALES } from './constants';
import messages from './messages';

interface I18nProviderProps {
    locale: React.ComponentProps<typeof IntlProvider>['locale'];
    children: React.ReactNode;
}

export const I18nProvider: React.FC<I18nProviderProps> = ({ children, locale = LOCALES.ENGLISH }: I18nProviderProps) => (
    <IntlProvider
        textComponent={Fragment}
        locale={locale}
        messages={messages[locale]}>
        { children }
    </IntlProvider>
);
