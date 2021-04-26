export const ListMensajes = ({
  children,
  propietario,
}: {
  propietario?: boolean;
  children?: JSX.Element | JSX.Element[];
}) => {
  return (
    <div className={`${propietario ? "flex flex-col my-4" : ""}`}>
      {children}
    </div>
  );
};
