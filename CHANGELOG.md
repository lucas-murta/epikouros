# Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Semantic Versioning](https://semver.org/lang/pt-BR/).

## [1.12.0](https://github.com/lucas-murta/epikouros/compare/v1.11.0...v1.12.0) (2025-10-03)

### ✨ Features

- **ep-input:** add left icon support with EpIcon and conditional rendering when value present ([44ee955](https://github.com/lucas-murta/epikouros/commit/44ee955a1b5043a31af22f0446dca42a7d00fde8))
- **ep-input:** refine left icon behavior and styles ([1812f26](https://github.com/lucas-murta/epikouros/commit/1812f2612f97b31c834f718457918f59891ec745))

## [1.11.0](https://github.com/lucas-murta/epikouros/compare/v1.10.0...v1.11.0) (2025-10-03)

### ✨ Features

- **ep-icon:** add ariaLabel prop, fix types for icon component ([2b6b611](https://github.com/lucas-murta/epikouros/commit/2b6b61165fad21d29ff87464170a1742137ce3ed))
- **ep-icon:** add EpIcon component using react-icons (FontAwesome) ([95d6a96](https://github.com/lucas-murta/epikouros/commit/95d6a968b804bb5282a22211e181b9928caccb8a))

### ♻️ Code Refactoring

- **ep-icon:** remove color prop and align size with Typography ([2cb50e4](https://github.com/lucas-murta/epikouros/commit/2cb50e4c0bad10c8da958f1d483f9c86c6bd0275))

## [1.10.0](https://github.com/lucas-murta/epikouros/compare/v1.9.0...v1.10.0) (2025-10-03)

### ✨ Features

- **ep-ds:** add EpInput base component (types, styles, component) ([ae8d8d4](https://github.com/lucas-murta/epikouros/commit/ae8d8d4074091e8ebc795b7f96d459f192ca7580))
- **ep-input:** hide number spinners; add remaining char counter when maxLength is set ([34dbd60](https://github.com/lucas-murta/epikouros/commit/34dbd608ae43fece7615f401531fe66764e63162))
- **ep-input:** move counter inside input; dynamic color states (warning/negative) ([c33e2ab](https://github.com/lucas-murta/epikouros/commit/c33e2abb31e1663d63034f15fe5b374155318bb2))

### 🐛 Bug Fixes

- **ep-input:** ensure messageSuccess overrides messageInfo to avoid overlap ([59645f0](https://github.com/lucas-murta/epikouros/commit/59645f051b94ba405fcb9a6d99cfb420de057cc4))
- **ep-input:** remove deprecated onKeyPress; correct types; use color tokens in styles ([0e16eae](https://github.com/lucas-murta/epikouros/commit/0e16eae1d7b02894341237dc99024fff2f56b7a2))

## [1.9.0](https://github.com/lucas-murta/epikouros/compare/v1.8.0...v1.9.0) (2025-10-02)

### ✨ Features

- **button:** outline/text primary/secondary text color matches border color ([02876d7](https://github.com/lucas-murta/epikouros/commit/02876d7a70d77ee266371bcaa10f4b2ca07969e6))
- **ep-button:** add positive/negative/warning colors; adjust outline/text text color to content; update stories and tests ([c4e7860](https://github.com/lucas-murta/epikouros/commit/c4e7860d39d8878e2d1c08049a169fbfe9f81f98))
- **ep-button:** map solid backgrounds to status tokens for positive/negative/status ([6e33ba8](https://github.com/lucas-murta/epikouros/commit/6e33ba8a1654009a5f0d6053d4960eac639bcec7))
- **tokens:** add color-status-positive/negative matching content-positive/negative in light/dark; expose SCSS tokens ([44fac30](https://github.com/lucas-murta/epikouros/commit/44fac304204cd92256d654c7f3430f6fd8562520))

### 🐛 Bug Fixes

- **button:** outline/text primary uses color-content-default for text ([94c88ce](https://github.com/lucas-murta/epikouros/commit/94c88ce1fc654cc6d86ede84bcf4ce4ce8a3988b))
- **button:** use content-default for outline/text in secondary color ([2dc6d49](https://github.com/lucas-murta/epikouros/commit/2dc6d49c0dbe1f8b7c1542799f1b58522e1076df))

### ♻️ Code Refactoring

- **button:** remove color 'status'; use content-primary text only for solid; outline/text follow selected content token ([9b2a5a1](https://github.com/lucas-murta/epikouros/commit/9b2a5a1be27f9a3c4b761c0b892ec298cefb0050))
- **ep-button:** remove warning color; add generic status color; map solid to status tokens ([78f2ba9](https://github.com/lucas-murta/epikouros/commit/78f2ba91d89b6e4a8111f00c44aafc5b544d14ab))
- **ep-button:** use color-content-primary for text across all colors; align outline/text to use --btn-fg ([7f5645b](https://github.com/lucas-murta/epikouros/commit/7f5645b59a76f32e8d5a99e2447370e38dd0e12a))

## [1.8.0](https://github.com/lucas-murta/epikouros/compare/v1.7.0...v1.8.0) (2025-10-02)

### ✨ Features

- **ep-paper:** add new surface variants; update border to use content tokens; update stories and tests ([0d8110e](https://github.com/lucas-murta/epikouros/commit/0d8110ee72c43c2e452c47dc79f218a34299799b))

### ♻️ Code Refactoring

- **ep-paper:** remove primary/secondary from variant; update stories, tests, and examples ([284ef9f](https://github.com/lucas-murta/epikouros/commit/284ef9f98922ce48d8abf891c6283e106f523e41))

## [1.7.0](https://github.com/lucas-murta/epikouros/compare/v1.6.0...v1.7.0) (2025-10-02)

### ✨ Features

- **ep-ds:** add surface/info-system-warning and content counterparts; add content-positive/negative; remove redundant status variants ([8a39c25](https://github.com/lucas-murta/epikouros/commit/8a39c25acb4245a4d50167fef0f40efb89c4d3a2))

### 🐛 Bug Fixes

- **ep-ds:** set color-content-warning equal to color-content-default values (light/dark) ([1ea5a14](https://github.com/lucas-murta/epikouros/commit/1ea5a14c7cae47e174e98a8373876b0274d39a14))

## [1.6.0](https://github.com/lucas-murta/epikouros/compare/v1.5.0...v1.6.0) (2025-10-02)

### ✨ Features

- **ep-ds:** add color-content-primery token and define light/dark values ([413b76b](https://github.com/lucas-murta/epikouros/commit/413b76bcdec3ee8988718badcf1429d9706e4db2))

### ♻️ Code Refactoring

- **ep-ds:** remove legacy status vars, fix surface-primary values, and rename color-content-primary ([38f2e63](https://github.com/lucas-murta/epikouros/commit/38f2e633d097870a82ada94cde737616876cf4fa))
- **ep-ds:** standardize status color tokens to color-status-\* and map legacy tokens ([6fb06ac](https://github.com/lucas-murta/epikouros/commit/6fb06acba14c66310439b4d2b87999d1abcad4c7))

## [1.5.0](https://github.com/lucas-murta/epikouros/compare/v1.4.1...v1.5.0) (2025-10-02)

### ✨ Features

- **ep-ds:** add border-radius by size (small/medium=1, large=2) ([caf210c](https://github.com/lucas-murta/epikouros/commit/caf210c87307fffe4e9543aec959a7d51c2c91f1))
- **ep-ds:** add EpButton component with variants, sizes, colors, disabled and stories/tests ([20ee378](https://github.com/lucas-murta/epikouros/commit/20ee37844623f52eae48438a3ee651f31d6b674b))

## [1.4.1](https://github.com/lucas-murta/epikouros/compare/v1.4.0...v1.4.1) (2025-10-02)

### 🐛 Bug Fixes

- put path of docs on static yml ([152dd09](https://github.com/lucas-murta/epikouros/commit/152dd0908637f9529c712ce098ac59bbad0b4d61))

## [1.4.0](https://github.com/lucas-murta/epikouros/compare/v1.3.0...v1.4.0) (2025-10-02)

### ✨ Features

- create-static-yml ([a6365f7](https://github.com/lucas-murta/epikouros/commit/a6365f7ec48f7d4ac2f865adc149b0ac8fbbd5f7))

## [1.3.0](https://github.com/lucas-murta/epikouros/compare/v1.2.1...v1.3.0) (2025-09-30)

### ✨ Features

- configure build of storybook ep-ds ([417c86d](https://github.com/lucas-murta/epikouros/commit/417c86d78d32260f47fd006d94ce4df6e8832b8f))

### 🐛 Bug Fixes

- configure build of storybook ep-ds ([cd1b118](https://github.com/lucas-murta/epikouros/commit/cd1b118e32d292f10ef159a248b4a8e740f9db4f))

## [1.2.1](https://github.com/lucas-murta/epikouros/compare/v1.2.0...v1.2.1) (2025-09-30)

### 🐛 Bug Fixes

- remove code comments from web-view files ([926e4ab](https://github.com/lucas-murta/epikouros/commit/926e4ab4e76a6850a7be931c316d74a8183c391b))
- remove the coments in styles file ([34e9ee1](https://github.com/lucas-murta/epikouros/commit/34e9ee1f6f8a87e9f1034d5e695a416fc13b4d22))

## [1.2.0](https://github.com/lucas-murta/epikouros/compare/v1.1.0...v1.2.0) (2025-09-30)

### ✨ Features

- update README with project description, logo and npm scripts ([86dff3d](https://github.com/lucas-murta/epikouros/commit/86dff3df71e72670ff676d2da1a8740e18e097b9))

## [1.1.0](https://github.com/lucas-murta/epikouros/compare/v1.0.1...v1.1.0) (2025-09-30)

### ✨ Features

- configure Prettier and pre-commit hooks with lint-staged ([f4d96f2](https://github.com/lucas-murta/epikouros/commit/f4d96f2ea246d525c75859c873758c4299a49ab3))

## [1.0.1](https://github.com/lucas-murta/epikouros/compare/v1.0.0...v1.0.1) (2025-09-30)

### 🐛 Bug Fixes

- remove Cypress e2e testing framework ([3831bae](https://github.com/lucas-murta/epikouros/commit/3831baeb74da7fac87c46ad8c2d3dee8eb46233d))

## 1.0.0 (2025-09-30)

### ⚠ BREAKING CHANGES

- Initial setup of semantic-release automation

* Add semantic-release configuration with conventional commits
* Configure GitHub Actions workflow for automated releases
* Add release scripts to package.json
* Support for main (production) and develop (beta) branches
* Generate CHANGELOG.md automatically
* Create GitHub releases with release notes
* Skip npm publishing for monorepo setup

- **typography:** propriedade size agora aceita números 1-12 ao invés de 'xs', 'sm', 'base', etc.

### ✨ Features

- add EpTypography component ([2ad6c40](https://github.com/lucas-murta/epikouros/commit/2ad6c402e649bf9eb1be0d3617653fa9ab845f56))
- add index.ts file to Grid component for consistent DS architecture ([20e18b5](https://github.com/lucas-murta/epikouros/commit/20e18b5757db56dc5f98c665eed6dbc55da3ccbc))
- adiciona tokens de espaçamento e corrige importação no ep-grid ([dd1f17b](https://github.com/lucas-murta/epikouros/commit/dd1f17bf03dd8186b49f27e5556abd3fb346d1ce))
- atualiza tokens de tipografia para usar rem ([a2fcec8](https://github.com/lucas-murta/epikouros/commit/a2fcec85b2a90975206356f9c6d4ec51c852dfae))
- configure global colors and component grid ([077e3e2](https://github.com/lucas-murta/epikouros/commit/077e3e2d32f4e1d3e005f999abf87a6fd7fbdc09))
- configure semantic-release for automated versioning ([dcf96b8](https://github.com/lucas-murta/epikouros/commit/dcf96b82df865f947115633d1ea14ddba5df985d))
- create Grid component with comprehensive utilities and tests ([9c79b45](https://github.com/lucas-murta/epikouros/commit/9c79b45b3d90eb6b47f03b9c7a1b6a5c46f2d665))
- **ep-ds:** implement Paper component Storybook with Typography integration ([ec14fbc](https://github.com/lucas-murta/epikouros/commit/ec14fbcfebf069c59030e6935517855e603d66e3))
- **paper:** implementar sistema responsivo de dimensões e espaçamento ([7447dee](https://github.com/lucas-murta/epikouros/commit/7447dee90d86b653d6a2ec9041dba494a437cb10))
- refactor design system architecture and add Storybook theme support ([15ef8b5](https://github.com/lucas-murta/epikouros/commit/15ef8b52b1e7e5d45ec6b2d08cab6b55cca06e56))
- **typography:** padronizar propriedade size com tokens de spacing 1-12 ([ffd661d](https://github.com/lucas-murta/epikouros/commit/ffd661df4886ea2ea92f5c74e817017232d8915c))

### 🐛 Bug Fixes

- add missing padding classes to Paper component ([caeed7d](https://github.com/lucas-murta/epikouros/commit/caeed7d51d6f186f4fff67f3035972bae70f9b84))
- change the alias in vite config ([06aa787](https://github.com/lucas-murta/epikouros/commit/06aa78796972306f1d179ee86a36c85065e9a051))
- correct Storybook theme configuration to properly apply data-theme attribute ([73097ef](https://github.com/lucas-murta/epikouros/commit/73097efaf2ef87933b71397e6f015059abfadb75))
- delete epikouros redundance project ([f761202](https://github.com/lucas-murta/epikouros/commit/f76120251f69d52345ca320ebee8a7eba47d3580))
- **ep-ds:** corrigir testes do componente EpPaper ([dddbfaa](https://github.com/lucas-murta/epikouros/commit/dddbfaa70c20d57fc94366e51f23315585f971b9))
- fixing token name in theme-dark ([02bd89c](https://github.com/lucas-murta/epikouros/commit/02bd89c71f098220e1e9fd5ea5859b6e4aecf6d7))
- improve typography line-clamp styling ([e84431f](https://github.com/lucas-murta/epikouros/commit/e84431f82b75eb55978e3a117d05a25eed9aaf8d))
- **paper:** ajustar testes e melhorar implementação do componente ([0e9bcd1](https://github.com/lucas-murta/epikouros/commit/0e9bcd1c2e8950204445cf36c8ab7bd8ce941ecc))
- remove nx welcome to my project ([5bbebfd](https://github.com/lucas-murta/epikouros/commit/5bbebfd8b04a8a42c0c6427673c67d3f0e34fd91))
- semantic release ([5721108](https://github.com/lucas-murta/epikouros/commit/5721108790bab8b52e6cb40b3978fd0bd265f2d6))
- **web-view:** fixing nx formatting prettier ([f0f6aa2](https://github.com/lucas-murta/epikouros/commit/f0f6aa209105c46223fa23201a1916d3a7340c1a))
- **web-view:** fixing typechecks ([5cc64e1](https://github.com/lucas-murta/epikouros/commit/5cc64e1c77d77add928c466b42e037d5a99a788e))

### ♻️ Code Refactoring

- improve processSpacingShorthand function documentation and formatting ([8199816](https://github.com/lucas-murta/epikouros/commit/8199816f9a2d737dd03f2df0f994fa5aff479323))
- rename Grid component to EpGrid and fix GridSpacing types ([3c7ec13](https://github.com/lucas-murta/epikouros/commit/3c7ec1399e8ff66742ae293a70db97ec40ef306b))
- reorganize index.ts structure ([ca1a27a](https://github.com/lucas-murta/epikouros/commit/ca1a27a8956e16c8186a38045a31576906cc9d5e))
