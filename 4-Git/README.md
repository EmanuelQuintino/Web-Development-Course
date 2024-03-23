# Git Commands

```bash
# Verifica a versão do Git instalada
git --version
```

```bash
# Inicializa um repositório Git
git init
```

```bash
# Remove completamente o controle de versão do Git do diretório atual
rm -rf .git
```

```bash
# Configura o nome do usuário globalmente
git config --global user.name "Emanuel Quintino"
```

```bash
# Configura o email do usuário globalmente
git config --global user.email "emanuelquintino@hotmail.com"
```

```bash
# Configura o editor de texto padrão para commits
git config --global core.editor "code -w"
```

```bash
# Remove a configuração de email global
git config --global --unset use.email
```

```bash
# Lista todas as configurações globais do Git
git config --global --list
```

```bash
# Lista todas as configurações locais do Git
git config --local --list
```

```bash
# Verifica o estado do repositório (Diretório de Trabalho, Área de Stage, Logs do Repositório)
```

git status

```bash
# Adiciona todos os arquivos ao Stage
git add .
```

```bash
# Remove arquivos do Stage (especificar nome do arquivo)
git rm --cached
```

```bash
# Restaura todos os arquivos do Stage para a versão do último commit
git restore .
```

```bash
# Restaura todos os arquivos do Stage para a versão anterior ao último commit
git restore --staged .
```

```bash
# Realiza um commit com a mensagem "first commit"
git commit -m "first commit"
```

```bash
# Altera a mensagem do último commit
git commit --amend -m "new message"
```

```bash
# Desfaz o último commit, mantendo as mudanças no Stage
git reset --soft HEAD~1
```

```bash
# Desfaz os dois últimos commits, descartando as mudanças
git reset --hard HEAD~2
```

```bash
# Exibe o histórico de commits
git log
```

```bash
# Exibe os últimos 3 commits
git log -n 3
```

```bash
# Exibe as mudanças feitas no commit especificado
git show [hash]
```

```bash
# Exibe as diferenças entre o diretório de trabalho e o Stage
git diff
```

```bash
# Renomeia a branch principal para 'main'
git branch -M main
```

```bash
# Adiciona um repositório remoto (especificar endereço)
git remote add origin
```

```bash
# Remove um repositório remoto (especificar endereço)
git remote remove origin
```

```bash
# Lista os repositórios remotos
git remote -v
```

```bash
# Empurra os commits para o repositório remoto 'origin' na branch 'main'
git push -u origin main
```

```bash
# Empurra os commits para o repositório remoto 'origin' na branch atual
git push
```

```bash
# Puxa as alterações do repositório remoto para a branch local atual
git pull
```

```bash
# Clona um repositório remoto (especificar link)
git clone
```

```bash
# Lista todas as branches locais
git branch
```

```bash
# Cria uma nova branch (especificar nome)
git branch
```

```bash
# Deleta uma branch (especificar nome)
git branch -D
```

```bash
# Muda para a branch especificada
git checkout
```

```bash
# Cria e muda para uma nova branch (especificar nome)
git checkout -b
```

```bash
# Realiza a fusão da branch especificada com a branch atual
git merge
```

```bash
# Empurra a branch especificada para o repositório remoto 'origin'
git push origin
```

```bash
# Empurra a branch especificada para o repositório remoto 'origin' e define como upstream
git push -u origin
```

```bash
# Puxa todas as branches e atualizações do repositório remoto
git fetch
```

```bash
# Remove todos os arquivos do cache do Git e remove arquivos do GitHub
git rm -r --cached .
```

- **U** (Untracked): São os arquivos que ainda não são monitorados pelo GIT.

- **M** (Modified): Arquivos que já foram commitados e agora foram modificados.

- **A** (Added): Arquivos que ainda não foram commitados mas já rodou git add.

- **D** (Deleted): São arquivo que foram removidos.
