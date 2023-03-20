import { Component } from 'react';

class ImageGallery extends Component {
    render() {
        const searchValue = Object.values(this.props.serachValue)[0]
        
        return(
            <>
            <h1>{searchValue}</h1>
            </>
        )

    }
}


export default ImageGallery