import React, { Component } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import Styles from "./dropdown.module.css";

export default class dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      measure: { value: "confirmed", label: "confirmed" },
    };
  }

  handleChange = (e) => {
    this.props.setMeasure(e.value);
    this.setState({ measure: e });
  };

  render() {
    const options = [
      { value: "confirmed", label: "Confirmed" },
      { value: "active", label: "Active" },
      { value: "deaths", label: "Deaths" },
      { value: "recovered", label: "Recovered" },
      //{ value: "state", label: "State" },
    ];
    return (
      <div className="card" style={{ marginTop: "10px", marginBottom: "10px" }}>
        <div className="card-body">
          {/* <h5
            style={{
              fontSize: "15px",
              fontWeight: "600",
              lineHeight: "16px",
              marginBottom: "5px!important",
            }}
          >
            Measures
          </h5> */}

          <Dropdown
            controlClassName={`${Styles.cDropdownControl}`}
            options={options}
            onChange={this.handleChange}
            value={this.state.measure}
            placeholder="Select an option"
          />
        </div>
      </div>
    );
  }
}
