import React from "react";
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-alpine.css";

interface SalonInfo {
  salonName: string;
  ownerName: string;
  contactEmail: string;
  contactMobile: string;
  bankAccount: string;
  numberOfSystems: number;
  pricePerSystem: number;
}

interface SalonsTableProps {
  salons: SalonInfo[];
}

const SalonsTable: React.FC<SalonsTableProps> = ({ salons }) => {
  const columnDefs = [
    { field: "salonName" as keyof SalonInfo, headerName: "Salon Name", sortable: true, filter: true },
    { field: "ownerName" as keyof SalonInfo, headerName: "Owner Name", sortable: true, filter: true },
    { field: "contactEmail" as keyof SalonInfo, headerName: "Contact Email", sortable: true, filter: true },
    { field: "contactMobile" as keyof SalonInfo, headerName: "Contact Mobile", sortable: true, filter: true },
    { field: "numberOfSystems" as keyof SalonInfo, headerName: "Number of Systems", sortable: true, filter: true },
    { field: "pricePerSystem" as keyof SalonInfo, headerName: "Price Per System", sortable: true, filter: true },
  ];

  return (
    <div
      className="ag-theme-alpine"
      style={{ height: 500, width: "100%" }}
    >
      <AgGridReact
        rowData={salons}
        columnDefs={columnDefs}
      />
    </div>
  );
};

export default SalonsTable;
