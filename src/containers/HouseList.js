import React, { useEffect }  from 'react';
import  { useSelector, useDispatch } from 'react-redux';
import { fetchHouses } from '../reducers/findSlice';
import Nav from '../components/Nav';
import Page from '../components/Page'

import House from '../components/House';
const HouseList = () =>
{ 
    const dispatch =useDispatch()
     const { house ,status } = useSelector(state => state.houses)
    useEffect(() =>
    {
     dispatch(fetchHouses())
    },[dispatch]);
console.log(house , status ,'status')

    return(
        <>
        <Nav />
        <div className="wrapper">
          
                {
                    house.map((home) =>
                    <House key={home.id} image={home.image} name={home.name} price={home.price} rank={home.rank} />
                    )
                }
 
    
        </div>
        <Page />
        </>
    )
}
export default HouseList;

