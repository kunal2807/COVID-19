import React, { Component } from 'react';
import Header from './HeaderComponent';
import RenderFooter from './FooterComponent'
import MapComponent from './MapComponent.js';
import SecondSection from './secondSection';

class Main extends Component{

  render(){
    return(
      <div className="container-fluid ">
        <Header/>
          <div className="Row">
            <MapComponent/>
          </div>
          <SecondSection/>
        <RenderFooter/>
      </div>
    );
  }

}

export default Main;