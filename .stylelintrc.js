module.exports = {
  "extends": [
    "stylelint-config-standard",
    "stylelint-config-standard-scss",
    "stylelint-config-recommended-vue",
    "stylelint-config-recommended-vue/scss"
  ],
  "ignoreFiles": ["**/*.js", "**/*.ts"],
  "defaultSeverity": "error",
  "rules": {
    "unit-disallowed-list": [
      "rem",
      "pt"
    ],
    "indentation": 2,
    "no-empty-source": null,
    "block-no-empty": null,
    "font-family-no-missing-generic-family-keyword": null,

    "block-closing-brace-newline-after": "always-multi-line",
    "block-opening-brace-newline-before": "always-single-line",
    "block-opening-brace-newline-after": "always",
    "block-closing-brace-newline-before": "always",

    
    "selector-class-pattern": "^[a-z]([a-z0-9-]+)?(__([a-z0-9]+-?)+)?(__([a-z0-9]+-?)+)?(--([a-z0-9]+-?)+){0,2}$|^Mui.*$|^([a-z][a-z0-9]*)(_[a-z0-9]+)*$",

    "scss/at-mixin-pattern": "^[a-z]([a-z0-9-]+)?(__([a-z0-9]+-?)+)?(__([a-z0-9]+-?)+)?(--([a-z0-9]+-?)+){0,2}$|^Mui.*$|^([a-z][a-z0-9]*)(_[a-z0-9]+)*$",
    "scss/double-slash-comment-whitespace-inside": "always",
    "scss/dollar-variable-pattern": null,
    
    "at-rule-empty-line-before": [
      "always",
      {
        "except": ["first-nested", "blockless-after-same-name-blockless"]
      }
    ],
    "custom-property-empty-line-before": [
      "always",
      {
        "except": ["after-custom-property", "first-nested"]
      }
    ],
    "declaration-empty-line-before": [
      "always",
      {
        "except": ["after-declaration", "first-nested"]
      }
    ],
    "block-closing-brace-empty-line-before": "never",
    "rule-empty-line-before": ["always-multi-line"]
  }
}
