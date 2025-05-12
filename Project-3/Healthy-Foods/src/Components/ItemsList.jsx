import styles from './ItemsList.module.css';

const ItemsList = ({item}) => {
    return (
        <li className={`list-group-item ${styles['kg-item']}`}><span className={styles["kg-span"]}>{item}</span></li>
    )
}

export default ItemsList;