export const Switch = ({
  onChecked,
}: {
  onChecked: (check: boolean) => void;
}) => {
  return (
    <div>
      <input
        type="checkbox"
        defaultChecked={true}
        onChange={(e) => onChecked(e.target.checked)}
        id="toggle"
        className="hidden"
      />
      <label htmlFor="toggle">
        <div className="w-12 h-7 flex items-center bg-gradient-to-r from-morado-light to-morado-dark rounded-full p-1">
          <div className="toggle-bolita w-5 h-5 bg-white rounded-full shadow-md transform transition  ease-in-out duration-500"></div>
        </div>
      </label>
    </div>
  );
};
