import pluginVue from 'eslint-plugin-vue';

export default [
  // Добавьте более общие наборы правил, такие как:
  // js.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
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
