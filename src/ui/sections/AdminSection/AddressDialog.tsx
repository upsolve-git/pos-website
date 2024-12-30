import React from 'react';

import { Address } from '../../../interfaces/Address';
import { jsPDF } from 'jspdf';

interface ManageOrderProps {
  isOpen: boolean;
  onClose: () => void;
  address : Address
}

const AddressDialog: React.FC<ManageOrderProps> = ({ isOpen, onClose, address }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    const doc = new jsPDF();

    // Add the address details to the PDF
    doc.setFontSize(12);
    doc.text(`Full Name: ${address.full_name}`, 20, 30);
    doc.text(`Address Line 1: ${address.address_line1}`, 20, 40);
    if (address.address_line2) {
      doc.text(`Address Line 2: ${address.address_line2}`, 20, 50);
    }
    doc.text(`City: ${address.city}`, 20, 60);
    doc.text(`State: ${address.state}`, 20, 70);
    doc.text(`Pincode: ${address.pincode}`, 20, 80);
    doc.text(`Country: ${address.country}`, 20, 90);
    doc.text(`Mobile: ${address.mobile}`, 20, 100);

    doc.save('address-details.pdf');
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-10 bg-secondary">
      <div className="bg-secondary w-[90%] rounded-lg shadow-lg p-6 flex flex-col items-center desktop:w-[50%]">
        <h2 className="text-md font-semibold text-primary tablet:text-xl desktop:text-xl">Address</h2>
        <div className="space-y-2 w-full">
          <p><strong>Full Name:</strong> {address.full_name}</p>
          <p><strong>Address Line 1:</strong> {address.address_line1}</p>
          {address.address_line2 && <p><strong>Address Line 2:</strong> {address.address_line2}</p>}
          <p><strong>City:</strong> {address.city}</p>
          <p><strong>State:</strong> {address.state}</p>
          <p><strong>Pincode:</strong> {address.pincode}</p>
          <p><strong>Country:</strong> {address.country}</p>
          <p><strong>Mobile:</strong> {address.mobile}</p>
        </div>

        {/* Print and Close Buttons */}
        <div className="mt-6 flex justify-between w-full">
          <button 
            className="bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark" 
            onClick={handlePrint}
          >
            Print
          </button>

          <button 
            className="bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark" 
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddressDialog;