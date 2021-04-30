import * as React from 'react';
import { FormattedMessage } from 'react-intl';

interface TranslateProps {
    id: React.ComponentProps<typeof FormattedMessage>['id'];
    value?: React.ComponentProps<typeof FormattedMessage>['values'];
}

export const Translate: React.FC<TranslateProps>= ({ id, value = {} }: TranslateProps) => (
    <FormattedMessage id={id} values={{ ...value }} />
);
