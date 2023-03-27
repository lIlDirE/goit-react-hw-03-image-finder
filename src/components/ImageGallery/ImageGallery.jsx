import { Component } from 'react';
import { ReturnFetch } from 'api/fetch';
import css from './ImageGallery.module.css';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import Notiflix from 'notiflix';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import { Loader } from 'components/Loader/Loader';

class ImageGallery extends Component {
  state = {
    dataImages: [],
    page: 1,
	newPage: 1,
    loadHits: 0,
    toggleLoader: false,
    toggleButton: false,
    isActive: false,
    largeImageUrl: '',
    largeImageAlt: '',
  };

  async componentDidUpdate(prevProps, prevState) {
	 const { page } = this.state

	const searchValue = this.props.searchValue.searchValue;
	const prevValue = prevProps.searchValue.searchValue
	const prevPage = prevState.page

    if (searchValue === '') {
      return Notiflix.Notify.failure('Please add the any searched word!');
    }   
	 else if (prevValue !== searchValue && prevPage > 1) {
		 this.setState({
		  dataImages: [],
		  page: 1,
		});

		return this.getInfo({searchValue,page});
	  } else if ((prevPage !== page && page > 1) || (searchValue !== prevValue)) {
  
		this.getInfo({searchValue,page});
	  }
  }

  getInfo = ({searchValue,page}) => {
	console.log(page);
    this.setState({ toggleLoader: true });
    ReturnFetch(searchValue, page)
      .then(data => {
        if (!data.total) {
          Notiflix.Notify.failure(
            'Sorry, but nothing was found for your search'
          );
        }
        this.setState(prevState => ({
          dataImages: [...prevState.dataImages, ...data.hits],
          loadHits: data.hits.length,
        }));
      })
      .catch(error => console.log(error))
      .finally(() => {
        this.setState({ toggleLoader: false });
      });
  };

  onLoadMore = () => {
    this.setState(state => {
      return {
        page: state.page + 1,
      };
    });
  };

  toggleModal = e => {
    this.setState({
      largeImageUrl: e.largeImageURL,
      largeImageAlt: e.tags,
      isActive: true,
    });
  };

  closeModal = () => {
    this.setState({
      isActive: false,
    });
  };

  render() {
    const {
      dataImages,
      toggleLoader,
      loadHits,
      isActive,
      largeImageUrl,
      largeImageAlt,
    } = this.state;

    return (
      <>
        {dataImages[0] && (
          <ul className={css.galleryList}>
            <ImageGalleryItem
              images={dataImages}
              toggleModal={this.toggleModal}
            />
          </ul>
        )}
        {toggleLoader && <Loader />}
        {loadHits === 12 && (
          <Button onLoadMore={this.onLoadMore} toggleLoader={toggleLoader} />
        )}
        {isActive && (
          <Modal
            url={largeImageUrl}
            alt={largeImageAlt}
            closeModal={this.closeModal}
          />
        )}
      </>
    );
  }
}

export default ImageGallery;
