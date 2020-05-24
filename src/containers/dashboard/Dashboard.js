import React from 'react';
import { getAllHotels } from '../../store/actions/hotelActions.js';
import { connect } from 'react-redux';
import HotelCard from '../hotel/HotelCard.js';
import Spinner from '../../components/spinner/Spinner.js';
import { setCurrent } from '../../store/actions/hotelActions.js';

const Dashboard = ({ getAllHotels, hotel, setCurrent }) => {
  const handleClick = () => {
    getAllHotels();
  };

  const getCurrent = (hotel) => {
    setCurrent(hotel);
  };

  if (!hotel.hotels) {
    return <Spinner />;
  }
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <button
            type='button'
            className='btn btn-primary load_hotels_button'
            onClick={handleClick}
          >
            Load Hotels
          </button>
          <div className='col-1'>{hotel.loading && <Spinner />}</div>
        </div>
        {hotel.hotels &&
          hotel.hotels.map((hotel) => (
            <div className='col-4' key={hotel.id}>
              <HotelCard hotel={hotel} handleClick={getCurrent} />
            </div>
          ))}
        {hotel.error && <div>Error while loading hotels..</div>}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  hotel: state.hotel
});

export default connect(mapStateToProps, { getAllHotels, setCurrent })(
  Dashboard
);
