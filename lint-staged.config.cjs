module.exports = {
  "src/**/*.{js,jsx,ts,tsx}": ["eslint --fix", "prettier --write"],
  "src/**/{!(package)*.json,*.code-snippets,.!(browserslist)*rc}": ["prettier --write--parser json"],
  "package.json": ["prettier --write"],
  "src/**/*.vue": ["eslint --fix", "prettier --write", "stylelint --fix"],
  "src/**/*.{less,styl,html}": ["stylelint --fix", "prettier --write"],
  "src/**/*.md": ["prettier --write"]
};
