# GIT

- **U** (Untracked): São os arquivos que ainda não são monitorados pelo GIT.

- **M** (Modified): Arquivos que já foram commitados e agora foram modificados.

- **A** (Added): Arquivos que ainda não foram commitados mas já rodou git add.

- **D** (Deleted): São arquivo que foram removidos.

## Commands

- Verifica a versão do Git instalada

```bash
git --version
```

- Inicializa um repositório Git

```bash
git init
```

- Remove completamente o controle de versão do Git do diretório atual

```bash
rm -rf .git
```

- Configura o nome do usuário globalmente

```bash
git config --global user.name "Emanuel Quintino"
```

- Configura o email do usuário globalmente

```bash
git config --global user.email "emanuelquintino@hotmail.com"
```

- Configura o editor de texto padrão para commits

```bash
git config --global core.editor "code -w"
```

- Remove a configuração de email global

```bash
git config --global --unset use.email
```

- Lista todas as configurações globais do Git

```bash
git config --global --list
```

- Lista todas as configurações locais do Git

```bash
git config --local --list
```

- Verifica o estado do repositório (Diretório de Trabalho, Área de Stage, Logs do Repositório)

```bash
git status

```

- Adiciona todos os arquivos ao Stage

```bash
git add .
```

- Remove arquivos do Stage (especificar nome do arquivo)

```bash
git rm --cached
```

- Restaura todos os arquivos do Stage para a versão do último commit

```bash
git restore .
```

- Restaura todos os arquivos do Stage para a versão anterior ao último commit

```bash
git restore --staged .
```

- Realiza um commit com a mensagem "first commit"

```bash
git commit -m "first commit"
```

- Altera a mensagem do último commit

```bash
git commit --amend -m "new message"
```

- Desfaz o último commit, mantendo as mudanças no Stage

```bash
git reset --soft HEAD~1
```

- Desfaz os dois últimos commits, descartando as mudanças

```bash
git reset --hard HEAD~2
```

- Exibe o histórico de commits

```bash
git log
```

- Exibe os últimos 3 commits

```bash
git log -n 3
```

- Exibe as mudanças feitas no commit especificado

```bash
git show [hash]
```

- Exibe as diferenças entre o diretório de trabalho e o Stage

```bash
git diff
```

- Renomeia a branch principal para 'main'

```bash
git branch -M main
```

- Adiciona um repositório remoto (especificar endereço)

```bash
git remote add origin
```

- Remove um repositório remoto (especificar endereço)

```bash
git remote remove origin
```

- Lista os repositórios remotos

```bash
git remote -v
```

- Empurra os commits para o repositório remoto 'origin' na branch 'main'

```bash
git push -u origin main
```

- Empurra os commits para o repositório remoto 'origin' na branch atual

```bash
git push
```

- Puxa as alterações do repositório remoto para a branch local atual

```bash
git pull
```

- Clona um repositório remoto (especificar link)

```bash
git clone
```

- Lista todas as branches locais

```bash
git branch
```

- Cria uma nova branch (especificar nome)

```bash
git branch
```

- Deleta uma branch (especificar nome)

```bash
git branch -D
```

- Muda para a branch especificada

```bash
git checkout
```

- Cria e muda para uma nova branch (especificar nome)

```bash
git checkout -b
```

- Realiza a fusão da branch especificada com a branch atual

```bash
git merge
```

- Empurra a branch especificada para o repositório remoto 'origin'

```bash
git push origin
```

- Empurra a branch especificada para o repositório remoto 'origin' e define como upstream

```bash
git push -u origin
```

- Puxa todas as branches e atualizações do repositório remoto

```bash
git fetch
```

- Remove todos os arquivos do cache do Git e remove arquivos do GitHub

```bash
git rm -r --cached .
```
