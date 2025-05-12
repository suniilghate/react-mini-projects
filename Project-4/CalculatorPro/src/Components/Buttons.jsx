import style from './Buttons.module.css';
const Buttons = ({buttons}) => {
    return (
        <>
          <button className={style.button}>{buttons}</button>
        </>
        
    )
}

export default Buttons;