module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "plugin:prettier/recommended"],
  parserOptions: {
    parser: "@babel/eslint-parser"
  },
  rules: {
    // 关闭Vue组件名称必须为多单词（驼峰命名）的规则
    // "vue/multi-word-component-names": "off", // 设置为 'off' 来完全关闭这个规则
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
  }
}
