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
        <li>&npsp;</li>
        <li>--By UI</li>
        <li>--- GitHub Desktop &#62; Add Local Repository &#62; select project-name from hard-drive as local repo &#62; Create Repository</li>
        <li>--- Commit it &#62; Publish Repo &#62; give it name &#62; then Publish Branch</li>
        <li>&npsp;</li>
        <li>--- Auto deploy on surge. Use Actions &#62; Yaml file with surge token in Settings &#62; Secrets</li>
        <li>&npsp;</li>
      </ul>
    </div>
  );
}

export default App;

