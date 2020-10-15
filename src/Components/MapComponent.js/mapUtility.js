import React from 'react';

export const renderLegend = param => {

  const boxStyle = {
    width: 620,
    margin: 'auto',
    align: 'left'
  };

  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${param.fromColor} , ${param.toColor})`,
    height: 30
  };

  return (
    <div className="left">
      <div style={boxStyle} className="display-flex">
        <span className="left">{param.min}</span>
        <span className="fill"></span>
        <span className="">{(param.max+param.min)/2}</span>
        <span className="right">{(param.max)}</span>
      </div>
      <div 
        style={{ ...boxStyle, ...gradientStyle }} 
        className="s12 right">
      </div>
    </div>
  );
};