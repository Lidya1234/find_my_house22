import React from 'react';
import '../style.css';
import '../Rating/Rating.css';
const House = ( { key, name, image, price, rank }) =>
{  const rate = (rank / 5) * 100
    return(
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
    )
}
export default House;
{/* <Card  style={{ minwidth: '30px' }}>
<Card.Img  src={image} />
<Card.Body>
  <Card.Title>{name}</Card.Title>
  <Card.Text>
    {price}{rank}
  </Card.Text>
</Card.Body>
</Card> */}