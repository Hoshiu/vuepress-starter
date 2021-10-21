(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{629:function(t,s,e){"use strict";e.r(s);var n=e(9),a=Object(n.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"前端自动化测试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前端自动化测试"}},[t._v("#")]),t._v(" 前端自动化测试")]),t._v(" "),e("p",[t._v("一开始对自动化测试产生兴趣是源于 Leetcode 刷题，经由一位学长推荐，研究了一下自动化测试的东西。")]),t._v(" "),e("h2",{attrs:{id:"前端自动化测试框架-jest"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前端自动化测试框架-jest"}},[t._v("#")]),t._v(" 前端自动化测试框架：Jest")]),t._v(" "),e("blockquote",[e("p",[t._v("Jest 是一个令人愉快的 JavaScript 测试框架，专注于 简洁明快。")]),t._v(" "),e("p",[t._v("这些项目都在使用 Jest："),e("a",{attrs:{href:"https://babeljs.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Babel"),e("OutboundLink")],1),t._v("、 "),e("a",{attrs:{href:"https://www.typescriptlang.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("TypeScript"),e("OutboundLink")],1),t._v("、 "),e("a",{attrs:{href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node"),e("OutboundLink")],1),t._v("、 "),e("a",{attrs:{href:"https://reactjs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("React"),e("OutboundLink")],1),t._v("、 "),e("a",{attrs:{href:"https://angular.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Angular"),e("OutboundLink")],1),t._v("、 "),e("a",{attrs:{href:"https://vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue"),e("OutboundLink")],1),t._v(" 等等！")])]),t._v(" "),e("blockquote",[e("p",[t._v("Jest 是 Facebook 出品的一个测试框架，相对其他测试框架，其一大特点就是就是内置了常用的测试工具，比如自带断言、测试覆盖率工具，实现了开箱即用。")]),t._v(" "),e("p",[t._v("而作为一个面向前端的测试框架， Jest 可以利用其特有的"),e("a",{attrs:{href:"https://link.zhihu.com/?target=http%3A//facebook.github.io/jest/docs/zh-Hans/snapshot-testing.html%23content",target:"_blank",rel:"noopener noreferrer"}},[t._v("快照测试"),e("OutboundLink")],1),t._v("功能，通过比对 UI 代码生成的快照文件，实现对 React 等常见框架的自动测试。")]),t._v(" "),e("p",[t._v("此外， Jest 的测试用例是并行执行的，而且只执行发生改变的文件所对应的测试，提升了测试速度。目前在 Github 上其 star 数已经破万；而除了 Facebook 外，业内其他公司也开始从其它测试框架转向 Jest ，比如 "),e("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//medium.com/airbnb-engineering/unlocking-test-performance-migrating-from-mocha-to-jest-2796c508ec50",target:"_blank",rel:"noopener noreferrer"}},[t._v("Airbnb 的尝试"),e("OutboundLink")],1),t._v(" ，相信未来 Jest 的发展趋势仍会比较迅猛。")])]),t._v(" "),e("p",[t._v("jest 的安装相对简单, "),e("code",[t._v("yarn add jest")]),t._v("即可。")]),t._v(" "),e("p",[t._v("同时，修改"),e("code",[t._v("package.json")]),t._v("内容如下：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('{\n  "scripts": {\n    "test": "jest"\n  }\n}\n')])])]),e("p",[t._v("这一步是为了引入 "),e("code",[t._v("Jest")]),t._v("，使之能够对本地代码进行测试。")]),t._v(" "),e("h2",{attrs:{id:"创建方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建方法"}},[t._v("#")]),t._v(" 创建方法")]),t._v(" "),e("img",{attrs:{src:t.$withBase("/img/Jest/image-20210926004040912.png"),alt:"Create"}}),t._v(" "),e("p",[t._v("首先，我们创建一个"),e("code",[t._v("math.js")]),t._v("的文件，并在"),e("code",[t._v("index.html")]),t._v("中引入"),e("code",[t._v("math.js")])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//\tmath.js")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("a"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" a "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("minus")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("a"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" a "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" b"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("multi")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("a"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" a "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" b"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  一般不会用 commonJS 的模块导出或引入，而会使用 ES Module 的方式")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//\t为了使用 ES Module 的方式，需要配合 babel 使用，将其转换成 commonJS")]),t._v("\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("npm install @bebal/core@7.4.5 @beabel/preset-env@7.4.5\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('//\t.babelrc\n//  对 babel 进行配置\n{\n  "presets": [  //  配置 babel 使用哪些插件的集合来对代码进行转换\n    ["@babel/preset-env", {\n      "targets": {  //  当前插件集合的配置项\n        "node": "current" //  根据当前 node 环境结合 @babel.preset-env 来对代码进行转换\n      }\n    }]\n  ]\n}\n\n//  yarn jest\n//  jest 内部集成插件 => (babel-jest) => 检测当前环境是否安装了 babel-core\n// 若安装了 babel-core => 拿取 .babelrc 的配置\n//  在运行测试之前，结合 babel 将当前代码进行一次转换\n//  运行转换过的测试用例代码\n')])])]),e("p",[e("code",[t._v("index.html")])]),t._v(" "),e("img",{attrs:{src:t.$withBase("/img/Jest/image-20210926004222094.png"),alt:"Create"}}),t._v(" "),e("p",[t._v("此时如果打开浏览器浏览该页面，"),e("code",[t._v("index.html")]),t._v("会加载"),e("code",[t._v("math.js")])]),t._v(" "),e("p",[t._v("但如何进行测试呢？我们需要创建一个仍以"),e("code",[t._v("math")]),t._v("命名的后缀名为"),e("code",[t._v(".test.js")]),t._v("的文件。")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//\tmath.test.js")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" add"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" minus"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" multi "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./math'")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'测试加法 3 + 7'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("expect")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("toBe")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'测试减法 3 - 3'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("expect")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("minus")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("toBe")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'测试乘法 3 * 3'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("expect")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("multi")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("toBe")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  单元测试（模块测试），集成测试（多个模块测试）。")]),t._v("\n")])])]),e("p",[t._v("其中，"),e("code",[t._v("test")]),t._v("与"),e("code",[t._v("expect")]),t._v("皆为"),e("code",[t._v("Jest")]),t._v("自带函数，前者创建一个测试实例，后者对期待结果进行判定。其中，toBe('Hello world')便是一句断言（ Jest 管它叫 “matcher” ，想了解更多 matcher 请参考"),e("a",{attrs:{href:"https://jestjs.io/zh-Hans/docs/using-matchers",target:"_blank",rel:"noopener noreferrer"}},[t._v("文档"),e("OutboundLink")],1),t._v("）。")]),t._v(" "),e("p",[t._v("此时，我们运行"),e("code",[t._v("yarn jest")])]),t._v(" "),e("img",{attrs:{src:t.$withBase("/img/Jest/P@)S8ZN[[CW6@)60G]W)}BG.png"),alt:"Create"}}),t._v(" "),e("p",[t._v("此时我们修改乘法函数的内容，再次进行测试")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("multi")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("a"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" a "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// return a * b")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("此时测试失败，并会标识出失败的断言位置，结果如下：")]),t._v(" "),e("img",{attrs:{src:t.$withBase("/img/Jest/image-20210926005413766.png"),alt:"Create"}}),t._v(" "),e("p",[t._v("由此，我们创建了一个非常简单的实例，来对自己的代码进行测试，并能检测出问题所在。")]),t._v(" "),e("h2",{attrs:{id:"常用匹配器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用匹配器"}},[t._v("#")]),t._v(" 常用匹配器")]),t._v(" "),e("p",[t._v("事实上，Jest 的控制台也内置了一些快捷指令以及常用的匹配器")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("//\tmath.test.js\n//  测试用例\ntest('测试 10 与 10 相匹配', () => {\n  //  toBe 匹配器 matchers\n  //  toBe 适用于简单类型的值进行比较，引用类型由于存放地址不同无法使用其进行比较\n  expect(10).toBe(10)\n})\n\ntest('测试 10 与 10 相匹配', () => {\n  //  toEqual 匹配器 matchers\n  //  使用 toEqual 对内容进行匹配时，只匹配内容而不匹配引用，因此可以对引用类型进行校验\n  const a = { one : 1 };\n  expect(a).toEqual({ one: 1 });\n})\n\n//  toBeNull()、toBeUndefined、toBeDefined（被定义过，即使是null也可以）\n//  toBeTruthy（true）、toBeFalsy（false）\n\ntest('not 匹配器', () => {\n  const a = 1\n  expect(a).not.toBeFalsy();  // not 就是非的意思\n  expect(a).toBeTruthy();\n})\n\n//  数字相关匹配器\ntest('toBeGreaterThan 匹配器', () => {\n  const count= 10\n  expect(count).toBeGreaterThan(9) //  前者的值应大于后者\n})\n\ntest('toBeLessThan 匹配器', () => {\n  const count= 10\n  expect(count).toBeLessThan(11) //  前者的值应小于后者\n})\n\ntest('toBeGreaterThanOrEqual 匹配器', () => {\n  const count= 10\n  expect(count).toBeGreaterThanOrEqual(10) //  前者的值应大于等于后者\n})\n\n//  同理还会有 toBeLessThanOrEqual\n\ntest('toBeCloseTo 匹配器', () => {\n  const firstNumber = 0.1;\n  const secondNumber = 0.2;\n  expect(firstNumber + secondNumber).toBeCloseTo(0.3) //  前者的值是否非常接近后者，用于解决浮点数不能精确相等的问题\n})\n\n//  String\ntest('toMatch 匹配器', () => {\n  const str = 'http://hoshiu.github.io';\n  const secondNumber = 0.2;\n  expect(str).toMatch('hoshiu')   //  后面的单词包含在 str 之中\n})\n\n//  Array，Set\ntest('toContain 匹配器', () => {\n  const arr = ['hoshiu', 'github'];\n  const data = new Set(arr);\n  expect(data).toContain('hoshiu');   //  测试数组中是否包含后者\n})\n\n//  处理异常\nconst throwNewErrorFunc = () => {\n  throw new Error('this is a new Error');\n}\ntest('toThrow 匹配器', () => {\n  expect(throwNewErrorFunc).toThrow('this is a new Error')  //  toThrow 函数中不写入内容则判断报错就行，写入了内容则要判断内容与前者的报错内容是否一致 \n})\n\n//  Watch Usage\n//  Press f 会再次测试，但本次只测试上一次为通过的测试，若之前通过了测试后在修改当前内容也不会重新测试\n//  再次 Press f 退出\n\n//  Press o 会重新测试刚修改过的文件的相关的测试，需要配合 git 使用，与本地仓库进行对比\n//  再次 Press o 退出 package.json 中配置 jest --watch 则只会测试修改文件中的 test 函数，而不会重新测试整个文件\n\n//  Press p 当使用 --watchAll 时会出现 p 模式，根据用户输入的文件内容来选择文件进行测试\n//  再次 Press t 退出\n\n//  Press t 根据测试用例的名字来筛选测试用例\n//  再次 Press t 退出\n")])])]),e("h2",{attrs:{id:"用例的预处理或后处理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用例的预处理或后处理"}},[t._v("#")]),t._v(" 用例的预处理或后处理")]),t._v(" "),e("p",[t._v("有时我们想在测试开始之前进行下环境的检查、或者在测试结束之后作一些清理操作，这就需要对用例进行预处理或后处理。对测试文件中所有的用例进行统一的预处理，可以使用 beforeAll() 函数；而如果想在每个用例开始前进行都预处理，则可使用 beforeEach() 函数。至于后处理，也有对应的 afterAll() 和 afterEach() 函数。")]),t._v(" "),e("p",[t._v("如果只是想对某几个用例进行同样的预处理或后处理，可以将先将这几个用例归为一组。使用 describe() 函数即可表示一组用例，再将上面提到的四个处理函数置于 describe() 的处理回调内，就实现了对一组用例的预处理或后处理：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("describe('test testObject', () => {\n    beforeAll(() => {\n// 预处理操作\n    })\n\n    test('is foo', () => {\n       expect(testObject.foo).toBeTruthy()\n    })\n\n    test('is not bar', () => {\n        expect(testObject.bar).toBeFalsy()\n    })\n\n    afterAll(() => {\n// 后处理操作\n    })\n})\n")])])]),e("h2",{attrs:{id:"异步代码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#异步代码"}},[t._v("#")]),t._v(" 异步代码")]),t._v(" "),e("p",[t._v("异步代码的测试，关键点在于告知测试框架测试何时完成，让其在恰当的时机进行断言。针对几种常见的异步代码形式， Jest 也提供了相应的异步测试语法。首先对于异步回调，向其传入并执行 done 函数， Jest 会等 done 回调执行结束后，结束测试：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("//\tasyncHello.js\nexport const asyncHello= (name, fn) => setTimeout(() => fn(`Hello ${name}`), 1000)\n\n// asyncHello.test.js\nimport { asyncHello } from './asyncHello.js'\n\ntest('should get \"Hello world\"', (done) => {\n    asyncHello('world', (result) => {\n        expect(result).toBe('Hello world')\n        done()\n    })\n})\n")])])]),e("p",[t._v("此外，对于 Promise 控制的异步代码，可以直接在 then 回调中进行断言，只要保证在用例中返回该 Promise 对象即可：")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("// promiseHello.js\nexport const promiseHello= (name) => {\n\treturn new Promise((resolve) => {\n        setTimeout(() => resolve(`Hello ${name}`), 1000)\n    })\n}\n\n// promiseHello.test.js\nimport { promiseHello } from './promiseHello.js'\n\nit('should get \"Hello world\"', () => {\n    expect.assertions(1); // 确保至少有一个断言被调用，否则测试失败\n\treturn promiseHello('world').then((data) => {\n        expect(data).toBe('Hello world')\n    })\n})\n")])])]),e("p",[t._v("Jest 也支持 async/await 语法的测试，无需多余的操作，只要在 await 后进行断言即可，和同步测试的写法一致。")]),t._v(" "),e("h2",{attrs:{id:"测试覆盖率"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#测试覆盖率"}},[t._v("#")]),t._v(" 测试覆盖率")]),t._v(" "),e("p",[t._v("当我们在"),e("code",[t._v("package.json")]),t._v("中添加"),e("code",[t._v('"coverage": "jest --coverage"')]),t._v("时，则会运行 "),e("code",[t._v("Jest")]),t._v("内置的测试覆盖率工具"),e("a",{attrs:{href:"https://link.zhihu.com/?target=https%3A//github.com/gotwarlost/istanbul",target:"_blank",rel:"noopener noreferrer"}},[t._v("istanbul"),e("OutboundLink")],1),t._v("，并且生成一个测试覆盖率的报告，在终端输出一个表格，也可以作为网页打开它。")]),t._v(" "),e("img",{attrs:{src:t.$withBase("/img/Jest/image-20210926011412176.png"),alt:"Create"}}),t._v(" "),e("img",{attrs:{src:t.$withBase("/img/Jest/image-20210926011336176.png"),alt:"Create"}}),t._v(" "),e("img",{attrs:{src:t.$withBase("/img/Jest/image-20210926011517100.png"),alt:"Create"}}),t._v(" "),e("h2",{attrs:{id:"在前端框架中使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在前端框架中使用"}},[t._v("#")]),t._v(" 在前端框架中使用")]),t._v(" "),e("p",[e("code",[t._v("Jest")]),t._v(" 可以搭配"),e("code",[t._v("Vue")]),t._v("、"),e("code",[t._v("React")]),t._v("等多种框架进行自动化测试。")]),t._v(" "),e("blockquote",[e("p",[t._v("Jest 的一大特色就是提供了"),e("a",{attrs:{href:"https://link.zhihu.com/?target=http%3A//facebook.github.io/jest/docs/zh-Hans/snapshot-testing.html%23content",target:"_blank",rel:"noopener noreferrer"}},[t._v("快照测试"),e("OutboundLink")],1),t._v("功能。首次运行快照测试，会让 UI 框架生产一个可读的快照，再次测试时便会通过比对快照文件和新 UI 框架产生的快照判断测试是否通过。")])]),t._v(" "),e("p",[t._v("这里留一个坑，以后回来啃。")]),t._v(" "),e("h2",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),e("p",[t._v("总的来说，我是因为 "),e("code",[t._v("Leetcode")]),t._v("刷题与它结缘，它也确实为我在刷题时提供了很多便利。在这里推荐一下 "),e("code",[t._v("vscode")]),t._v("中的"),e("code",[t._v("Leetcode")]),t._v("插件，它可以帮助你在自己的编辑器中连接"),e("code",[t._v("Leetcode")]),t._v("刷题，在这里解决每日一题和一些自己想做的题非常方便，插件自带了测试以及提交功能，非常好用。")]),t._v(" "),e("p",[t._v("相信前端的自动化测试也有发展的前途，从以下几点非常适合引入：")]),t._v(" "),e("ul",[e("li",[t._v("需要长期维护的项目。它们需要测试来保障代码可维护性、功能的稳定性")]),t._v(" "),e("li",[t._v("较为稳定的项目、或项目中较为稳定的部分。给它们写测试用例，维护成本低")]),t._v(" "),e("li",[t._v("被多次复用的部分，比如一些通用组件和库函数。因为多处复用，更要保障质量")])]),t._v(" "),e("p",[t._v("虽然我目前只用于刷题，但相信它对于前端行业来说会拥有自己的一席之地。")])])}),[],!1,null,null,null);s.default=a.exports}}]);