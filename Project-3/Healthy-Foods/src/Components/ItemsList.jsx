import styles from './ItemsList.module.css';

const ItemsList = ({item, btnActive, handleBuyBtn}) => {
    
    return (
        <li className={`list-group-item ${styles.kgItem} ${btnActive && "active"}`}>
            <span className={styles.kgSpan}>{item}</span>
            <button className={`${styles.button} btn btn-info`} onClick={handleBuyBtn}>Buy</button>
        </li>
    )
}

export default ItemsList;