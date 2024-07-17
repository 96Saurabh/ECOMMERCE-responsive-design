import { FaCheckCircle, FaHeadphonesAlt } from "react-icons/fa";
import { FaCarSide, FaWallet } from "react-icons/fa6";

const ServicesData = [
  {
    id: 1,
    icon: <FaCarSide className="text-4xl md:text-5xl text-primary" />,
    title: "Free Shopping",
    description: "Free Shopping On All Order"
  },
  {
    id: 2,
    icon: <FaCheckCircle className="text-4xl md:text-5xl text-primary" />,
    title: "Safe Money",
    description: "30 Days Money Back"
  },
  {
    id: 3,
    icon: <FaWallet className="text-4xl md:text-5xl text-primary" />,
    title: "Sercure Payment",
    description: "All Sercure Payment"
  },
  {
    id: 4,
    icon: <FaHeadphonesAlt className="text-4xl md:text-5xl text-primary" />,
    title: "Online Support 24/7",
    description: "Technical Support 24/7"
  },
];

function Services() {
  return (
    <div>
      <div className="container mt-14 md:mt-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8">
          {ServicesData.map((data) => (
            <div key={data.id} className="flex flex-col items-start sm:flex-row gap-4">
              {data.icon}
              <div>
                <h1 className="lg:text-xl font-bold">{data.title}</h1>
                <h1 className="text-gray-400 text-sm">{data.description}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
