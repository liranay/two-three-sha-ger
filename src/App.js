import logo from "./logo.svg";
import "./App.css";
import Menu from "./components/Menu";
import Tags from "./components/FilterAndSorter";
import "bootstrap/dist/css/bootstrap.min.css";
import ContentList from "./components/ContentList";

function App() {
  return (
    <div className="App">
      <Menu />
      <div style={{marginTop: "10px"}}>
        <Tags />
      </div>
      <ContentList />
    </div>
  );
}

export default App;
