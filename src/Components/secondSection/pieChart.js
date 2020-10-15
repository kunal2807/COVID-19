import { ResponsivePie } from "@nivo/pie";
import React, { Component } from "react";
import randomColor from "randomcolor";

// const data = [
//   {
//     id: "Goa",
//     label: "Goa",
//     value: 64,
//     color: "hsl(259, 70%, 50%)",
//   },
//   {
//     id: "andhra pradesh",
//     label: "andhra pradesh",
//     value: 54,
//     color: "hsl(229, 70%, 50%)",
//   },
//   {
//     id: "uttar pradesh",
//     label: "uttar pradesh",
//     value: 480,
//     color: "hsl(356, 70%, 50%)",
//   },
//   {
//     id: "bihar",
//     label: "bihar",
//     value: 339,
//     color: "hsl(300, 70%, 50%)",
//   },
//   {
//     id: "manipal",
//     label: "manipal",
//     value: 353,
//     color: "hsl(254, 70%, 50%)",
//   },
// ];

const calcPer = (num, total) => {
  return Math.round((num / total) * 100 * 100) / 100;
};

const filterData = (data, measure) => {
  return new Promise((resolve, reject) => {
    let filterData = data.sort((a, b) => {
      return b[measure] - a[measure];
    });

    let sum = filterData.reduce((acc, x) => {
      return acc + x[measure];
    }, 0);

    let assignedShare = 100;
    let assignedAmount = sum;

    filterData = filterData.slice(0, 10).map((x) => {
      let share = calcPer(x[measure], sum);
      assignedShare -= share;
      assignedAmount -= x[measure];
      return {
        id: x.state + " " + share.toString() + "%",
        label: x.state,
        value: x[measure],
        color: randomColor({ format: "hsl" }),
      };
    });
    filterData.push({
      id: "others " + assignedShare.toString() + "%",
      label: "others",
      value: assignedAmount,
      color: randomColor({ format: "hsl" }),
    });
    console.log("after 3rd filter");
    console.log(filterData);
    resolve(filterData);
  });
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      recievedData: null,
    };
  }

  componentDidUpdate(prevProps) {
    if (
      (this.props.data !== prevProps.data &&
        this.state.recievedData !== this.props.data) ||
      (this.props.measure !== this.state.setMeasure &&
        this.props.measure !== prevProps.measure)
    ) {
      filterData(this.props.data, this.props.measure).then((data) => {
        this.setState({
          data,
          recievedData: this.props.data,
          setMeasure: this.props.measure,
        });
      });
    }
  }

  render() {
    if (!this.state.data) {
      return <div> Hold On ! ...we are doing some minor calculations</div>;
    }

    return (
      <ResponsivePie
        data={this.state.data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        colors={{ scheme: "nivo" }}
        borderWidth={1}
        borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
        radialLabelsSkipAngle={10}
        radialLabelsTextXOffset={6}
        radialLabelsTextColor="#333333"
        radialLabelsLinkDiagonalLength={16}
        radialLabelsLinkHorizontalLength={24}
        radialLabelsLinkStrokeWidth={1}
        radialLabelsLinkColor={{ from: "color" }}
        slicesLabelsSkipAngle={10}
        slicesLabelsTextColor="#333333"
        animate={true}
        motionStiffness={90}
        motionDamping={15}
      />
    );
  }
}

export default App;
