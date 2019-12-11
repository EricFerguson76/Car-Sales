import React from 'react';

import { useSelector, connect} from 'react-redux';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = () => {
  const car = useSelector(state => state.car);
  const extraFeatures = useSelector(state => state.additionalFeatures);
  const extraPrice = useSelector(state => state.additionalPrice);



  const removeFeature = item => {
    // dispatch an action here to remove an item
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={car} />
        <AddedFeatures car={car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={extraFeatures} />
        <Total car={car} additionalPrice={extraPrice} />
      </div>
    </div>
  );
};


const mapStateToProps = state => {
  return{
    car: state.car,
    extraFeatures: state.extraFeatures,
    extraPrice: state.extraPrice
  }
}

export default connect(mapStateToProps, {})(App);