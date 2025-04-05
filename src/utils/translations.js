// src/utils/translations.js

export const getTranslations = async (lang) => {
    try {
        const translations = await import(`../data/account-deletion/${lang}.json`);
        return translations;
    } catch (error) {
        console.error('Error loading translations:', error);
        return {};
    }
};
