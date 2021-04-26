import { Price } from "../pages/pricing-component-with-toggle/index";

export const CardPrice = ({
  dark,
  item,
  typePrice,
}: {
  dark?: boolean;
  item: Price;
  typePrice: "Annually" | "Monthly";
}) => {
  return (
    <div
      className={`${
        dark
          ? "scale bg-gradient-to-r from-morado-light to-morado-dark text-white"
          : "text-principal-light"
      } bg-white card shadow-md rounded-md font-principal font-bold text-base-card `}
    >
      <div>
        <h2 className="text-lg-card text-center">{item.type}</h2>
        <div className=" border-b p-7">
          <span
            className={`flex items-center justify-center tracking-tighter text-7xl ${
              dark ? "text-white" : "text-principal"
            }`}
          >
            <span className="text-4xl mr-2">&#36;</span>
            {typePrice === "Monthly" ? item.price.monthly : item.price.annually}
          </span>
        </div>

        <dl className="">
          <dt className="sr-only">Features</dt>

          {item.features.map((f: any) => (
            <dd
              key={f}
              className="border-b flex items-center justify-center p-3"
            >
              {f}
            </dd>
          ))}
        </dl>
        <div>
          <a
            href="#"
            className={`${
              dark
                ? "bg-white text-morado-dark hover:bg-transparent border-white border hover:text-white"
                : "bg-gradient-to-r from-morado-light to-morado-dark hover:from-white hover:to-white hover:text-morado-dark hover:border-morado-dark border"
            } block  uppercase tracking-widest text-center p-3 rounded-md mt-7 text-sm text-white`}
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};
