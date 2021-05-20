
import '../style.css'
const House = ( { key, name, image, price, rank }) =>
{
    return(
     <div className="house">
         <img className="image" src={image} alt={image} />
         <div>
             {name}{price}{rank}
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