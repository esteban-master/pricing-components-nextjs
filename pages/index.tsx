import { GetStaticProps, InferGetStaticPropsType } from "next";
import { CardChallenge } from "../components/CardChallenge";

export type Challenge = {
  name: string;
  path: string;
  img: string;
  link: string;
};

export default function Home({ challenges }: { challenges: Challenge[] }) {
  return (
    <div className="container mx-auto ">
      <h1 className="mt-10 text-4xl font-bold">Challenges Frontend Mentor</h1>

      <div className="grid grid-cols-3 mt-10 gap-5">
        {challenges.map((challenge) => (
          <CardChallenge key={challenge.name} challenge={challenge} />
        ))}
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const challenges: Challenge[] = [
    {
      name: "Chat App Css Illustration",
      path: "/chat-app-css-illustration",
      img: "https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/xi4n6u5jtftsy9sbukd1.jpg",
      link: "https://www.frontendmentor.io/challenges/chat-app-css-illustration-O5auMkFqY",
    },
    {
      name: "Pricing Component With Toggle",
      path: "/pricing-component-with-toggle",
      img: "https://res.cloudinary.com/dz209s6jk/image/upload/q_auto,w_700/Challenges/sjsrx7m77v6pxswdm0mx.jpg",
      link: "https://www.frontendmentor.io/challenges/pricing-component-with-toggle-8vPwRMIC",
    },
  ];
  return {
    props: {
      challenges,
    },
  };
};
