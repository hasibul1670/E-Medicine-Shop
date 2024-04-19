type IQuickBillModalTypes = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onAmountChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  formData: {
    billDescription: string;
    billTo: string;
    billDate: string;
    amount: number;
  };
};

function QuickBillModal({
  isOpen,
  onClose,
  onSubmit,
  onChange,
  onAmountChange,
  formData,
}: IQuickBillModalTypes) {
  return (
    isOpen && (
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-8  w-2/4 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Create New Bill</h2>
          <form onSubmit={onSubmit}>
            <div className="mb-4 flex flex-col">
              <label htmlFor="billDescription" className="font-bold">
                Description <span className="text-red-500">*</span>
              </label>
              <textarea
                className="rounded-md border p-2 border-blue-400  h-20"
                id="billDescription"
                name="billDescription"
                value={formData.billDescription}
                onChange={onChange}
                required
              />
            </div>
            <div className="mb-4 flex flex-col">
              <label htmlFor="billTo" className="font-bold">
                To <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="rounded-md border p-2 border-blue-400  h-10"
                id="billTo"
                name="billTo"
                value={formData.billTo}
                onChange={onChange}
                required
              />
            </div>
            <div className="mb-4 flex flex-col">
              <label htmlFor="billDate" className="font-bold">
                Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                className="rounded-md border p-2 border-blue-400  h-10"
                id="billDate"
                name="billDate"
                value={formData.billDate}
                onChange={onChange}
                required
              />
            </div>

            <div className="mb-4 flex flex-col">
              <label htmlFor="amount" className="font-bold">
                Amount <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                className="rounded-md border p-2 border-blue-400 h-16 font-bold text-xl"
                id="amount"
                name="amount"
                value={formData.amount.toString()}
                onChange={onAmountChange}
                min="0"
                required
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-950 text-white px-4 py-2 rounded-md"
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
