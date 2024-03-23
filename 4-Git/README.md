# Git Commands

```bash
# Check the installed Git version
git --version
```

```bash
# Initialize a Git repository
git init
```

```bash
# Completely remove Git version control from the current directory
rm -rf .git
```

```bash
# Configure username globally
git config --global user.name "Emanuel Quintino"
```

```bash
# Configure user email globally
git config --global user.email "emanuelquintino@hotmail.com"
```

```bash
# Configure the default text editor for commits
git config --global core.editor "code -w"
```

```bash
# Remove global email configuration
git config --global --unset use.email
```

```bash
# List all Git global settings
git config --global --list
```

```bash
# List all local Git configurations
git config --local --list
```

```bash
# Check the repository status (Working Directory, Stage Area, Repository Logs)
git status
```

```bash
# Add all files to the Stage
git add .
```

```bash
# Remove files from Stage (specify file name)
git rm --cached
```

```bash
# Restores all Stage files to the version of the last commit
git restore .
```

```bash
# Restores all Stage files to the version prior to the last commit
git restore --staged .
```

```bash
# Make a commit with the message "first commit"
git commit -m "first commit"
```

```bash
# Change the message of the last commit
git commit --amend -m "new message"
```

```bash
# Undo the last commit, keeping the changes in the Stage
git reset --soft HEAD~1
```

```bash
# Undo the last two commits, discarding the changes
git reset --hard HEAD~2
```

```bash
# Display commit history
git log
```

```bash
# Display the last 3 commits
git log -n 3
```

```bash
# Display changes made to the specified commit
git show [hash]
```

```bash
# Display the differences between the working directory and the Stage
git diff
```

```bash
# Rename the main branch to 'main'
git branch -M main
```

```bash
# Add a remote repository (specify address)
git remote add origin
```

```bash
# Remove a remote repository (specify address)
git remote remove origin
```

```bash
# List remote repositories
git remote -v
```

```bash
# Push commits to remote repository 'origin' on branch 'main'
git push -u origin main
```

```bash
# Push commits to remote repository 'origin' in current branch
git push
```

```bash
# Pull changes from the remote repository to the current local branch
git pull
```

```bash
# Clones a remote repository (specify link)
git clone
```

```bash
# List all local branches
git branch
```

```bash
# Create a new branch (specify name)
git branch
```

```bash
# Delete a branch (specify name)
git branch -D
```

```bash
# Switch to the specified branch
git checkout
```

```bash
# Create and move to a new branch (specify name)
git checkout -b
```

```bash
# Merge the specified branch with the current branch
git merge
```

```bash
# Push the specified branch to the 'origin' remote repository
git push origin
```

```bash
# Push the specified branch to the remote repository 'origin' and set it as upstream
git push -u origin
```

```bash
# Pull all branches and updates from the remote repository
git fetch
```

```bash
# Remove all files from Git cache and remove files from GitHub
git rm -r --cached .
```

- **U** (Untracked): These are files that are not yet monitored by GIT.

- **M** (Modified): Files that have already been committed and have now been modified.

- **A** (Added): Files that have not yet been committed but have already been run by git add.

- **D** (Deleted): These are files that were removed.
