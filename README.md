# react-autobind-hmr

Wrapper for react-autobind that adds support for projects with React-Hot-Loader (ie: Next.js).

## When to use

If your code is crashing with `Cannot read property of undefined` or similar because you've used `react-autobind`
but it works with `this.method = this.method.bind(this)` - this library is for you.

## Usage

Replace your
```jsx
import autobind from "react-autobind";
```

with

```jsx
import autobind from "react-autobind-hmr";
```

Done.

## License

MIT
