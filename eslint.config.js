import pluginVue from 'eslint-plugin-vue';

export default [
  // ...pluginVue.configs['flat/vue2-recommended'], // Используйте это, если вы используете Vue.js 2.x.
  {
    rules: {
      // Переопределение/добавление настроек правил, таких как:
      // 'vue/no-unused-vars': 'error'
    },
  },
  {
    ignores: ["src/components/ui/*"]
  }
];
