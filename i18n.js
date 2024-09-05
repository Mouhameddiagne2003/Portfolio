// i18n.js

import i18n from 'i18next';

import { initReactI18next } from 'react-i18next';

import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslations from './translations/en.json';

import frTranslations from './translations/fr.json';

i18n
    // .use(LanguageDetector) // Détecte la langue du navigateur

    .use(initReactI18next)

    .init({

        resources: {

            en: {
                translation: enTranslations
            },
            fr: {
                translation: frTranslations
            }

            // ar: {
            //
            //     translation: arTranslations,
            //
            // },

        },

        fallbackLng: 'fr', // langue par défaut

        interpolation: {

            escapeValue: false,

        }

    });
export default i18n;