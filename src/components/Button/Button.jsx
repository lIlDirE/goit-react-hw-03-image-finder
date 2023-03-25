import css from './Button.module.css'
import React from 'react';
import { Loader } from 'components/Loader/Loader';
import PropTypes from 'prop-types';

const Button = ({ onLoadMore, toggleLoader }) => {
    return (
        <button type="button" onClick={onLoadMore} disabled={toggleLoader} className={css.SearchFormButton}>
        <span className="button-label">Search</span>
		{toggleLoader && (
        <Loader widthLoader={'25'} heightLoader={'25'} colorLoader={'#fff'} />
      )}
        </button>
    )
}

export default Button 

Button.propTypes = {
	clickLoadMore: PropTypes.func,
	toggleLoader: PropTypes.bool.isRequired,
  };