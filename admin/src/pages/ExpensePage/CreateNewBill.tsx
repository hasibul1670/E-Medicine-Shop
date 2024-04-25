/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChangeEvent, SetStateAction, useState } from "react";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import Headline from "../../components/SharedComponents/Headline";
import { categories } from "./CatagoryDataSet";
import { AddSupplierDropdown } from "./ExpenseComponents/AddSupplierDropdown";
import CustomInput from "./ExpenseComponents/CustomInput";
import CustomSelect from "./ExpenseComponents/CustomSelect";

type INewSupplieType = {
  id?: any;
  name?: string;

};


const CreateNewBill = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSupplierModalOpen, setIsSupplierModalOpen] = useState(false);
  const [selectedSupplier, setSelectedSupplier] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [newSupplierData, setNewSupplierData] = useState({
    supplierName: "",
    supplierCompany: "",
    phone: "",
    address: "",
  });

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setNewSupplierData({
      ...newSupplierData,
      [name]: value,
    });
  };

  const handleSelectSupplier = (supplier: SetStateAction<null>) => {
    setSelectedSupplier(supplier);
  };

  const handleAddSupplier = (newSupplier:any) => {
    // Implement your logic to add the new supplier to your list
    console.log("Adding new supplier:", newSupplier);
  };

  const [billDate, setBillDate] = useState(" ");
  const [dueBillDate, setDuebillDate] = useState(" ");

  const sampleSuppliers = [
    { id: 1, name: "Rahim " },
    { id: 2, name: "Supplier" },
    { id: 3, name: "Karim" },
    { id: 21, name: "Rifat" },
    { id: 22, name: "Hasib" },
    { id: 32, name: "Supplier CG" },
  ];

  const [billData, setBillData] = useState([
    {
      id: 1,
      billCategory: "",
      itemDescription: "",
      unitPrice: "",
      quantity: "",
      total: "",
    },
  ]);

  const handleAddField = () => {
    setBillData([
      ...billData,
      {
        id: billData.length + 1,
        billCategory: "",
        itemDescription: "",
        unitPrice: "",
        quantity: "",
        total: "",
      },
    ]);
  };

  const handleRemoveField = (id: number) => {
    setBillData(billData.filter((bill) => bill.id !== id));
  };

  const handleInputChange2 = (index: any, field: string, value: string) => {
    const updatedBillData = [...billData];
    updatedBillData[index][field] = value;
    setBillData(updatedBillData);
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log(billData);
  };


  function onDateChange(e: ChangeEvent<HTMLInputElement>, field: string) {
    if (field === "billDate") {
      setBillDate(e.target.value);
    } else if (field === "dueBillDate") {
      setDuebillDate(e.target.value);
    }
  }

  return (
    <div className="  mb-20">
      <div className="mx-5">
        <Headline>Create New Bill</Headline>
      </div>
      {/* supplier info */}
      <div className="grid grid-cols-4  gap-5  mx-5">
        <AddSupplierDropdown
          options={sampleSuppliers}
          onSelect={handleSelectSupplier}
          onAdd={handleAddSupplier}
        />

        <div className="flex flex-col">
          <label htmlFor="createdBy" className="text-base">
            Created By
          </label>

          <input
            disabled
            type="text"
            value=""
            className="rounded-md"
            name="createdBy"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="createDate" className="text-base">
            Create Date
          </label>
          <input
            type="date"
            className="rounded-md"
            id="billDate"
            name="billDate"
            value={billDate}
            onChange={(e) => onDateChange(e, "billDate")}
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="dueBillDate" className="text-base">
            Due Date
          </label>
          <input
            type="date"
            className="rounded-md"
            id="dueBillDate"
            name="dueBillDate"
            value={dueBillDate}
            onChange={(e) => onDateChange(e, "dueBillDate")}
            required
          />
        </div>
      </div>

      {/* Billing Info */}
      <div className="mx-5">
        <p className="text-lg bg-gray-50 p-2 rounded-lg shadow-md text-blue-800 mt-5 mb-2  font-normal">
          Billing & Element Information
        </p>
      </div>
      <form onSubmit={handleSubmit} name="billForm" className="mx-5">
        <div>
          {billData.map((bill, index) => (
            <div key={index} className="flex gap-2 mt-4 ">
              <div className="flex flex-col  w-1/5 ">
                <label htmlFor={`billCategory`} className="text-base">
                  Bill Category
                </label>
                <select
                  className="rounded-md"
                  value={bill.billCategory}
                  onChange={(e) =>
                    handleInputChange2(index, "billCategory", e.target.value)
                  }
                  required
                >
                  <option value="">Select a category</option>
                  {categories?.map((category) => (
                    <option key={category.id} value={category.title}>
                      {category.title}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col w-1/5">
                <label htmlFor={`itemDescription`} className="text-base">
                  Bill Description
                </label>
                <input
                  type="text"
                  className="rounded-md"
                  defaultValue={bill.itemDescription}
                  onChange={(e) =>
                    handleInputChange2(index, "itemDescription", e.target.value)
                  }
                  required
                />
              </div>
              <div className="flex flex-col w-1/5">
                <label htmlFor={`quantity`} className="text-base">
                  Quantity
                </label>
                <input
                  type="number"
                  className="rounded-md"
                  defaultValue={bill.quantity}
                  onChange={(e) =>
                    handleInputChange2(index, "quantity", e.target.value)
                  }
                  required
                />
              </div>
              <div className="flex flex-col w-1/5">
                <label htmlFor={`unitPrice`} className="text-base">
                  Unit Price
                </label>
                <input
                  type="number"
                  className="rounded-md"
                  defaultValue={bill.unitPrice}
                  onChange={(e) =>
                    handleInputChange2(index, "unitPrice", e.target.value)
                  }
                  required
                />
              </div>
              <div className="flex flex-col w-1/5">
                <label htmlFor={`total`} className="text-base">
                  Total
                </label>
                <input
                  type="number"
                  className="rounded-md"
                  defaultValue={bill.total}
                  onChange={(e) =>
                    handleInputChange2(index, "total", e.target.value)
                  }
                  required
                />
              </div>
              <div className="flex mt-7">
                <div onClick={handleAddField}>
                  <FaPlusCircle className="text-4xl cursor-pointer text-blue-800" />
                </div>

                {index === billData.length - 1 && index !== 0 && (
                  <div className="flex items-center ml-4">
                    <FaMinusCircle
                      onClick={() => handleRemoveField(bill.id)}
                      className="text-4xl cursor-pointer text-red-500"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 flex justify-center  w-full shadow-md bg-gray-50 p-2">
          <div className="w-full lg:w-1/2">
            <CustomInput
              label="Payment By"
              type="text"
              name="paymentBy"
              defaultValue=""
              required
            />
            <CustomSelect
              label="Payment Status"
              name="paymentStatus"
              defaultValue=""
              required
              options={[
                { value: "", label: "Choose Method" },
                { value: "bkash", label: "BKash" },
                { value: "nagad", label: "Nagad" },
                { value: "bank", label: "Bank" },
                { value: "cash", label: "Cash" },
              ]}
            />
            <CustomInput
              label="Payment Method"
              type="text"
              name="paymentMethod"
              defaultValue=""
              required
            />
            <div className="flex flex-col w-4/5 mb-5">
              <label htmlFor="paymentNote" className="text-base">
                Note
              </label>
              <textarea
                id="paymentNote"
                name="paymentNote"
                defaultValue=""
                required
                className="w-full"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <CustomInput
              label="Net Total"
              type="number"
              name="netTotal"
              defaultValue=""
              required
              min="0"
            />
            <CustomInput
              label="Discount"
              type="number"
              name="discount"
              defaultValue=""
              required
              min="0"
            />
            <CustomInput
              label="Paid Amount"
              type="number"
              name="paidAmount"
              defaultValue=""
              required
              min="0"
            />
            <CustomInput
              label="Due Amount"
              type="number"
              name="dueAmount"
              defaultValue=""
              required
              min="0"
            />
            <div className="flex justify-end xl:mr-24">
              <button
                className="bg-blue-950 py-3 px-8 text-white mt-5 rounded-lg font-bold text-base"
                type="submit"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateNewBill;
