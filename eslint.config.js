import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import globals from 'globals'

export default [
  {
    ignores: [
      '.vite/**',
      'dist/**',
      'node_modules/**',
      // Legacy, unreferenced UI prototypes retained for visual-history parity.
      'src/components/Sidebar.vue',
      'src/components/cards/ProductCard.vue',
      'src/components/common/SwitchTabs.vue',
      'src/components/forms/ProductsFoem.vue',
      'src/components/ui/button/**',
    ],
  },
  js.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  {
    files: ['**/*.{js,vue}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: { ...globals.browser, ...globals.node },
    },
    rules: {
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'vue/multi-word-component-names': 'off',
      'vue/require-default-prop': 'off',
    },
  },
]
