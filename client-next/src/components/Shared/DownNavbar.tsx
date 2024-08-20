import Link from "next/link";

const DownNavbar = () => {
  const navbarData = [
    { title: "Home", link: "/" },
    { title: "Medicine", link: "/" },
    { title: "Beauty", link: "/" },
    { title: "Supplement", link: "/" },
    { title: "Food and Nutrition", link: "/" },
    { title: "Baby Care", link: "/" },
    { title: "Healthcare", link: "/" },
    { title: "Pet Care", link: "/" },
    { title: "Veterinary", link: "/" },
    { title: "Lab Test", link: "/" },
    { title: "Blogs", link: "/" },
    { title: "Upload Prescription", link: "/" },
  ];

  return (
    <div className="  bg-blue-100 text-gray-950 h-8 px-10 2xl:px-[15rem]  flex items-center justify-around">
      {navbarData.map((item, index) => (
        <Link
          key={index}
          href={item.link}
          className="text-base  antialiased hover:underline hover:text-blue-700 hover:font-semibold"
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default DownNavbar;
