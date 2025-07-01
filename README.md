# eslint-plugin-no-pl-pr-tailwind

ESLint rule to disallow Tailwind's `pl-` and `pr-` classes in favor of `ps-` and `pe-` for better RTL (right-to-left) support.

## Installation

```sh
npm install --save-dev eslint-plugin-no-pl-pr-tailwind
```

## Usage

### For ESLint v9+ (Flat Config, ESM)

Import the plugin in your `eslint.config.js`:

```js
// eslint.config.js (ESM)
import noPlPrTailwind from "eslint-plugin-no-pl-pr-tailwind";
// or, if you prefer named import:
// import * as noPlPrTailwind from "eslint-plugin-no-pl-pr-tailwind";

export default [
  {
    plugins: {
      "no-pl-pr-tailwind": noPlPrTailwind,
    },
    rules: {
      "no-pl-pr-tailwind/no-pl-pr-tailwind": "warn",
    },
  },
];
```

> **Note:** Both default and named imports are supported for ESM usage.

### For ESLint v8 and below (`.eslintrc` config)

Add `no-pl-pr-tailwind` to your ESLint configuration:

```json
{
  "plugins": ["no-pl-pr-tailwind"],
  "rules": {
    "no-pl-pr-tailwind/no-pl-pr-tailwind": "warn"
  }
}
```

## Rule: no-pl-pr-tailwind

**Disallow Tailwind's `pl-` and `pr-` classes. Use `ps-` and `pe-` instead.**

### ❌ Incorrect
```jsx
<div className="pl-4 pr-2 md:pl-8 hover:pr-6">Content</div>
```

### ✅ Correct
```jsx
<div className="ps-4 pe-2 md:ps-8 hover:pe-6">Content</div>
```

## License

MIT © Muhammad Rohan Hussain
