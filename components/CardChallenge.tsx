import Link from "next/link";
import { Challenge } from "../pages/index";

export const CardChallenge = ({ challenge }: { challenge: Challenge }) => {
  return (
    <div className="max-w-md block shadow-lg rounded-xl overflow-hidden">
      <img src={challenge.img} alt="foto" />
      <div className="p-4">
        <h2 className="text-2xl font-bold">{challenge.name}</h2>
        <div className="flex justify-between">
          <Link href={challenge.path}>
            <a className="hover:underline  py-3 text-lg">See Challenge</a>
          </Link>

          <a
            className="hover:underline  py-3 text-lg"
            href={challenge.link}
            target="_blank"
          >
            See Original
          </a>
        </div>
      </div>
    </div>
  );
};
