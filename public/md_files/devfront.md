# DEV FRONT

npm install

## STYLELINT

### Install

1. npm i stylelint
2. npm i stylelint-config-sass-guidelines
3. npm i stylelint-config-property-sort-order-smacss
4. npm install stylelint-8-point-grid --save-dev
5. npm install stylelint-selector-bem-pattern
6. add .stylelintrc.json
   ```json
   {
     "extends": [
       "stylelint-config-sass-guidelines",
       "stylelint-config-property-sort-order-smacss",
       "stylelint-8-point-grid"
     ],
     "plugins": ["stylelint-selector-bem-pattern"],
     "ignoreFiles": ["src/scss/vendors/**/*.*"],
     "rules": {
       "max-nesting-depth": 3,
       "selector-class-pattern": null,
       "order/properties-alphabetical-order": null,
       "selector-attribute-quotes": "always",
       "string-quotes": "double",
       "plugin/selector-bem-pattern": {
         "componentName": "[A-Z]+",
         "componentSelectors": {
           "initial": "^\\.{componentName}(?:-[a-z]+)?$",
           "combined": "^\\.combined-{componentName}-[a-z]+$"
         },
         "utilitySelectors": "^\\.util-[a-z]+$"
       }
     }
   }
   ```

### VSCODE format on save

- .vscode/settings.json :

```javascript
  "editor.formatOnSave": true,
  "prettier.stylelintIntegration": true,
  "prettier.trailingComma": "es5",
  "prettier.tslintIntegration": true,
  "prettier.singleQuote": true
```

### Run

1. Run stylelint
   > stylelint "src/scss/\*\*"
2. Run stylelint and fix
   > stylelint "src/scss/\*\*" --fix

## SASSDOC

### Install && run

1. npm install sassdoc -g
2. > sassdoc src/scss

## BEM add on

- [npm install classnames](https://github.com/JedWatson/classnames)

## Storybook

### 1. install, 2. run

1. npx -p @storybook/cli sb init
2. npm run storybook

## Questions

- UI library doit elle être gérée par un package npm (comme un framework)
  - how to ?
  - quid de TS
  - space name (par enseigne)

Conseil sur le découpage de la structure et des éléments :

- Chaque composant doit il embarquer ses propres styles ?

  - CSS in JS ou css module -> modules.css

- Gestion des assets

  - public ou src -> <10k

- faut-il partir from scratch ou se baser sur une UI library

- UI library

  - Composant
    - Btn
      - Btn.jsx
      - Btn.module.css
      - Btn.bcq.module.css (hérite de Btn.module.css)
      - Btn.tl.module.css (hérite de Btn.module.css)

- Site React
  - import Btn (en fonction de l'enseigne ?)
