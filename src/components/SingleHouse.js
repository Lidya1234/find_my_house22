import React from 'react';
import '../style/style.css';
import '../style/Rating.css';
import ReactTextCollapse from 'react-text-collapse'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'

const SingleHouse = ( { key, name, image, price, rank }) =>
{  const rate = (rank / 5) * 100;

    const TEXT_COLLAPSE_OPTIONS = {
        collapse: false,
        collapseText: <FaAngleDown />,
        expandText: <FaAngleUp />,
        minHeight: 50,
        maxHeight: 100,
        textStyle: {
          color: 'gray',
          fontSize: '20px',
          float: 'center',
          textAlign: 'center'
        }
      }
    return(
        <>
     <div className="singlehouse">
         <img className="singleimage" src={image} alt={image} />
         <div className="description">
           <div className="name">{name}
           <div> <span className="star-wrapper">
            <span className="stars" style={{ width: rate + "%" }}></span>
            </span></div></div>
             <div className="price">$ {price}
             <div>per month</div></div>
            
         </div>
     </div>
     <div className="collapsible">
         <h6>About this listing</h6>
     <ReactTextCollapse options={TEXT_COLLAPSE_OPTIONS}>
         <p>gfkfngfmnhgjkvnbmnbfjkghfkdjghskdhfgughf
             jbnvbvnbnmvbnjkghjfghfjg
             hfjghfjghjfdghdskkhgfjdk</p>
     </ReactTextCollapse>
     </div>
   
</>
    )
}
export default SingleHouse;