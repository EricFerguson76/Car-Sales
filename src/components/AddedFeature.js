import React from 'react';
import { useDispatch } from 'react-redux';
import { remove } from '../actions/actions'

const AddedFeature = props => {
  const dispatch = useDispatch();
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onCLick={() => dispatch(remove(props.feature))}>X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
