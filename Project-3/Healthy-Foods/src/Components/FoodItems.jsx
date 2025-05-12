import ErrorMessage from "./ErrorMessage";
import ItemsList from "./ItemsList";

let FootItems = ({Items}) => {
    return (
        <>
            <ErrorMessage Items={Items}/>
            <ul className="list-group"> {
                Items.map((item) => (
                    <ItemsList key={item} item={item} />
                ))}
            </ul>
        </>
    );
}

export default FootItems;