import { useState } from "react";
import Headline from "../../components/SharedComponents/Headline";
import {
  default as insurance,
  default as legal,
} from "./ExpressIcon/LEGAL EXPENSE.png";
import rent from "./ExpressIcon/RENT.png";
import expense from "./ExpressIcon/accounting (1).png";
import income from "./ExpressIcon/accounting.png";
import addFile from "./ExpressIcon/add-file (2).png";
import Motor from "./ExpressIcon/car.png";
import internet from "./ExpressIcon/globe.png";
import bank from "./ExpressIcon/money.png";
import travel from "./ExpressIcon/passport.png";
import electricity from "./ExpressIcon/plug.png";
import Entertainment from "./ExpressIcon/popcorn.png";
import Printing from "./ExpressIcon/printer.png";
import salary from "./ExpressIcon/salary ICON.png";
import subscription from "./ExpressIcon/subscription ICON.png";
import freight from "./ExpressIcon/trolley-cart.png";
import cleaning from "./ExpressIcon/vacuum-cleaner.png";
import repair from "./ExpressIcon/wrench.png";
import QuickBillModal from "./QuickBillModal";

const imagesData = [
  { imageUrl: addFile, title: "New", link: "/create-new-bill" },
  { imageUrl: expense, title: "Office Expenses", link: "/create-new-bill" },
  { imageUrl: Printing, title: "Printing stationary", link: "/link1" },
  { imageUrl: Entertainment, title: "Entertainment", link: "/link1" },
  { imageUrl: Motor, title: "Motor vehicles", link: "/link1" },
  { imageUrl: travel, title: "travel national", link: "/link1" },
  { imageUrl: repair, title: "repair maintenance", link: "/link1" },
  { imageUrl: subscription, title: "subscription", link: "/link1" },
  { imageUrl: salary, title: "salary", link: "/link1" },
  { imageUrl: electricity, title: "electricity", link: "/link1" },
  { imageUrl: internet, title: "internet", link: "/link1" },
  { imageUrl: income, title: "income tax", link: "/link1" },
  { imageUrl: bank, title: "bank fees", link: "/link1" },
  { imageUrl: legal, title: "legal expense", link: "/link1" },
  { imageUrl: insurance, title: "insurance", link: "/link1" },
  { imageUrl: freight, title: "freight & courier", link: "/link1" },
  { imageUrl: cleaning, title: "cleaning", link: "/link1" },
  { imageUrl: rent, title: "rent", link: "/link1" },
];

export default function QuickBill() {
  const [isQuickBillModalOpen, setIsQuickBillModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    billDescription: "",
    billTo: "",
    billDate: " ",
    amount: 0,
  });

  function handleSubmit() {
    console.log("Form submitted with data:", formData);
    setIsQuickBillModalOpen(false);
  }
  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleAmountChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: parseFloat(value),
    }));
  }

  return (
    <div className="container ">
      <div className="mx-5">
        <Headline>Quick Bill</Headline>
      </div>

      <div className="mx-5 shadow-lg p-2 rounded-lg">
        <p className="text-xl text-blue-700  my-2">
          Create a bill from Template
        </p>
        <div className="grid grid-cols-7 gap-4">
          {imagesData.map((item, index) => (
            <div
              onClick={() => setIsQuickBillModalOpen(true)}
              key={index}
              className="flex flex-col justify-center items-center border cursor-pointer border-blue-700 p-6 py-8 rounded-lg bg-white  text-blue-600"
            >
              <img src={item.imageUrl} alt={item.title} className="w-20 h-20" />{" "}
              <p className="font-bold capitalize mt-2 text-center">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {isQuickBillModalOpen && (
        <QuickBillModal
          isOpen={isQuickBillModalOpen}
          onClose={() => setIsQuickBillModalOpen(false)}
          onSubmit={handleSubmit}
          onChange={handleChange}
          onAmountChange={handleAmountChange}
          formData={formData}
        />
      )}
    </div>
  );
}
