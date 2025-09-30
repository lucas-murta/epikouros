# Configuração do Semantic Release

Este projeto está configurado com o **semantic-release** para automatizar o versionamento e criação de releases baseados em commits convencionais.

## 📋 Pré-requisitos

### 1. Token do GitHub

Para que o semantic-release funcione, você precisa configurar um token do GitHub:

1. Acesse [GitHub Settings > Developer settings > Personal access tokens](https://github.com/settings/tokens)
2. Clique em "Generate new token (classic)"
3. Configure as seguintes permissões:
   - `repo` (Full control of private repositories)
   - `write:packages` (Upload packages to GitHub Package Registry)
   - `read:user` (Read user profile data)

### 2. Configuração do Token

#### Para desenvolvimento local:
```bash
# Windows (PowerShell)
$env:GITHUB_TOKEN="seu_token_aqui"

# Linux/Mac
export GITHUB_TOKEN="seu_token_aqui"
```

#### Para GitHub Actions:
O token já está configurado automaticamente como `secrets.GITHUB_TOKEN` no workflow.

## 🚀 Como Usar

### Scripts Disponíveis

```bash
# Release normal (apenas em CI/CD)
npm run release

# Teste local (dry-run) - mostra o que seria feito sem executar
npm run release:dry-run

# Release local (não recomendado para produção)
npm run release:no-ci
```

### Formato de Commits

O projeto usa **Conventional Commits**. Exemplos:

```bash
# Feature (minor version)
git commit -m "feat(typography): adicionar suporte a novos tamanhos de fonte"

# Bug fix (patch version)
git commit -m "fix(button): corrigir problema de hover em botões desabilitados"

# Breaking change (major version)
git commit -m "feat(api): alterar estrutura de resposta da API

BREAKING CHANGE: a estrutura de resposta da API foi alterada"

# Outros tipos (não geram release)
git commit -m "docs: atualizar README"
git commit -m "style: corrigir formatação do código"
git commit -m "test: adicionar testes para componente Button"
git commit -m "chore: atualizar dependências"
```

## 📦 Configuração Atual

### Branches
- `main`: Releases de produção
- `develop`: Pre-releases (beta)

### Plugins Configurados
- **@semantic-release/commit-analyzer**: Analisa commits para determinar o tipo de release
- **@semantic-release/release-notes-generator**: Gera notas de release automaticamente
- **@semantic-release/changelog**: Mantém um CHANGELOG.md atualizado
- **@semantic-release/npm**: Gerencia versionamento do package.json (sem publicar no npm)
- **@semantic-release/git**: Faz commit das mudanças de versão
- **@semantic-release/github**: Cria releases no GitHub

### Regras de Release
- `feat`: Minor version (1.0.0 → 1.1.0)
- `fix`, `perf`, `revert`, `refactor`: Patch version (1.0.0 → 1.0.1)
- `BREAKING CHANGE`: Major version (1.0.0 → 2.0.0)
- `docs`, `style`, `chore`, `test`, `build`, `ci`: Não geram release

## 🔄 Workflow Automático

O GitHub Actions está configurado para:

1. **Trigger**: Push para `main` ou `develop`
2. **Execução**:
   - Instalar dependências
   - Executar testes e build
   - Executar semantic-release
   - Criar release no GitHub (se aplicável)
   - Atualizar CHANGELOG.md
   - Fazer commit da nova versão

## 🛠️ Arquivos de Configuração

- `.releaserc.json`: Configuração principal do semantic-release
- `.github/workflows/release.yml`: Workflow do GitHub Actions
- `package.json`: Scripts de release

## 📝 Exemplo de Uso

```bash
# 1. Fazer mudanças no código
git add .
git commit -m "feat(button): adicionar variante outline"

# 2. Push para main
git push origin main

# 3. O GitHub Actions automaticamente:
#    - Executa testes
#    - Determina nova versão (ex: 1.2.0)
#    - Cria release no GitHub
#    - Atualiza CHANGELOG.md
#    - Faz commit da nova versão
```

## 🔍 Verificação Local

Para testar se um commit geraria um release:

```bash
npm run release:dry-run
```

Este comando mostra qual seria a próxima versão e as notas de release, sem fazer mudanças reais.

## ⚠️ Importante

- **Nunca** execute `npm run release` localmente em produção
- Use sempre commits convencionais
- O semantic-release só funciona com um token do GitHub válido
- Releases são criados automaticamente via GitHub Actions