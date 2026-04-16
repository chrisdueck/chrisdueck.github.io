import {
  SiDocker,
  SiDotnet,
  SiExpo,
  SiGo,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import LogoLoop from "./lib/LogoLoop";

const SkillsLoop = () => {
  const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    {
      node: <SiTypescript />,
      title: "TypeScript",
      href: "https://www.typescriptlang.org",
    },
    {
      node: <SiTailwindcss />,
      title: "Tailwind CSS",
      href: "https://tailwindcss.com",
    },
    {
      node: <SiExpo />,
      title: "Expo",
      href: "https://expo.dev",
    },
    {
      node: <SiDotnet />,
      title: ".NET",
      href: "https://dotnet.microsoft.com/",
    },
    {
      node: <SiMongodb />,
      title: "MongoDB",
      href: "https://www.mongodb.com/",
    },
    {
      node: <SiPostgresql />,
      title: "PostgreSQL",
      href: "https://www.postgresql.org/",
    },
    {
      node: <SiGo />,
      title: "Go",
      href: "https://go.dev/",
    },
    {
      node: <FaAws />,
      title: "AWS",
      href: "https://aws.amazon.com/",
    },
    {
      node: <VscAzure />,
      title: "Azure",
      href: "https://azure.microsoft.com/",
    },
    {
      node: <SiDocker />,
      title: "Docker",
      href: "https://www.docker.com/",
    },
  ];

  // TODO Make fade out colour work
  return (
    <LogoLoop
      logos={techLogos}
      speed={60}
      direction="left"
      logoHeight={30}
      gap={60}
      scaleOnHover
      pauseOnHover
      // fadeOut
      // fadeOutColor={}
      ariaLabel="Skills"
    />
  );
};

export default SkillsLoop;
