import HeadingComponent1 from "../../components/CommonComponent/HeadingComponent/HeadingComponent1";

export default function BillOverview() {
  return (
    <div className="container ">
      <div className="mx-5">
        <HeadingComponent1
          title="Counter Visa Booking"
          btnText="Create New Bill"
          url="/create-new-bill"
        />
      </div>
      <div className="">
        <div></div>
      </div>
    </div>
  );
}
