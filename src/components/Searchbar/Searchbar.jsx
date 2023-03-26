import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    searchValue: '',
  };

  handleSearch = e => {
    this.setState({searchValue: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  }

  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchbarForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.SearchFormButton}>
            <span className={css.SearchFormButton}>Search</span>
          </button>
          <input
            onChange={this.handleSearch}
			value={this.state.searchValue}
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;

Searchbar.propTypes = {
	submitSearch: PropTypes.func
}