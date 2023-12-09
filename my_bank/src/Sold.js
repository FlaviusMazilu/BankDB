import './Sold.css';


export const Sold= () => {
    const sold = 1078.99;

    return (
        <div className="sold">
            <span className="soldValue">{sold}</span>            
        </div>
    );
}
