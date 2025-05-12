import style from './ButtonsContainer.module.css';
import ButtonsData from '../Data/ButtonsData';
import Buttons from './Buttons';
const ButtonsContainer = () => {
    return (
        <div className={style.buttonContainer}>
            {ButtonsData.map((button) => {
                return (<Buttons buttons={button} key={button}/>)
            })}
        </div>
    )
}

export default ButtonsContainer;