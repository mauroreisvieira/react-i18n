import * as React from 'react';
import { FormattedMessage } from 'react-intl';

interface Translate {
    id: React.ComponentProps<typeof FormattedMessage>['id'];
    value?: React.ComponentProps<typeof FormattedMessage>['values'];
}

export const translate = ({ id, value = {} }: Translate) => (
    <FormattedMessage id={id} values={{ ...value }} />
);
