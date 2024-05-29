//language
type LanguageType = {
    label: string;
    code: string;
}

export const languageData = (): LanguageType[] => [
    {label: 'English', code: 'en'},
    {label: 'Espanish', code: 'es'},
]