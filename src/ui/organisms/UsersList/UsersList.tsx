import React from "react";
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import { User } from "../../../interfaces/User";
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css";

interface UserListProps{
    users : User[]
}

const UserList: React.FC<UserListProps>= ({
    users,
})=>{
    
    console.log("asgo;sd ",users)
    return(
        <div
  className="ag-theme-quartz" // applying the Data Grid theme
  style={{ height: 500 }} // the Data Grid will fill the size of the parent container
 >
   <AgGridReact
       rowData={users}
       columnDefs={[{field:'email'}, {field:'account_type'}, {field:'first_name'}, {field:'last_name'}, {field:'country_code'}, {field:'phone'}]}
   />
 </div>
    )
}

export default UserList