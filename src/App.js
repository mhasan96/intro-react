import logo from "./logo.svg";
import "./App.css";

function App() {
  const number = 2227;
  const singer = {
    name: "Mahfuzur Rahman",
    profession: "Singer",
    ability: "Gaan Pare nah",
  };

  //dynamic Style
  const SingerStyle = {
    backgroundColor: "cyan",
    color: "white",
  };
  return (
    <div className="App">
      <header className="App-header">
        <h3>Yo Yo React Mama!!!</h3>
        <p>React Kemon Dekhtesi re Mama</p>

        <div className="container">
          <h3>This is indise my Container</h3>
          <p>My number is: {number} </p>
          <p style={SingerStyle}>
            Singer: {singer.name} <br /> Job:{" "}
            {singer.profession + " " + singer.ability}
          </p>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
