
import FootItems from './Components/FoodItems';
import footItemsData from './Data/footItemsData';
import Container from './Components/Container';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {
  let [ footItemsDataArr, setFoodItemsData ] = useState(footItemsData);
  return (
    <>
      <Container>
        <h1 className='foot-heading'>Healthy Foods</h1>
        <FootItems Items={footItemsDataArr} setFoodItemsData={setFoodItemsData}></FootItems>
      </Container>

      <Container>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam velit officiis delectus accusamus amet eum quam temporibus voluptate voluptatem excepturi fugit expedita, ex sit, sapiente ea recusandae accusantium quae a dolores, illum molestiae architecto at consequatur voluptates. Nulla, rem, neque veniam minima ut eos, sunt ad molestias nisi officia dignissimos!</p>
      </Container>
    </>
  )
}

export default App
