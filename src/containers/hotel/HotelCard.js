import React from 'react';
import { truncate } from '../../util/truncate.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import moment from 'moment';

const HotelCard = ({ hotel, handleClick }) => {
  return (
    <div className='card' style={{ width: '18rem' }}>
      <img src={hotel.image} className='card-img-top' alt='hotel' />
      <div className='card-body'>
        <h5 className='card-title'>{truncate(hotel.name, 23)}</h5>
        <p className='card-text'>{truncate(hotel.description, 30)}</p>
        <Link to={`/hotel/${hotel.id}`}>
          <button
            href='#1'
            className='btn btn-primary btn-sm'
            onClick={() => handleClick(hotel)}
          >
            More Details
          </button>
        </Link>
        <span style={{ float: 'right' }}>
          <FontAwesomeIcon icon={faStar} />
          {hotel.stars}
        </span>
      </div>
      <div className='card-footer text-muted'>
        {moment(hotel.date).format('DD/MM/YYYY hh:mm')}
      </div>
    </div>
  );
};

export default HotelCard;
