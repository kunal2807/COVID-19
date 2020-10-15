import React, { Component} from 'react';
import {getHeatMapData} from './dummyData'
import RenderMap from './renderMap';
import { Row, Col, Select, Card, Table} from 'react-materialize';
import INDIA from './INDIA.topo.json'
import {renderLegend} from './mapUtility.js';

class MapComponent extends Component{
  
  data=getHeatMapData();

  state= {
    stateID: "DL",
    stateData: {
      id: 'DL', state: 'Delhi', value: 59
    },
    
  };

  setId = id=>{
    const stateData = this.data.find(e=>e.id===id);
    this.setState({stateID: id, stateData});
  }

  COLOR_RANGE = [
    '#ffedea',
    '#ffcec5',
    '#ffad9f',
    '#ff8a75',
    '#ff5533',
    '#e2492d',
    '#be3d26',
    '#9a311f',
    '#782618'
  ];

  renderTableRow = (key, val)=>{
    return(
      <tr>
        <td> {key} </td>
        <td> {val} </td>
      </tr>
    )
  }


  renderFilter = () =>{
    return(
      <form className="row">
      <Select
        id="filter-by"
        multiple={false}
        //onChange={function noRefCheck(){}}
        options={{
          dropdownOptions: {
          alignment: 'left',
          autoTrigger: true,
          closeOnClick: true,
          constrainWidth: true,
          coverTrigger: true,
          hover: false,
          inDuration: 150,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 250
          }
        }}
        value=""
      >
        <option disabled value="" className="primary">
          Choose your option
        </option>

        <option value="1">
          Option 1
        </option>

        <option value="2">
          Option 2
        </option>

        <option value="3">
          Option 3
        </option>
      
      </Select>
      </form>
    )
  }

  legendConfig = {
    fromColor: this.COLOR_RANGE[0],
    toColor: this.COLOR_RANGE[this.COLOR_RANGE.length - 1],
    min: 0,
    max: this.data.reduce((max, item) => (item.value > max ? item.value : max), 0)
  };


  render(){

    return(
      <div>
        <Row>
          <Col s={6}>
            <RenderMap
              scale={570} 
              center={[84, 23]} 
              width={340} 
              data = {this.data}
              COLOR_RANGE = {this.COLOR_RANGE}
              height={312}
              outline={INDIA}
              setId = {this.setId}
            />
            <span className=""> {renderLegend(this.legendConfig)} </span>
          </Col>

          <Col s={6}>
            <Row>
              <Col s={4}>
                <Card className="left-align margin-top">
                  <span className="card-title">
                    FILTERS
                  </span>
                    {this.renderFilter()}
                </Card>
              </Col>
              <Col s={5} offset="s1">
              <Card className="left-align">
                <span className="card-title center-align">
                  {this.state.stateData.state}
                </span>
                <Table>
                  <tbody>
                    {this.renderTableRow("Number of Death Cases", this.state.stateData.value)}
                    {this.renderTableRow("KEY2", 2)}
                    {this.renderTableRow("KEY3", 3)}
                    {this.renderTableRow("KEY4", 4)}
                  </tbody>
                </Table>
              </Card>
              </Col>
            </Row>
            <Row>
              <Col className="s12">
                <Card className="card center-align">
                  <span className="card-title">
                    {this.state.stateData.state}
                  </span>
                  <Table>
                    <thead className="center-align">
                      <tr>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>

                    </tbody>
                  </Table>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    )

  }

}

export default MapComponent;
