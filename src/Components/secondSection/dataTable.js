import React from "react";
import DataTable from "react-data-table-component";
//import Icon1 from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import {spinner} from '../spinner';
const customStyles = {
  header: {
    style: {
      minHeight: 0,
    },
  },
};
// const data = [
//   {
//     state: "Andhra pradesh",
//     confirmed: 12000,
//     death: 20,
//     active: 1230,
//     recovered: 3000,
//   },
//   {
//     state: "Andhra pradesh",
//     confirmed: 12000,
//     death: 20,
//     active: 1230,
//     recovered: 3000,
//   },
//   {
//     state: "Andhra pradesh",
//     confirmed: 12000,
//     death: 20,
//     active: 1230,
//     recovered: 3000,
//   },
//   {
//     state: "Andhra pradesh",
//     confirmed: 12000,
//     death: 20,
//     active: 1230,
//     recovered: 3000,
//   },
// ];

const columns = [
  {
    name: "State",
    selector: "state",
    sortable: true,
    maxWidth: "200px",
  },
  {
    name: "Confirmed",
    selector: "confirmed",
    sortable: true,
    maxWidth: "50px",
  },
  {
    name: "Deaths",
    selector: "deaths",
    sortable: true,
    maxWidth: "50px",
  },
  {
    name: "Active",
    selector: "active",
    sortable: true,
    maxWidth: "50px",
  },
  {
    name: "Recovered",
    selector: "recovered",
    sortable: true,
    maxWidth: "50px",
  },
  {
    name: "Deaths Recent",
    selector: "deltadeaths",
    sortable: true,
    maxWidth: "50px",
  },
];

const App = (props) => {
  // const [pagination, setPagination] = React.useState(true);

  // const [subHeaderAlign, setSubHeaderAlign] = React.useState("right");
  // const [highlight, setHighlight] = React.useState(true);
  // const [directionValue, setDirectionValue] = React.useState("auto");
  // const [striped, setStriped] = React.useState(true);
  const highlight=true;
  const striped=true
  const subHeaderAlign="right";
  const directionValue="auto";
  
  if (!props.data) {
    return (
      <div> {spinner()} Hold On !...we are performing some last minute calculations</div>
    );
  }
  
  return (
    <div>
      <DataTable
        columns={columns}
        data={props.data}
        defaultSortField="state"
        pagination={false}
        highlightOnHover={highlight}
        striped={striped}
        subHeader={true}
        subHeaderComponent={
          <div style={{ display: "flex", alignItems: "center" }}>
            <TextField
              id="outlined-basic"
              label="Search"
              variant="outlined"
              size="small"
              style={{ margin: "5px" }}
            />
          </div>
        }
        subHeaderAlign={subHeaderAlign}
        fixedHeaderScrollHeight="300px"
        direction={directionValue}
        customStyles={customStyles}
      />
    </div>
  );
};

export default App;
