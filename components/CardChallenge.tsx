import Link from "next/link";
import { Challenge } from "../pages/index";

export const CardChallenge = ({ challenge }: { challenge: Challenge }) => {
  return (
    <div className="max-w-md block shadow-lg rounded-xl overflow-hidden">
      <img src={challenge.img} alt="foto" />
      <div className="p-4">
        <h2 className="text-2xl font-bold">{challenge.name}</h2>
        <Link href={challenge.path}>
          <a className="hover:underline  py-3 text-lg">View Challenge</a>
        </Link>
      </div>
    </div>
  );
};
