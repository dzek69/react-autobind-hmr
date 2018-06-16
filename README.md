# react-autobind-hmr

Wrapper for react-autobind that adds support for projects with React-Hot-Loader (ie: Next.js).

## When to use

If your code is crashing with `Cannot read property of undefined` or similar because you've used `react-autobind`
but it works with `this.method = this.method.bind(this)` - this library is for you.

## Usage

Replace your
```javascript
import autobind from "react-autobind";
```

with

```javascript
import autobind from "react-autobind-hmr";
```

Done.

## Usage (ES5)

If you're using ES5 (with React? - I don't think so) just import/require `react-autobind-hmr/dist` instead.

## Documentation

There is nothing else than this in documentation. [Documentation](react-autobind-hmr) is here however in case of update.

## License

MIT
