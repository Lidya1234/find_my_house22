import React from 'react';
import '../style/style.css';
import '../style/Rating.css';
const SingleHouse = ( { key, name, image, price, rank }) =>
{  const rate = (rank / 5) * 100
    return(
        <>
     <div className="house">
         <img className="image" src={image} alt={image} />
         <div className="description">
           <div className="name">{name}
           <div> <span className="star-wrapper">
            <span className="stars" style={{ width: rate + "%" }}></span>
            </span></div></div>
             <div className="price">{price}
             <div>per month</div></div>
            
         </div>
     </div>
     <button type="button">Apply to rent</button>
</>
    )
}
export default SingleHouse;