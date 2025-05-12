import 'bootstrap/dist/css/bootstrap.min.css';
import FootItems from './Components/FoodItems';
import footItemsData from './Data/footItemsData';
import './App.css'

function App() {
  return (
    <>
      <h1 className='foot-heading'>Healthy Foods</h1>
      <FootItems Items={footItemsData}></FootItems>
    </>
  )
}

export default App
