function AddSupplierModal({ isOpen, onClose, onSubmit, onChange, formData }) {
  return (
    isOpen && (
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-8  w-2/4 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Add New Supplier</h2>
          <form bill={onSubmit}>
            <div className="mb-4 flex flex-col">
              <label htmlFor="supplierName">Supplier Name:</label>
              <input
                type="text"
                id="supplierName"
                name="supplierName"
                value={formData.supplierName}
                onChange={onChange}
                required
              />
            </div>
            <div className="mb-4 flex flex-col">
              <label htmlFor="supplierCompany">Supplier Company:</label>
              <input
                type="text"
                id="supplierCompany"
                name="supplierCompany"
                value={formData.supplierCompany}
                onChange={onChange}
                required
              />
            </div>
            <div className="mb-4 flex flex-col">
              <label htmlFor="phone">Phone:</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={onChange}
                required
              />
            </div>
            <div className="mb-4 flex flex-col">
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={onChange}
                required
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-950  text-white px-4 py-2 rounded-md"
              >
                Add Supplier
              </button>
              <button
                onClick={onClose}
                className="bg-red-700 text-white px-4 py-2 rounded-md ml-2"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
}

export default AddSupplierModal;
