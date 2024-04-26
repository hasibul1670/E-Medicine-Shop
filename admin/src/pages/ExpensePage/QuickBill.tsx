import { SetStateAction, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/SharedComponents/Button";
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
  const [billDescription, setBillDescription] = useState("");
  const handleQuickBillSubmit = () => {
    console.log();
  };

  const handleQuickBillModal = (item: { title: SetStateAction<string> }) => {
    console.log(item);
    setIsQuickBillModalOpen(true);
    setBillDescription(item?.title);
  };
  return (
    <div className="container ">
      <div className="flex justify-between">
        <Headline>Quick Bill</Headline>
        <div className="flex justify-end h-12 lg:mt-5 lg:mr-36">
          <Button>
            <Link to="all-bills">All Bills</Link>
          </Button>
        </div>
      </div>

      <div className="mx-5 shadow-lg p-2 rounded-lg">
        <p className="text-xl text-blue-700  my-2">
          Create a bill from Template
        </p>
        <div className="grid grid-cols-7 gap-4">
          {imagesData.map((item, index) => (
            <div
              onClick={() => handleQuickBillModal(item)}
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
          billDescription={billDescription}
          setBillDescription={setBillDescription}
          onClose={() => setIsQuickBillModalOpen(false)}
          onSubmit={() => handleQuickBillSubmit()}
        />
      )}
    </div>
  );
}
