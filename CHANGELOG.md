# Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Semantic Versioning](https://semver.org/lang/pt-BR/).

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
