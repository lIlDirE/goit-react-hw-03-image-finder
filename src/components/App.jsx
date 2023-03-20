import { Component } from 'react';
import ImageGallery from "./ImageGallery/ImageGallery";
import Searchbar from "./Searchbar/Searchbar";

export class App extends Component {
  state = {
    serachValue: '',
  };

  submitSearch = ({ serachValue }) => {
    this.setState({serachValue})
  }

render() {
  return (
      <>
      <Searchbar onSubmit={this.submitSearch}/>
      <ImageGallery serachValue={this.state}/> 
      </>
  )}
}

