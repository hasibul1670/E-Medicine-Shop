/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { SetStateAction, useState } from "react";
import {
  AccountData,
  sampleSuppliers,
} from "../../components/ExpenseComponents/AccountData";
import { AddSupplierDropdown } from "../../components/ExpenseComponents/AddSupplierDropdown";
import CustomInput from "../../components/ExpenseComponents/CustomInput";
import CustomSelect from "../../components/ExpenseComponents/CustomSelect";
import { getCurrentDate } from "../../components/ExpenseComponents/DateFormater";
import { generateBillId } from "../../components/ExpenseComponents/GenerateBillNo";

type IQuickBillModalTypes = {
  isOpen: boolean;
  billDescription?: string;
  onClose: () => void;
  onSubmit: () => void;
  setBillDescription?: any;
};

function QuickBillModal({
  isOpen,
  onClose,
  onSubmit,
  setBillDescription,
  billDescription,
}: IQuickBillModalTypes) {
  const [selectedSupplier, setSelectedSupplier] = useState(null);

  const onChange = (e: { target: { value: any } }) => {
    setBillDescription(e.target.value);
  };

  const handleSelectSupplier = (supplier: SetStateAction<null>) => {
    setSelectedSupplier(supplier);
  };

  const handleAddSupplier = () => {};

  const [billDate, setBillDate] = useState(getCurrentDate());
  function onDateChange(e: any) {
    setBillDate(e.target.value);
  }
  const [selectedAccount, setSelectedAccount] = useState<any>(null);

  const handleChange = (selectedOption: any) => {
    setSelectedAccount(selectedOption.value);
  };

  const options = AccountData?.map((account, index) => ({
    value: account.value,
    label: `${account.name}`,
  }));

  return (
    isOpen && (
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-8  w-2/4 rounded-lg">
          <div className="flex justify-between">
            <h2 className="text-xl font-bold mb-4">Create New Bill</h2>
            <h2 className="text-base font-bold mb-4 border border-blue-700 p-1 rounded-lg">
              Bill No:
              <span className="text-blue-700"> {generateBillId()} </span>
            </h2>
          </div>

          <form onSubmit={onSubmit}>
            <div className="mb-4 flex flex-col">
              <label htmlFor="billDescription" className="font-bold mb-1">
                Description <span className="text-red-500">*</span>
              </label>
              <textarea
                className="rounded-md border-2 px-2 border-blue-400 capitalize"
                value={billDescription}
                id="billDescription"
                name="billDescription"
                onChange={onChange}
                required
              />
            </div>

            <AddSupplierDropdown
              options={sampleSuppliers}
              onSelect={handleSelectSupplier}
              onAdd={handleAddSupplier}
            />

            <div className="mb-4 mt-4 flex flex-col">
              <label htmlFor="billDate" className="font-bold">
                Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                className="rounded-md py-2 px-2 border-2  border-blue-400"
                id="billDate"
                name="billDate"
                value={billDate}
                onChange={onDateChange}
                required
              />
            </div>

            <div className="mb-4 ">
              <CustomSelect
                label="Account"
                id="account"
                name="account"
                defaultValue={selectedAccount?.name}
                onChange={handleChange}
                options={options}
              />
            </div>

            <div className="mb-4 ">
              <CustomInput
                label="Amount"
                type="number"
                id="amount"
                name="amount"
                min="0"
                required
                className="font-bold text-xl"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-950  text-white px-4 py-2 rounded-md"
              >
                Save
              </button>
              <button
                onClick={onClose}
                className="bg-red-700 text-white px-4 py-2 rounded-md ml-2"
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
}

export default QuickBillModal;
