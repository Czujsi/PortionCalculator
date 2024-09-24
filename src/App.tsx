import './App.css'
import IngredientTable from './components/IngredientTable';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Lista składników</h1>
      <IngredientTable />
    </div>
  );
};

export default App;

