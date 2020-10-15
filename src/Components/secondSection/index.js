import React, { Component } from "react";
import DataTable from "./dataTable";
import Dropdown from "./dropdown";
import Pie from "./pieChart";

const filterData = (data) => {
  return new Promise((resolve, reject) => {
    let filterData = data.slice(1);

    filterData = filterData.filter((x) => {
      return x.statecode !== "TT" && x.statecode !== "UN" && x.statecode;
    });

    filterData = filterData.map((x) => {
      return {
        active: parseInt(x.active),
        confirmed: parseInt(x.confirmed),
        deaths: parseInt(x.deaths),
        deltaconfirmed: parseInt(x.deltaconfirmed),
        deltadeaths: parseInt(x.deltadeaths),
        deltarecovered: parseInt(x.deltarecovered),
        lastupdatedtime: Date.parse(x.lastupdatedtime),
        migratedother: parseInt(x.migratedother),
        recovered: parseInt(x.recovered),
        state: x.state,
        statecode: x.statecode,
      };
    });

    resolve(filterData);
  });
};

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      measure: "confirmed",
    };
  }

  setMeasure = (value) => {
    this.setState({ measure: value });
  };

  componentDidMount() {
    fetch("https://api.covid19india.org/data.json")
      .then((res) => res.json())
      .then((res) => {
        return filterData(res.statewise);
      })
      .then((res) => {
        this.setState({ data: res });
      });
  }

  render() {
    return (
      <div className="row">
        <div className="col s6">
          <div className="card">
            <div className="card-content">
              <DataTable data={this.state.data} />
            </div>
          </div>
        </div>

        <div className="col s6">
          <div className="row">
            <div className="col s12" style={{ height: "80vh" }}>
              <Pie data={this.state.data} measure={this.state.measure} />
            </div>
          </div>

          <div className="row">
            <div className="col offset-s4 s4">
              <Dropdown setMeasure={this.setMeasure} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
