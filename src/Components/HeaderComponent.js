import React, { Component } from 'react';
import 'react-dom'
import 'materialize-css';
import { Navbar, Switch } from 'react-materialize'

class Header extends Component{

  render(){
    return(
      <div>
        <Navbar 
          alignLinks="right"
          id="header"
          centerLogo
          centerChildren
          brand = {<div>COVID-19 DASHBOARD</div>}
          //menuIcon={<Icon>menu</Icon>}
          options={{
            draggable: true,
            edge: 'left',
            inDuration: 250,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            outDuration: 200,
            preventScrolling: true
          }}
        >

        <Switch
          disabled
          className="black-text"
          id="mode"
          offLabel="Dark Mode"
          onChange={function noRefCheck(){}}
          onLabel="Light Mode"
        />

        </Navbar>
      </div>
    )
  }
}

export default Header