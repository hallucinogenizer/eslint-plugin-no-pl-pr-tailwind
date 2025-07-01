# eslint-plugin-no-pl-pr-tailwind

ESLint rule to disallow Tailwind's `pl-` and `pr-` classes in favor of `ps-` and `pe-` for better RTL (right-to-left) support.

## Installation

```sh
npm install --save-dev eslint-plugin-no-pl-pr-tailwind
```

## Usage

Add `no-pl-pr-tailwind` to your ESLint configuration:

```json
{
  "plugins": ["no-pl-pr-tailwind"],
  "rules": {
    "no-pl-pr-tailwind/no-pl-pr-tailwind": "error"
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
