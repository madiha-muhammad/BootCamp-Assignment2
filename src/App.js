import './App.css';

function App() {
  return (
    <div>
      <h5>** Start React **</h5>
      <ul>
        <li>1- create new react app and run it.</li>
        <li>-- npx create-react-app app-name. app created</li>
        <li>-- move to app folder using cd app-name</li>
        <li>-- yarn start. app start on localhost</li>
        <li>&nbsp;</li>
        <li>&nbsp;</li>
        <li>2- Deploy on surge</li>
        <li>&nbsp;</li>
        <li>2.1- Deploy manually on surge.</li>
        <li>&nbsp;</li>
        <li>-- yarn build. build created</li>
        <li>-- surge ./build . Path of build folder</li>
        <li>-- name.surge.sh   . change name. Deployed</li>
        <li>&nbsp;</li>
        <li>2.2- Deploy via git. automate it</li>
        <li>&nbsp;</li>
        <li>--By UI</li>
        <li>--- GitHub Desktop &#62; Add Local Repository &#62; select project-name from hard-drive as local repo &#62; Create Repository</li>
        <li>--- Commit it &#62; Publish Repo &#62; give it name &#62; then Publish Branch</li>
        <li>&nbsp;</li>
        <li>--- Auto deploy on surge. Use Actions &#62; Yaml file with surge token in Settings &#62; Secrets</li>
        <li>&nbsp;</li>
        <li>&nbsp;</li>
        <li>** Errors with solution **</li>
        <li>&nbsp;</li>
        <li>Error 1-- "Browserslist: caniuse-lite is outdated".</li>
        <li>&nbsp;</li>
        <li>-- Solution: --</li>
        <li>--- npm outdated</li>
        <li>--- npm update --save/--save-dev</li>
        <li>--- yarn install</li>
        <li>--- npm install caniuse-lite@latest --save</li>
        <li>&nbsp;</li>
        <li>-- upgraing browserslist in yaml file at github --</li>
        <li>&nbsp;&nbsp;&nbsp;- run: npx browserslist --update-db</li>
        <li>&nbsp;</li>
        <li>&nbsp;</li>
        <li>
          <li>Error 2-- "Creating an optimized production build...Failed to compile. EACCES: permission denied, mkdir '/home/runner/work/BootCamp-Assignment2/node_modules/.cache'" --</li>
        </li>
        <li>&nbsp;</li>
        <li>-- Solution --</li>
        <li>--- add administrative permissions with yarn build</li>
        <li>--- sudo yarn build</li>
        <li>&nbsp;</li>
        <li><hr></hr></li>
      </ul>
    </div>
  );
}

export default App;

