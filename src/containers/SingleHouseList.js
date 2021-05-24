import React, { useEffect }  from 'react';
import  { useSelector, useDispatch } from 'react-redux';
import { fetchHouse } from '../reducers/findSlice';
import SingleNav from '../components/SingleNav'
import SingleHouse from '../components/House';
const SingleHouseList = () =>
{  const dispatch =useDispatch()
     const { house, singlehouse ,status } = useSelector(state => state.houses)
    useEffect(() =>
    {
     dispatch(fetchHouse(1))
    },[dispatch]);
console.log(singlehouse , status ,'status')
    return(
        <>
        <SingleNav name={singlehouse.name} />
        <div className="wrapper">
            
    <SingleHouse key={singlehouse.id} image={singlehouse.image} name={singlehouse.name} price={singlehouse.price} rank={singlehouse.rank} />
                    
                
 
    
        </div>
        </>
    )
}
export default SingleHouseList;

