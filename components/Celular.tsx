export const Celular = () => {
  return (
    <div className=" w-62 border-8 border-white rounded-3xl h-auto shadow-md bg-gray-100 ">
      <div className="h-16 rounded-t-2xl rounded-b-md bg-gradient-to-r from-purple-600 to-fuchsia-500">
        <div className="bg-white h-4 w-32 mx-auto rounded-b-xl"></div>
        <div className="h-12 flex justify-between items-center text-white px-3 ">
          <div className="flex items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <img
              src="images/avatar.jpg"
              className="w-6 h-6 rounded-full border border-white"
              alt="avatar"
            />
            <div className="pl-1">
              <p className="font-medium text-xs">Samuel Green</p>
              <p className="text-xxs">Avaliable to Walk</p>
            </div>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex flex-col p-2 space-y-2">
        <div className="bg-fuchsia-100 leading-3 text-mensaje-chat-light text-xxs w-32 p-2 rounded-bl-md rounded-2xl">
          That sounds great. I’d be happy to discuss more.
        </div>
        <div className="bg-fuchsia-100 leading-3 text-mensaje-chat-light text-xxs w-32 p-2 rounded-bl-md rounded-2xl">
          Could you send over some pictures of your dog, please?
        </div>

        <div className="flex self-end space-x-2">
          <img
            src="images/dog-image-1.jpg"
            className="w-10 h-10 rounded-xl"
            alt="Image"
          />
          <img
            src="images/dog-image-2.jpg"
            className="w-10 h-10 rounded-xl"
            alt="Image"
          />
          <img
            src="images/dog-image-3.jpg"
            className="w-10 h-10 rounded-xl"
            alt="Image"
          />
        </div>

        <div className="bg-white leading-3 text-mensaje-chat-dark text-xxs w-32 p-2 rounded-br-md rounded-2xl self-end">
          Here are a few pictures. She’s a happy girl!
        </div>
        <div className="bg-white leading-3 text-mensaje-chat-dark text-xxs w-32 p-2 rounded-br-md rounded-2xl self-end">
          Can you make it?
        </div>

        <div className="bg-fuchsia-100 leading-3 text-mensaje-chat-light text-xxs w-32 p-2 rounded-bl-md rounded-2xl">
          She looks so happy! The time we discussed works. How long shall I take
          her out for?
        </div>

        <div className="bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white text-xxs w-40 h-8 px-3 rounded-bl-md rounded-xl flex justify-between items-center">
          <div className="flex space-x-2">
            <div className="h-3 w-3 rounded-full border border-fuchsia-400"></div>
            <p>30 minute walk</p>
          </div>
          <span className="font-bold text-sm">$29</span>
        </div>

        <div className="bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white text-xxs w-40 h-8 px-3 rounded-bl-md rounded-xl flex justify-between items-center">
          <div className="flex space-x-2">
            <div className="h-3 w-3 rounded-full border border-fuchsia-400"></div>
            <p>1 hour walk</p>
          </div>
          <span className="font-bold text-sm">$49</span>
        </div>

        <div className="relative">
          <input
            type="text"
            className="py-2 px-4 text-xxs w-full rounded-2xl focus:outline-none"
            placeholder="Type a message..."
          />
          <div className="absolute inset-y-0 right-0 bg-boton-enviar rounded-full w-6 h-6 m-1 flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 text-white "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={5}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
