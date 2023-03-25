import { Component } from 'react';
import ImageGallery from "./ImageGallery/ImageGallery";
import Searchbar from "./Searchbar/Searchbar";

export class App extends Component {
  state = {
    searchValue: '',
  };

  submitSearch = ({ searchValue }) => {
    this.setState({searchValue})
  }

render() {
  return (
      <>
      <Searchbar onSubmit={this.submitSearch}/>
	  <ImageGallery searchValue={this.state}/> 
      </>
  )}
}

