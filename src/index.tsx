import * as React from 'react';
import ReactDOM from 'react-dom';

import { FormattedMessage } from 'react-intl';
import { I18nPropvider, LOCALES } from './i18nProvider';
import { translate } from './i18nProvider/translate';

import './app.css';

const App = (): React.ReactElement => {
    const [locale, setLocale] = React.useState(LOCALES.ENGLISH);

    return (
        <I18nPropvider locale={locale}>
            <div className="app">
                <header>
                    <h1>
                        <FormattedMessage id="hello" />
                    </h1>
                    <p>
                        {translate({
                            id: 'edit-file',
                            value: {
                                file: <code>src/App.js</code>,
                            },
                        })}
                    </p>

                    <button onClick={() => setLocale(LOCALES.ENGLISH)}>
                        English
                    </button>
                    <button onClick={() => setLocale(LOCALES.FRENCH)}>
                        French
                    </button>
                    <button onClick={() => setLocale(LOCALES.GERMAN)}>
                        German
                    </button>
                </header>
            </div>
        </I18nPropvider>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
