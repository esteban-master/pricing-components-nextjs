import { Celular } from "../../components/Celular";

const ChatApp = () => {
  return (
    <div className="bg-gray-100 h-screen font-principal-chat-app ">
      <div className="relative h-full w-full overflow-hidden">
        <div className="absolute z-0 bg-gradient-to-r from-purple-600 to-fuchsia-500 h-172 w-120 rounded-b-full -top-40 -left-72 md:-left-12"></div>
        <div className="relative z-10 pt-16 flex flex-col items-center md:flex-row md:justify-center md:space-x-12 md:items-center md:my-20">
          <Celular />

          <div className="px-8 text-center md:text-left my-8 max-w-md">
            <h2 className="text-4.5xl text-boton-enviar font-medium">
              Simple booking
            </h2>

            <p className="text-gray-400 leading-relaxed py-5">
              Stay in touch with our dog walkers through the chat interface.
              This makes it easy to discuss arrangements and make bookings. Once
              the walk has been completed you can rate your walker and book
              again all through the chat.
            </p>
          </div>
        </div>
        <div className="absolute z-0 bg-fuchsia-50 h-172 w-120 rounded-t-full -bottom-40 -right-72 md:-right-14"></div>
      </div>
    </div>
  );
};
export default ChatApp;
