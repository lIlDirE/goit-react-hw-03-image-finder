import PropTypes from 'prop-types';
import { Component } from 'react';
import css from './Modal.module.css';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeEscModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeEscModal);
  }

  handleBackDropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.closeModal();
    }
  };

  closeEscModal = e => {
    const { closeModal } = this.props;
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  render() {
    const { url, alt } = this.props;
    return (
      <div className={css.modal} onClick={this.handleBackDropClick}>
        <div className={css.content}>
          <img src={url} alt={alt} />
        </div>
      </div>
    );
  }
}

export default Modal;

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
