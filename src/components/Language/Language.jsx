import { Tab } from '@headlessui/react';
import { useTranslation } from 'react-i18next';
import { Fragment } from 'react';

const Language = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const languages = [
        {
            code: 'fr',
            label: 'Français',
            flag: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg'
        },
        {
            code: 'en',
            label: 'English',
            flag: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg'
        }
    ];

    return (
        <div className="fixed z-[99999999] bottom-2 md:bottom-4 right-2 md:right-8 w-32">
            <Tab.Group
                onChange={(index) => changeLanguage(languages[index].code)}
            >
                <Tab.List className="flex gap-2 p-1 space-x-1 bg-gray-300 rounded-lg">
                    {languages.map((lang) => (
                        <Tab as={Fragment} key={lang.code}>
                            {({ selected }) => (
                                <button
                                    className={`w-full py-2.5 text-sm leading-5 font-medium text-gray-700 rounded-lg focus:outline-none transition-colors duration-200 ${
                                        selected
                                            ? 'bg-blue-500 text-white'
                                            : 'bg-gray-200 text-gray-500'
                                    }`}
                                >
                                    <img
                                        src={lang.flag}
                                        alt={lang.label}
                                        className="w-6 h-6 mx-auto"
                                    />
                                </button>
                            )}
                        </Tab>
                    ))}
                </Tab.List>
            </Tab.Group>
        </div>
    );
};

export default Language;
