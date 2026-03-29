export const slugifyArabic = (text) => {
    return text
        .toString()
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^\u0621-\u064A0-9-]/g, '')
        .replace(/-+/g, '-');
};