import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Hotel = ({ hotel }) => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12' style={{ margin: '10px 0' }}>
          <h4 className='text-center'>{hotel.name}</h4>
        </div>
        <div className='col-12'>
          <img
            src={hotel.image}
            className='rounded mx-auto d-block'
            alt='hotel'
            width='400px'
          />
          <FontAwesomeIcon icon={faStar} />
          {hotel.stars}
        </div>
        <div className='col-12' style={{ marginTop: '20px' }}>
          <p>{hotel.description}</p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  hotel: state.hotel.current
});

export default connect(mapStateToProps)(Hotel);
