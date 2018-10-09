# styled-base

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
