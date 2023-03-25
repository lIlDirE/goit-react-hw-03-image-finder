import css from './ImageGalleryItem.module.css';
import { Component } from 'react';
//console.log(item.largeImageURL)

export class ImageGalleryItem extends Component {

	handleModal = (e) => {
		const eBigImage = this.props.images.find(image => {
			return image.webformatURL === e.target.src
		})
		this.props.toggleModal(eBigImage)
	}

  render() {
    const { images } = this.props;
    return images.map(image => {
      return (
        <li key={image.id}>
          <img className={css.imgli} src={image.webformatURL} alt={image.tags} onClick={this.handleModal} />
        </li>
      );
    });
  }
}

export default ImageGalleryItem;
