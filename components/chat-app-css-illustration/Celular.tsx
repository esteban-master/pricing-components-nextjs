import { Mensaje } from "./Mensaje";
import { MensajeWithImages } from "./MensajeWithImages";
import { ListMensajes } from "./ListMensajes";
import { MensajeBanner } from "./MensajeBanner";
import { HeaderCelular } from "./HeaderCelular";

const mensajesImagesData = [
  { name: "Dog 1", path: "images/dog-image-1.jpg" },
  { name: "Dog 2", path: "images/dog-image-2.jpg" },
  { name: "Dog 3", path: "images/dog-image-3.jpg" },
];

const user = {
  name: "Samuel Green",
  status: true,
  avatar: "images/avatar.jpg",
};

export const Celular = () => {
  return (
    <div className=" w-62 border-8 border-white rounded-3xl h-auto shadow-md bg-gray-100 ">
      <HeaderCelular user={user} />
      <div className="p-2 ">
        <ListMensajes>
          <Mensaje text="That sounds great. I’d be happy to discuss more." />
          <Mensaje text="Could you send over some pictures of your dog, please?" />
        </ListMensajes>

        <ListMensajes propietario>
          <MensajeWithImages images={mensajesImagesData} />

          <Mensaje text="Here are a few pictures. She’s a happy girl!" right />
          <Mensaje text="Can you make it?" right />
        </ListMensajes>

        <ListMensajes>
          <Mensaje
            text="She looks so happy! The time we discussed works. How long shall I take
                her out for?"
          />
          <MensajeBanner label="30 minute walk" price="29" />
          <MensajeBanner label="1 hour walk" price="49" />
        </ListMensajes>

        <div className="relative mt-4">
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
