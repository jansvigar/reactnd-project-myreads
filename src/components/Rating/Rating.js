import React from 'react';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';
import 'font-awesome/css/font-awesome.min.css';

const Rating = props => {
    const ratingStyle = {
      color: '#FFB300'
    }

    const starFull = <FontAwesome name="star" size="lg" style={ ratingStyle } />;
    const starHalf = <FontAwesome name="star-half-o" size="lg" style={ ratingStyle }/>;
    const starEmpty = <FontAwesome name="star-o" size="lg" style={ ratingStyle } />;

    const isFractionalNumber = Math.ceil(props.number) !== props.number;

    return (
      <div>
        {
          Array.apply(null, Array(5))
               .map((item, index, array) => {
                 return (index + 1) <= props.number
                    ? <span key={ index }>{ starFull }</span>
                    : isFractionalNumber && (Math.ceil(props.number) === (index + 1))
                    ? <span key={ index }>{ starHalf }</span>
                    : <span key={ index }>{ starEmpty }</span>
               })

        }
      </div>
    );
};

Rating.propTypes = {
  number: PropTypes.number
};

Rating.defaultProps = {
  number: 0
};

export default Rating;
