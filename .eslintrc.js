module.exports = {
  extends: '@uedlinker/eslint-config-base',

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },

  env: {
    browser: true,
  },

  plugins: ['react'],

  rules: {
    // 在 JSX 中，属性值使用双引号
    'jsx-quotes': ['error', 'prefer-double'],
    // 强制 JSX 布尔属性简写
    'react/jsx-boolean-value': ['error', 'never'],
    // 强制 JSX 括号对齐
    'react/jsx-closing-bracket-location': ['error', 'tag-aligned'],
    // 强制 JSX 标签对齐
    'react/jsx-closing-tag-location': 'error',
    // 禁止 JSX 属性中出现不必要的花括号
    'react/jsx-curly-brace-presence': ['error', 'never'],
    // 禁止 JSX 属性的花括号中有空格
    'react/jsx-curly-spacing': ['error', 'never'],
    // 禁止 JSX 属性的等号周围有空格
    'react/jsx-equals-spacing': ['error', 'never'],
    // 允许文件名后缀
    'react/jsx-filename-extension': ['error', {
      'extensions': ['.js', '.jsx'],
    }],
    // 强制 JSX 第一个属性的位置
    'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
    // 强制 JSX 事件属性名以 'on' 开头，事件处理器的名称以 'handle' 开头
    'react/jsx-handler-names': ['error', {
      'eventHandlerPrefix': 'handle',
      'eventHandlerPropPrefix': 'on',
    }],
    // 强制 JSX 属性缩进为两个空格
    'react/jsx-indent-props': ['error', 2],
    // 强制 JSX 标签的缩进为两个空格
    'react/jsx-indent': ['error', 2],
    // 探测 JSX 某些情况下是否缺少 `key`
    'react/jsx-key': 'error',
    // 禁止在 JSX 属性中使用 `.bind()`
    'react/jsx-no-bind': ['error', {
      'allowArrowFunctions': true,
    }],
    // 禁止注入注释文本
    'react/jsx-no-comment-textnodes': 'error',
    // 禁止重复的属性
    'react/jsx-no-duplicate-props': 'error',
    // 禁止未导入的组件
    'react/jsx-no-undef': 'error',
    // 强制自定义组件必须以大驼峰命名
    'react/jsx-pascal-case': ['error', {
      'allowAllCaps': true,
    }],
    // 禁止在属性中出现多个空格
    'react/jsx-props-no-multi-spaces': 'error',
    // 强制自闭标签结束前有一个空格
    'react/jsx-tag-spacing': ['error', {
      'beforeSelfClosing': 'always',
    }],
    // 防止 React 标签被错误地标记为未使用
    'react/jsx-uses-react': 'error',
    // 防止 JSX 中使用的标量被错误地标记为未使用
    'react/jsx-uses-vars': 'error',
    // 防止多行 JSX 周围缺少括号
    'react/jsx-wrap-multilines': ['error', {
      'declaration': 'parens-new-line',
      'assignment': 'parens-new-line',
      'return': 'parens-new-line',
      'arrow': 'parens-new-line',
      'condition': 'parens-new-line',
      'logical': 'parens-new-line',
      'prop': 'parens-new-line',
    }],
    // 防止在 `this.setState()` 中使用 `this.state`
    'react/no-access-state-in-setstate': 'error',
    // 禁止使用 children 属性，而是直接放在标签之间
    'react/no-children-prop': 'error',
    // 禁止同时在元素上使用 `dangerouslySetInnerHTML` 和 `children`
    'react/no-danger-with-children': 'error',
    // 禁止使用被弃用的接口
    'react/no-deprecated': 'error',
    // 禁止在 componentDidMount 钩子函数中立即调用 `this.setState()`
    'react/no-did-mount-set-state': 'error',
    // 禁止在 componentDidUpdate 钩子函数中立即调用 `this.setState()`
    'react/no-did-update-set-state': 'error',
    // 禁止除了在 constructor 中，在其余函数中直接给 `this.state` 赋值
    'react/no-direct-mutation-state': 'error',
    // 禁止使用 `this.isMounted()`
    'react/no-is-mounted': 'error',
    // 禁止 `PureComponent` 和 `shouldComponentUpdate` 一起使用
    'react/no-redundant-should-component-update': 'error',
    // 禁止 ReactDOM.render() 的返回值赋值给一个变量
    'react/no-render-return-value': 'error',
    // 禁止使用字符串 ref
    'react/no-string-refs': 'error',
    // 禁止在函数式组件中使用 `this`
    'react/no-this-in-sfc': 'error',
    // 防止在书写钩子函数时出现错别字
    'react/no-typos': 'error',
    // 禁止在属性中出现无效的字符实体
    'react/no-unescaped-entities': 'error',
    // 禁止出现未知属性
    'react/no-unknown-property': 'error',
    // 禁止使用 `UNSAFE_` 方法
    'react/no-unsafe': 'error',
    // 禁止定义了类型的属性未使用
    'react/no-unused-prop-types': 'error',
    // 禁止未使用的 state
    'react/no-unused-state': 'error',
    // 强制使用 ES6 语法创建组件
    'react/prefer-es6-class': ['error', 'always'],
    // 强制定义属性的 propTypes
    'react/prop-types': 'error',
    // 在使用 JSX 标签是时必须导入 React
    'react/react-in-jsx-scope': 'error',
    // 强制 Class 组件中必须有 render() 函数
    'react/require-render-return': 'error',
    // 强制没有子元素的标签使用自闭标签
    'react/self-closing-comp': 'error',
    // 组件属性排序
    'react/sort-comp': ['error', {
      order: [
        'static-methods',
        'lifecycle',
        '/^get.*Data$/',
        '/^handle.+$/',
        'everything-else',
        '/^render.+$/',
        'render',
      ],
      groups: {
        lifecycle: [
          'displayName',
          'propTypes',
          'contextTypes',
          'childContextTypes',
          'mixins',
          'statics',
          'defaultProps',
          'constructor',
          'getDefaultProps',
          'state',
          'getInitialState',
          'getChildContext',
          'getDerivedStateFromProps',
          'componentWillMount',
          'UNSAFE_componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'UNSAFE_componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'UNSAFE_componentWillUpdate',
          'getSnapshotBeforeUpdate',
          'componentDidUpdate',
          'componentDidCatch',
          'componentWillUnmount',
        ],
      },
    }],
    // 强制 style 属性使用对象值
    'react/style-prop-object': 'error',
    // 禁止在不能传递子元素的元素中传递子元素
    'react/void-dom-elements-no-children': 'error',
  },
}
