import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './containers/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer props="Bienvenidos al Jardín de Suculentas" />
    </div>
  );
}

export default App;
