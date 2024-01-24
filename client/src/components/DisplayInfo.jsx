import { useState, useEffect } from 'react';

const DisplayInfo = () => {
    const [items, setItems] = useState([]);

    useEffect(
        () => {
            console.log("Sending request")
            fetch(`http://${process.env.IP_ADDRESS}:3500/items`)
                .then((res) => {
                    return res.json()
                })
                .then((data) => {
                    setItems(data.items)
                })
                .catch((err) => {
                    console.log("Got error: ", err)
                })
        }, []
    )
    
    return (
        <ul className="infoList">
            {items.map(
                (item, idx) => {
                    return (<li className='infoListElement' key={idx}>{item}</li>)
                }
            )}
        </ul>
    )
}
export default DisplayInfo