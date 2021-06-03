import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { fetchHouse, addfavorite } from '../reducers/findSlice';
import SingleNav from '../components/SingleNav';
import SingleHouse from '../components/SingleHouse';

const SingleHouseList = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const id = location.state?.data;
  const { singlehouse } = useSelector((state) => state.houses);
  useEffect(() => {
    dispatch(fetchHouse(id));
  }, [dispatch]);
  const handleAddFavorite = (event) => {
    event.preventDefault();
    const userid = id;
    const houseid = singlehouse.id;
    const favorite = {
      user_id: userid,
      house_id: houseid,
    };
    dispatch(addfavorite(favorite));
  };
  return (
    <>
      <SingleNav name={singlehouse.name} />

      <SingleHouse
        key={singlehouse.id}
        image={singlehouse.image}
        name={singlehouse.name}
        price={singlehouse.price}
        rank={singlehouse.rank}
        description={singlehouse.description}
      />

      <button type="button" className="appbtn" onClick={handleAddFavorite}>Add To Favorite</button>
    </>
  );
};

export default SingleHouseList;
