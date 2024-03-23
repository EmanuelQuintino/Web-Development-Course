# Git Commands

0. `git --version`
1. `git init`
2. `rm -rf .git`
3. `git config --global user.name "Emanuel Quintino"`
4. `git config --global user.email "emanuelquintino@hotmail.com"`
5. `git config --global core.editor "code -w"`
6. `git config --global --unset use.email`
7. `git config --global --list`
8. `git config --local --list`
9. `git status` (Working Directory, Stage Area, Repository(Logs))
10. `git add .`
11. `git rm --cached` (add file name)
12. `git restore .`
13. `git restore --staged .`
14. `git commit -m "first commit"`
15. `git commit --amend -m "new message"`
16. `git reset --soft HEAD~1`
17. `git reset --hard HEAD~2`
18. `git log`
19. `git log -n 3`
20. `git show [hash]`
21. `git diff`
22. `git branch -M main`
23. `git remote add origin` (add address)
24. `git remote remove origin` (add address)
25. `git remote -v` (consult remote address)
26. `git push -u origin main`
27. `git push`
28. `git pull`
29. `git clone` (add link)
30. `git branch`
31. `git branch` (branch name)
32. `git branch -D` (branch name)
33. `git checkout` (branch name)
34. `git checkout -b` (branch name)
35. `git merge` (branch name)
36. `git push origin` (branch name)
37. `git push -u origin` (branch name)
38. `git fetch`
39. `git rm -r --cached .` (clear cached Git and remove file GitHub)

- **U** (Untracked): São os arquivos que ainda não são monitorados pelo GIT.
- **M** (Modified): Arquivos que já foram commitados e agora foram modificados.
- **A** (Added): Arquivos que ainda não foram commitados mas já rodou git add.
- **D** (Deleted): São arquivo que foram removidos.
