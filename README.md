# Instructions for deployment to GitHub Pages. Credentials can be found in Google Spreadsheet.

1. Log in to GitHub with reactimetravel account
2. Go to reactime-website repository > Settings > Pages
3. reacti.me domain name is purchased through namecheap.com (instructions below)
4. Under 'Build and Deployment', Source is set as 'GitHub Actions' and yaml file is auto-generated

### --- How to update changes to site ---

Note: reactime-website is a subrepository within the Reactime repository. If reactime-website folder is empty, run command 'git submodule update --init'. Changes pushed to this subrepo via integrated terminal will apply to the reactime-website repository which will in turn update reacti.me(if in main branch) - to pull changes, be sure that you are within reactime-website subrepo, then git pull origin 'main', or whatever branch you are trying to pull from. 5. When a change is pushed to 'main' branch of reactime-website subrepo, app will automatically re-build and deploy via GitHub actions (double check you are inside an integrated terminal for reactime-website subrepository when pushing) 6. To check build progress or errors- Go to 'Actions' tab on reactime-website GitHub repo and from there you can view workflows and build progress/history

\*\*\* IMPORTANT: In order to commit changes to reactime-website, you must login the reactime GitHub account and add you/your team members as collaborators!
Settings > Collaborators > Add People

# Instructions for namecheap.com (reacti.me) domain

Note: domain purchased for 1 year, expires Mar 15, 2024

1. To manage, go to namecheap.com > account > dashboard
2. 'Recently active' > reactime.me > manage
3. Under 'Advanced DNS' tab, you will see there is a list of 8 A Records, 4 of which are under host "@", and the other 4 as "www". Both groups of 4 have the same IP addresses as provided by GitHub pages. If you use another domain registrar in the future, make sure that you set it up like this with both the "@" and "www" for all IP addresses.
