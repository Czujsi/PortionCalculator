import './App.css'
import { IngredientTable } from './components/IngredientTable';
import { ShowAndHide } from './components/ListLoader';


const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Lista składników</h1>
      <ShowAndHide>
        <IngredientTable />
      </ShowAndHide>
      
    </div>
  );
};

export default App;

