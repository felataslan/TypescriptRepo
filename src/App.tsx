import "./App.css";
import Card from "./components/Card";
import "bootstrap";

const data = [
  {
    id: 1,
    fullName: "Felat Aslan",
    age: 24,
  },
  {
    id: 2,
    fullName: "Mauro Emmanuel Icardi",
    age: 30,
  },
  {
    id: 3,
    fullName: "Kerem Aktürkoğlu",
    age: 25,
  },
];

const App = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        {data.map((item) => (
          <Card key={item.id} fullName={item.fullName} age={item.age} />
        ))}
      </div>
    </div>
  );
};
export default App;
