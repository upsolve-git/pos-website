import React, { useRef } from 'react';
import { Address } from '../../../interfaces/Address';


const PrintButton: React.FC<{ address: Address }> = ({ address }) => {
  const printRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    if (printRef.current) {
      window.print(); // Opens the print dialog
    }
  };

  return (
    <div className="p-4">
      {/* Hidden address for printing */}
      <div ref={printRef} className="hidden print:block">
        <h2 className="text-xl font-bold">Address Information</h2>
        <p>{address.address_line1?address.address_line1 : "test"}</p>
        <p>{address.city}, {address.state} {address.address_line2}</p>
      </div>

      {/* Button to trigger printing */}
      <button
        onClick={handlePrint}
        className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-700"
      >
        Print Address
      </button>

      {/* Non-printable content */}
      <div className="mt-4">
        <p>This content will not be printed.</p>
      </div>
    </div>
  );
};

export default PrintButton