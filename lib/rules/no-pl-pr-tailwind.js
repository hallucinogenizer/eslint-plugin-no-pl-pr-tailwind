const noPlPrTailwind = {
  meta: {
    type: "suggestion",
    docs: {
      description:
        "Disallow use of Tailwind's pl- and pr- classes, recommend ps- and pe- for RTL support",
      category: "Best Practices",
      recommended: false,
    },
    fixable: "code",
    messages: {
      avoidPlPr:
        "Avoid using '{{className}}'. Use '{{recommended}}' instead for RTL support.",
    },
    schema: [], // no options
  },
  create(context) {
    return {
      Literal(node) {
        if (typeof node.value === "string") {
          const classNames = node.value.split(/\s+/);
          classNames.forEach((className) => {
            if (/^(?:[a-z0-9-]+:)*pl-[^ ]+/.test(className)) {
              context.report({
                node,
                messageId: "avoidPlPr",
                data: {
                  className,
                  recommended: className.replace(/pl-/, "ps-"),
                },
                fix(fixer) {
                  const newValue = node.value.replace(
                    new RegExp(`\\b${className}\\b`, "g"),
                    className.replace(/pl-/, "ps-")
                  );
                  return fixer.replaceText(node, `"${newValue}"`);
                },
              });
            }
            if (/^(?:[a-z0-9-]+:)*pr-[^ ]+/.test(className)) {
              context.report({
                node,
                messageId: "avoidPlPr",
                data: {
                  className,
                  recommended: className.replace(/pr-/, "pe-"),
                },
                fix(fixer) {
                  const newValue = node.value.replace(
                    new RegExp(`\\b${className}\\b`, "g"),
                    className.replace(/pr-/, "pe-")
                  );
                  return fixer.replaceText(node, `"${newValue}"`);
                },
              });
            }
          });
        }
      },
    };
  },
};

export default noPlPrTailwind;