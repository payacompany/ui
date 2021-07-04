module.exports = {
  extends: [
    "plugin:vue/recommended",
    "plugin:prettier-vue/recommended",
    "prettier",
  ],

  settings: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "prettier-vue": {
      // Settings for how to process Vue SFC Blocks
      SFCBlocks: {
        /**
         * Use prettier to process `<template>` blocks or not
         *
         * If set to `false`, you may need to enable those vue rules that are disabled by `eslint-config-prettier`,
         * because you need them to lint `<template>` blocks
         *
         * @default true
         */
        template: true,

        /**
         * Use prettier to process `<script>` blocks or not
         *
         * If set to `false`, you may need to enable those rules that are disabled by `eslint-config-prettier`,
         * because you need them to lint `<script>` blocks
         *
         * @default true
         */
        script: true,

        /**
         * Use prettier to process `<style>` blocks or not
         *
         * @default true
         */
        style: true,

        // Settings for how to process custom blocks
        customBlocks: {
          // Treat the `<docs>` block as a `.markdown` file
          docs: { lang: "markdown" },

          // Treat the `<config>` block as a `.json` file
          config: { lang: "json" },

          // Treat the `<module>` block as a `.js` file
          module: { lang: "js" },

          // Ignore `<comments>` block (omit it or set it to `false` to ignore the block)
          comments: false,

          // Other custom blocks that are not listed here will be ignored
        },
      },

      // Use prettierrc for prettier options or not (default: `true`)
      usePrettierrc: true,

      // Set the options for `prettier.getFileInfo`.
      // @see https://prettier.io/docs/en/api.html#prettiergetfileinfofilepath-options
      fileInfoOptions: {
        // Path to ignore file (default: `'.prettierignore'`)
        // Notice that the ignore file is only used for this plugin
        ignorePath: ".testignore",

        // Process the files in `node_modules` or not (default: `false`)
        withNodeModules: false,
      },
    },
  },

  rules: {
    quotes: [2, "double"],
    "vue/attribute-hyphenation": ["error", "always"],
    "vue/component-definition-name-casing": ["error", "PascalCase"],
    "vue/html-closing-bracket-newline": [
      "error",
      {
        singleline: "never",
        multiline: "always",
      },
    ],
    "vue/html-quotes": ["error", "double", { avoidEscape: true }],
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "always",
          normal: "always",
          component: "always",
        },
        svg: "always",
        math: "always",
      },
    ],
    "vue/multiline-html-element-content-newline": [
      "error",
      {
        ignoreWhenEmpty: true,
        ignores: ["pre", "textarea"],
        allowEmptyLines: false,
      },
    ],
    "vue/component-name-in-template-casing": [
      "error",
      "kebab-case",
      {
        registeredComponentsOnly: false,
      },
    ],
    "vue/no-potential-component-option-typo": [
      "error",
      {
        presets: ["vue", "nuxt"],
        threshold: 5,
        custom: ["jsonld"],
      },
    ],
    "vue/no-unregistered-components": [
      "error",
      {
        ignorePatterns: [
          "nuxt(-\\w+)?",
          "date-picker",
          "validation-provider",
          "validation-observer",
          "client-only",
          "swiper",
          "swiper-slide",
          "vs-\\w+",
        ],
      },
    ],
    "vue/no-unused-components": [
      "error",
      {
        ignoreWhenBindingPresent: true,
      },
    ],
    "vue/no-unused-properties": [
      "error",
      {
        groups: ["props"],
      },
    ],
    "vue/no-useless-mustaches": [
      "error",
      {
        ignoreIncludesComment: false,
        ignoreStringEscape: false,
      },
    ],
    "vue/no-useless-v-bind": [
      "error",
      {
        ignoreIncludesComment: false,
        ignoreStringEscape: false,
      },
    ],
    "vue/order-in-components": [
      "warn",
      {
        order: [
          "el",
          "name",
          "key",
          "parent",
          "functional",
          "watchQuery",
          "layout",
          "middleware",
          ["delimiters", "comments"],
          ["components", "directives", "filters"],
          "extends",
          "mixins",
          ["provide", "inject"],
          "ROUTER_GUARDS",
          "validate",
          "scrollToTop",
          "transition",
          "loading",
          "inheritAttrs",
          "model",
          ["props", "propsData"],
          "emits",
          "setup",
          "data",
          "head",
          "computed",
          "watch",
          "LIFECYCLE_HOOKS",
          "methods",
          ["template", "render"],
          "renderError",
          "fetch",
          "asyncData",
        ],
      },
    ],
  },
};
