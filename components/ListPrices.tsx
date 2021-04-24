import { Price } from "../pages";
import { CardPrice } from "./CardPrice";

export const ListPrices = ({
  prices,
  typePrice,
}: {
  prices: Price[];
  typePrice: "Annually" | "Monthly";
}) => {
  return (
    <div className="max-w-6xl flex flex-col mlg:items-center space-y-5 lg:flex-row  lg:space-y-0 m-16 lg:mt-24 ">
      {prices.map((item, i) => (
        <CardPrice
          key={i}
          item={item}
          dark={i % 2 === 1}
          typePrice={typePrice}
          scale={i % 2 === 1}
        />
      ))}
    </div>
  );
};
