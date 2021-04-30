export type Language = 'en-us' | 'de-de' | 'fr-ca';

interface Locales {
    [key: string]: Language
}

export const LOCALES: Locales = {
    ENGLISH: 'en-us',
    GERMAN: 'de-de',
    FRENCH: 'fr-ca',
};
