import React from "react";
import { DataTable } from "grommet";

function MelodyDataTable(props) {
  return <DataTable {...props}>{props.children}</DataTable>;
}

export default MelodyDataTable;
