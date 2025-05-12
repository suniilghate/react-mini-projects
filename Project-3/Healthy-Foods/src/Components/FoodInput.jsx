import style from './FoodInput.module.css';
const FoodInput = ({handledOnKeyDown}) => {
    
    return <input type="text" className={style.footInput} placeholder='Enter fooditem here' onKeyDown={handledOnKeyDown}/>
}

export default FoodInput;