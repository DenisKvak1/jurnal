import { createI18n } from 'vue-i18n';

// Импортируем файлы локализации
import uk from './uk.json';
import ru from './ru.json';
import kz from './kz.json';
import { config } from '@/config.ts';

const messages = {
  uk,
  ru,
  kz
};

const i18n = createI18n({
  legacy: false,
  locale: config.startRegion, // Язык по умолчанию
  fallbackLocale: config.startRegion, // Язык, используемый при отсутствии перевода
  messages
});

export default i18n;