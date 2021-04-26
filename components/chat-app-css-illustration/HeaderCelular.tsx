export const HeaderCelular = ({ user }: { user: any }) => {
  return (
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
            src={user.avatar}
            className="w-6 h-6 rounded-full border border-white"
            alt="avatar"
          />
          <div className="pl-1">
            <p className="font-medium text-xs">{user.name}</p>
            <p className="text-xxs">
              {user.status ? "Avaliable to Walk" : "No Avaliable to Walk"}
            </p>
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
  );
};
