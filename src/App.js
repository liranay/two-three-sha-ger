import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu';
import FiltersMenu from './components/FiltersMenu';
import Tags from './components/FilterAndSorter';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContentList from './components/ContentList';


function App() {
  return (
    <div className="App">
        <Menu/>
        <Tags/>
        <ContentList/>
        <FiltersMenu/>
    </div>
  );
}

export default App;
