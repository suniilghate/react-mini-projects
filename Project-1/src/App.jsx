import AppName from "./components/AppName";
import AppToDo from "./components/AddToDo";
import './App.css';

function App() {
  return (
    <center className="todo-container">
      <AppName/>
      <AppToDo/>
    </center>
  );
}

export default App
