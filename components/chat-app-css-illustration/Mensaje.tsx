export const Mensaje = ({ text, right }: { text: string; right?: boolean }) => {
  return (
    <div
      className={`${
        right
          ? "bg-white text-mensaje-chat-dark rounded-br-md self-end"
          : "bg-fuchsia-100 text-mensaje-chat-light rounded-bl-md"
      }  leading-3 my-1 text-xxs w-32 p-2 rounded-2xl`}
    >
      {text}
    </div>
  );
};
