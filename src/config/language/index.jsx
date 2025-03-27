import { EN_DICTIONARY } from './en';

export const useTranslation = (dictionary = '') => {
    return dictionary ? EN_DICTIONARY?.[dictionary] ?? {} : EN_DICTIONARY;
};