export const MensajeBanner = ({
  label,
  price,
}: {
  label: string;
  price: string;
}) => {
  return (
    <div className="bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white text-xxs w-40 h-8 px-3 rounded-bl-md rounded-xl flex justify-between items-center my-1">
      <div className="flex space-x-2">
        <div className="h-3 w-3 rounded-full border border-fuchsia-400"></div>
        <p>{label}</p>
      </div>
      <span className="font-bold text-sm">${price}</span>
    </div>
  );
};
