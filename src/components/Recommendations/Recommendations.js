import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDogRequest } from './actions';
import { getTopic } from './reducer';

export const Recommendations = (props) => {
  console.log(props)
  const dispatch = useDispatch();
  const [nextDog, setNextDog] = useState(false);
  const imgUrl = useSelector(getTopic);

  useEffect(() => {
    dispatch(getDogRequest());
  }, [nextDog]);


  return <div>
    <button onClick={() => setNextDog(prev => !prev)}>Click</button>
    <img src={imgUrl} alt=""/>
  </div>
}
