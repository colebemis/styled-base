# styled-base

[![Version][version-badge]][npm]

[version-badge]: https://img.shields.io/npm/v/styled-base.svg?style=flat-square

[npm]: https://www.npmjs.com/package/styled-base

## Getting Started 

### 1. Install

```shell
npm install styled-base
# or
yarn add styled-base
```

### 2. Import

```js
import Base from 'styled-base'
```

### 3. Use

```jsx
<Base 
  css={{ 
    color: 'white',
    backgroundColor: 'black',
    '&:hover': {
      backgroundColor: 'blue',
    },
  }}
>
  Example
</Base>
```
