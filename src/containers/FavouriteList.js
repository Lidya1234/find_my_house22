import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFavorite, fetchHouses } from '../reducers/findSlice';
import Nav from '../components/Nav';
import Page from '../components/Page';

import House from '../components/House';

const FavouriteList = () => {
  const dispatch = useDispatch();
  const { house, status, favorite } = useSelector((state) => state.houses);
  // const house = useSelector(selectAllHouses);
  useEffect(() => {
    dispatch(fetchFavorite());
    dispatch(fetchHouses());
  }, [dispatch]);
  console.log(house, status, 'status');
  const list = [];
  const favids = [];
  favorite.map((item) => favids.push(item.house_id));
  console.log(favids);
  console.log(house, 'houseess');
  for (let i = 0; i < house.length; i += 1) {
    console.log(house[i].id);
    if (favids.includes(house[i].id)) {
      list.push(house[i]);
    }
  }
  console.log(list, 'list');
  return (
    <>
      <Nav />
      <div className="wrapper">

        {
                    list.map((home) => (
                      <House
                        key={home.id}
                        id={home.id}
                        image={home.image}
                        name={home.name}
                        price={home.price}
                        rank={home.rank}
                      />
                    ))
                }

      </div>
      <Page />
    </>
  );
};
export default FavouriteList;
