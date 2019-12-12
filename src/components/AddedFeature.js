import React from 'react';
import { useDispatch } from 'react-redux';
import { remove } from '../actions/actions'

const AddedFeature = props => {
  const dispatch = useDispatch();
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={() => dispatch(remove(props.feature))} className="button" >X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
