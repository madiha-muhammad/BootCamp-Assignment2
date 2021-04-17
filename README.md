### BootCamp-Assignment2: Start React and Deploy it + Errors "Browserslist: caniuse-lite is outdated" and "Yarn Build Permission Denied"

http://assignment2_start-react.surge.sh/

### Start React

1- create new react app and run it.

-- npx create-react-app app-name. app created
-- move to app folder using cd app-name
-- yarn start. app start on localhost
 
 
2- Deploy on surge
 
2.1- Deploy manually on surge.
 
-- yarn build. build created

-- surge ./build . Path of build folder

-- name.surge.sh . change name. Deployed
 
 
2.2- Deploy via git. automate it
 
-- By UI

--- GitHub Desktop > Add Local Repository > select project-name from hard-drive as local repo > Create Repository

--- Commit it > Publish Repo > give it name > then Publish Branch
 
--- Auto deploy on surge. Use Actions > Yaml file with surge token in Settings > Secrets
 
 
 
** Errors with solution **
 
Error 1-- "Browserslist: caniuse-lite is outdated".
 
-- Solution: --

--- npm outdated

--- npm update --save/--save-dev

--- yarn install

--- npm install caniuse-lite@latest --save
 

-- upgraing browserslist in yaml file at github --

---- run: npx browserslist --update-db
 
 
Error 2-- "Creating an optimized production build...Failed to compile. EACCES: permission denied, mkdir '/home/runner/work/folder-name/node_modules/.cache'" --


** Errors with solution **
 

Error 1-- "Browserslist: caniuse-lite is outdated".

-- Solution: --
 
--- add administrative permissions with yarn build

--- sudo yarn build
 
