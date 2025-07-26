import { useState } from 'react';
import './PopCat.css'
function PopCat() {
    const [count, setCount]=useState(0)

    function handleCount(){
        setCount ((prev)=>prev +1)
    }
    return (
        <div className="popcat">
            <button  className="popcat-btn" onClick={handleCount}>
               😺
            </button>
             <p className="popcat-counter">{count} clicks</p>
        </div>
    );
}
export default PopCat;