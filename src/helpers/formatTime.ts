import { addDays, format, parse, parseISO } from 'date-fns';

import ukLocale from 'date-fns/locale/uk'; // Локализация для Украины
import ruLocale from 'date-fns/locale/ru'; // Локализация для России
import kzLocale from 'date-fns/locale/kk';
import { Region } from '@/types.ts'; // Локализация для Казахстана

export function formatLocalizedDate(
    dateTimeString: string,
    country: Region
): string {
    const parsedDate = parseISO(dateTimeString); // Преобразуем строку в формате ISO 8601 в объект Date

    let locale;
    switch (country) {
        case 'uk':
            locale = ukLocale;
            break;
        case 'ru':
            locale = ruLocale;
            break;
        case 'kz':
            locale = kzLocale;
            break;
        default:
            // По умолчанию используем украинский язык
            locale = ukLocale;
    }

    // Форматируем дату без времени и с большой буквы
    const formattedDate = format(parsedDate, "EEEE do 'е' MMMM", { locale });

    // Приводим первую букву к верхнему регистру
    const capitalizedDate =
        formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);

    return capitalizedDate;
}

export function generateDateArray(isoDateString: string): string[] {
    const startDate = parseISO(isoDateString);
    const datesArray = [];

    for (let i = 0; i < 7; i++) {
        const newDate = addDays(startDate, i);
        datesArray.push(format(newDate, 'dd.MM'));
    }

    return datesArray;
}

export function getDayOfWeekString(dateString: string, language: Region): string | null {
    let locale;
    switch (language) {
        case 'uk':
            locale = ukLocale;
            break;
        case 'ru':
            locale = ruLocale;
            break;
        case 'kz':
            locale = kzLocale;
            break;
    }

    const dateObject = parse(dateString, 'dd.MM.yy', new Date());
    const dayOfWeekString = format(dateObject, 'eeee', { locale });

    return dayOfWeekString.charAt(0).toUpperCase() + dayOfWeekString.slice(1);
}
