import React, {useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { scaleQuantile } from 'd3-scale';
import ReactTooltip from 'react-tooltip';
//import {ShowToolTip} from './mapUtility';
//import INDIA from './INDIA.topo.json';

//props={scale, center, data, COLOR_RANGE, width, height, stateID}



function RenderMap(props){

  const PROJECTION_CONFIG = {
    scale: props.scale,                  // How big is map
    center: props.center            //[left-right, up-down]
  };


  const geographyStyle = {
    default: {
      outline: 'none'
    },
    hover: {
      fill: '#ccc',
      transition: 'all 250ms',
      outline: 'none'
    },
    pressed: {
      outline: 'none'
    }
  };

  const data = props.data;

  const COLOR_RANGE =props.COLOR_RANGE;

  const colorScale = scaleQuantile().domain(data.map(d => d.value)).range(COLOR_RANGE);
  const DEFAULT_COLOR = '#122';

  const [tooltipContent, setTooltipContent] = useState('');

  const onMouseEnter = (geo, current = { value: 'NA' }) => {
    //props.setId(geo.id);
    //console.log("geo-prop-name ", geo.properties.name);
    //console.log("currunt-value ", current.value)
    return () => {
      setTooltipContent(`${geo.properties.name}: ${current.value}`);
      //console.log(tooltipContent)
      //props.setId(geo.id)
    };
  };

  const onMouseLeave = () => {
    setTooltipContent('');
  };

  const fillLogic = (current)=>{

    //console.log(current);
    //if(!current)
    //console.log("NA")
    return  current ? colorScale(current.value) : {DEFAULT_COLOR}
  }

  const onMouseOverCapture = (id) => {return()=> props.setId(id)};
  
    //console.log(state.selected_state_id);
    //console.log(props.map)
    //console.log(props)
  return(
    <div>
      <div className="ratio-container">
        <div className="ratio-container-content">
        <ReactTooltip>{tooltipContent}</ReactTooltip>
          <ComposableMap
            projectionConfig={PROJECTION_CONFIG}
            projection="geoMercator"
            data-tip=""
            width={props.width}
            height={props.height}
          >
            <Geographies geography={props.outline}>
              {({ geographies }) => geographies.map(geo => {
                  const current = data.find(ele => ele.id === geo.id);
                  //if (props.stateID==null || props.stateID===props.sName)
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={fillLogic(current)}
                      style={geographyStyle}
                      onMouseEnter={onMouseEnter(geo, current)}
                      onMouseLeave={onMouseLeave}
                      onMouseOver={onMouseOverCapture(geo.id)}
                    />
                  );
                })
              }
            </Geographies>
          </ComposableMap>
        </div>
      </div>
    </div>
  )
}

export default (RenderMap);