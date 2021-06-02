import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFavorite } from '../reducers/findSlice';
import Nav from '../components/Nav';
import Page from '../components/Page';

import House from '../components/House';

const FavouriteList = () => {
  const dispatch = useDispatch();
  const { house, status, favorite } = useSelector((state) => state.houses);
  useEffect(() => {
    dispatch(fetchFavorite());
  }, [dispatch]);
  console.log(house, status, 'status');
  const list = [];
  const favids = [];
  favorite.map((item) => favids.push(item.house_id));
  console.log(favids);
  console.log(house, 'houseess');
  for (let i = 0; i < house.length; i += 1) {
    console.log(house[i].id);
    if (favids.includes(i.id)) {
      list.push(i);
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
