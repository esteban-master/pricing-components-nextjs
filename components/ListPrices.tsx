import { Price } from "../pages/pricing-component-with-toggle";
import { CardPrice } from "./CardPrice";

export const ListPrices = ({
  prices,
  typePrice,
}: {
  prices: Price[];
  typePrice: "Annually" | "Monthly";
}) => {
  return (
    <div className="lista lg:items-center space-y-5 lg:flex-row  lg:space-y-0 m-16 lg:mt-24  ">
      {prices.map((item, i) => (
        <CardPrice
          key={i}
          item={item}
          dark={i % 2 === 1}
          typePrice={typePrice}
        />
      ))}
    </div>
  );
};
