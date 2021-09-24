import logo from "./logo.svg";
import "./App.css";

function App() {
  const nayoks = [
    "Rubel",
    "Bapparaz",
    "Koober",
    "Jashim",
    "Partho",
    "chanchal",
  ];
  const naykas = ["Moushumi", "Shomi Kaiser", "Piya Bipasha"];

  const cinemas = [
    { nayok: "koober", nayika: "Kopila" },
    { nayok: "Rubel", nayika: "Moushumi" },
    { nayok: "Razzak", nayika: "Shabana" },
    { nayok: "Jashim", nayika: "Bobita" },
  ];
  return (
    <div className="App">
      {/* This one is Dynamic, Now jake add korbo oi list a add hobe */}

      <ul>
        {nayoks.map((nayok) => (
          <li>{nayok}</li>
        ))}
      </ul>
      {/* <Cinema nayok="Js Bond" Nayika="Cat Women"></Cinema> */}
      {cinemas.map((cinema) => (
        <Cinema nayok={cinema.nayok} nayika={cinema.nayika}></Cinema>
      ))}
    </div>
  );
}

function Cinema(props) {
  return (
    <div className="person">
      <h2>Nayok: {props.nayok}</h2>
      <h2>Nayika: {props.nayika}</h2>
    </div>
  );
}

/* function Person(props) {
  console.log(props);
  return (
    <div className="person">
      <h2>Name: {props.name}</h2>
      <h4>Naykas: {props.name2}</h4>
    </div>
  );
} */

/* 
{/* THis one is not dynamic, THats why last er name gulah add hoyni }

<Person name={nayoks[0]} name2={naykas[0]}></Person>
<Person name={nayoks[1]} name2={naykas[1]}></Person>
<Person name={nayoks[2]} name2={naykas[2]}></Person>
*/
/*     <div className="App">
      <Person name="Rubel" nayika="Moushumi"></Person>
      <Person name="BappaRaz" nayika="SentiRani"></Person>
    </div> */

export default App;
