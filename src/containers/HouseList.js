import React, { useEffect }  from 'react';
import  { useSelector, useDispatch } from 'react-redux';
import { fetchHouses } from '../reducers/findSlice';
import House from '../components/House';
const HouseList = () =>
{  const dispatch =useDispatch()
     const { house ,status } = useSelector(state => state.House)
    useEffect(() =>
    {
     dispatch(fetchHouses())
    },[dispatch]);
console.log(house , status)
    return(
        <div>
            <House />
        </div>
    )
}
export default HouseList;