import React from "react";
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-alpine.css";

import { CustomerInfo } from "../../../interfaces/CustomerInfo";

// Define Props Interface
interface ViewCustomersSectionProps {
  customers: CustomerInfo[];
}

const ViewCustomersSection: React.FC<ViewCustomersSectionProps> = ({ customers }) => {
  const columnDefs = [
    { field: "firstName" as keyof CustomerInfo, headerName: "First Name", sortable: true, filter: true },
    { field: "lastName" as keyof CustomerInfo, headerName: "Last Name", sortable: true, filter: true },
    { field: "email" as keyof CustomerInfo, headerName: "Email", sortable: true, filter: true },
    { field: "phoneNumber" as keyof CustomerInfo, headerName: "Phone Number", sortable: true, filter: true },
  ];

  return (
    <div className="ag-theme-alpine" style={{ height: 500, width: "100%" }}>
      <AgGridReact rowData={customers} columnDefs={columnDefs} />
    </div>
  );
};

export default ViewCustomersSection;
