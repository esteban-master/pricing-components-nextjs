import { useState } from "react";
import { Switch } from "../../components/Switch";
import { ListPrices } from "../../components/ListPrices";

export interface Price {
  type: "Basic" | "Professional" | "Master";
  price: { monthly: string; annually: string };
  features: string[];
}

const data: Price[] = [
  {
    type: "Basic",
    price: { monthly: "19.99", annually: "199.99" },
    features: ["500 GB Storage", "2 Users Allowed", "Send up to 3 GB"],
  },
  {
    type: "Professional",
    price: { monthly: "24.99", annually: "249.99" },
    features: ["1 TB Storage", "5 Users Allowed", "Send up to 10 GB"],
  },
  {
    type: "Master",
    price: { monthly: "39.99", annually: "399.99" },
    features: ["2 TB Storage", "10 Users Allowed", "Send up to 20 GB"],
  },
];

export default function PricingComponent() {
  const [typePrice, setTypePrice] = useState<"Monthly" | "Annually">("Monthly");

  function handleChecked(check: boolean) {
    if (check) {
      setTypePrice("Monthly");
    } else {
      setTypePrice("Annually");
    }
  }

  return (
    <div className="image h-screen bg-background">
      <div className="container mx-auto p-10 ">
        <div className=" flex flex-col items-center p-3">
          <div className=" w-60 p-1 space-y-6  text-principal-light font-principal">
            <h2 className="text-3xl  text-center">Our Pricing</h2>
            <div className="flex justify-center space-x-3">
              <span>Anually</span>
              <Switch onChecked={handleChecked} />
              <span>Monthly</span>
            </div>
          </div>
          <ListPrices prices={data} typePrice={typePrice} />
        </div>
      </div>
    </div>
  );
}
