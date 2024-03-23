# Git Commands

```bash
# check the installed Git version
git --version
```

```bash
# initialize a Git repository
git init
```

```bash
# completely remove Git version control from the current directory
rm -rf .git
```

```bash
# configure username globally
git config --global user.name "Emanuel Quintino"
```

```bash
# configure user email globally
git config --global user.email "emanuelquintino@hotmail.com"
```

```bash
# configure the default text editor for commits
git config --global core.editor "code -w"
```

```bash
# remove global email configuration
git config --global --unset use.email
```

```bash
# list all Git global settings
git config --global --list
```

```bash
# list all local Git configurations
git config --local --list
```

```bash
# check the repository status (Working Directory, Stage Area, Repository Logs)
git status
```

```bash
# add all files to the Stage
git add .
```

```bash
# remove files from Stage (specify file name)
git rm --cached
```

```bash
# restores all Stage files to the version of the last commit
git restore .
```

```bash
# restores all Stage files to the version prior to the last commit
git restore --staged .
```

```bash
# make a commit with the message "first commit"
git commit -m "first commit"
```

```bash
# change the message of the last commit
git commit --amend -m "new message"
```

```bash
# undo the last commit, keeping the changes in the Stage
git reset --soft HEAD~1
```

```bash
# undo the last two commits, discarding the changes
git reset --hard HEAD~2
```

```bash
# display commit history
git log
```

```bash
# display the last 3 commits
git log -n 3
```

```bash
# display changes made to the specified commit
git show [hash]
```

```bash
# display the differences between the working directory and the Stage
git diff
```

```bash
# rename the main branch to 'main'
git branch -M main
```

```bash
# add a remote repository (specify address)
git remote add origin
```

```bash
# remove a remote repository (specify address)
git remote remove origin
```

```bash
# list remote repositories
git remote -v
```

```bash
# push commits to remote repository 'origin' on branch 'main'
git push -u origin main
```

```bash
# push commits to remote repository 'origin' in current branch
git push
```

```bash
# pull changes from the remote repository to the current local branch
git pull
```

```bash
# clones a remote repository (specify link)
git clone
```

```bash
# list all local branches
git branch
```

```bash
# create a new branch (specify name)
git branch
```

```bash
# delete a branch (specify name)
git branch -D
```

```bash
# switch to the specified branch
git checkout
```

```bash
# create and move to a new branch (specify name)
git checkout -b
```

```bash
# merge the specified branch with the current branch
git merge
```

```bash
# push the specified branch to the 'origin' remote repository
git push origin
```

```bash
# push the specified branch to the remote repository 'origin' and set it as upstream
git push -u origin
```

```bash
# pull all branches and updates from the remote repository
git fetch
```

```bash
# remove all files from Git cache and remove files from github
git rm -r --cached .
```

- **U** (Untracked): These are files that are not yet monitored by GIT.

- **M** (Modified): Files that have already been committed and have now been modified.

- **A** (Added): Files that have not yet been committed but have already been run by git add.

- **D** (Deleted): These are files that were removed.
