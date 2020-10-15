import React, { Component } from 'react';
import 'react-dom'
import 'materialize-css';
import { Footer, Row } from 'react-materialize'

class RenderFooter extends Component{

  render(){
    return(
      <div>
        <Footer 
          className="footer dark-footer" 
          copyrights="© Copyright 2020"
          links={<ul><li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li><li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li><li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li><li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li></ul>}
          moreLinks={<a className="grey-text text-lighten-4 right" href="#!">More Links</a>}
        >
        <h5 className="white-text">
          Developed by:
        </h5>
        <div className="grey-text text-lighten-4">
          <Row>
            KUNAL JAGTIANI
          </Row>
          <Row>
            YASH BANSAL
          </Row>
          <Row>
            SANYAM JAIN
          </Row>
        </div>
        </Footer>
      </div>
    )
  }
}

export default RenderFooter;