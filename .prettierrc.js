// @see: https://www.prettier.cn

module.exports = {
  // 超过最大值换行
  printWidth: 120,
  // 缩进字节数
  tabWidth: 2,
  // 使用制表符而不是空格缩进行
  useTabs: false,
  // 结尾不用分号(true有，false没有)
  semi: false,
  // 使用单引号(true单双引号，false双引号)
  singleQuote: true,
  // 在对象，数组括号与文字之间加空格 "{ foo: bar }"
  bracketSpacing: true,
  // 多行时尽可能打印尾随逗号。（例如，单行数组永远不会出现逗号结尾。） 可选值"<none|es5|all>"，默认none
  trailingComma: 'none',
  //  (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号 ,always：不省略括号
  arrowParens: 'avoid',
  // 如果文件顶部已经有一个 doclock，这个选项将新建一行注释，并打上@format标记。
  insertPragma: false,
  // 换行符使用 lf 结尾是 可选值"<auto|lf|crlf|cr>"
  endOfLine: 'auto'
}
