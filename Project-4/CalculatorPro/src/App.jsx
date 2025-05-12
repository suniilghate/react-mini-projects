import style from './App.module.css';
import ButtonsContainer from './Components/ButtonsContainer';
import Display from './Components/Display';

function App() {
  return (
    <div id="calculator" className={style.calculator}>
      <Display/>
      <ButtonsContainer/>
    </div>
  )
}

export default App
