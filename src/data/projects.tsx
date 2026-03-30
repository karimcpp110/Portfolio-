import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiCplusplus,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiFlask,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiSocketdotio,
  SiStreamlit,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiArduino,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

const ProjectsLinks = ({ live, repo }: { live?: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Visit Website
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  cpp: {
    title: "C++",
    bg: "black",
    fg: "white",
    icon: <SiCplusplus />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  php: {
    title: "PHP",
    bg: "black",
    fg: "white",
    icon: <SiPhp />,
  },
  mysql: {
    title: "MySQL",
    bg: "black",
    fg: "white",
    icon: <SiMysql />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  socketio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  threejs: {
    title: "Three.js",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  streamlit: {
    title: "Streamlit",
    bg: "black",
    fg: "white",
    icon: <SiStreamlit />,
  },
  flask: {
    title: "Flask",
    bg: "black",
    fg: "white",
    icon: <SiFlask />,
  },
  arduino: {
    title: "Arduino",
    bg: "black",
    fg: "white",
    icon: <SiArduino />,
  },
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live?: string;
};

const projects: Project[] = [
  {
    id: "talky",
    category: "Enterprise Messaging",
    title: "TALKY",
    src: "/assets/projects-screenshots/talky/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.framerMotion,
      ],
      backend: [
        PROJECT_SKILLS.cpp,
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.socketio,
        PROJECT_SKILLS.docker,
      ],
    },
    live: "",
    github: "https://github.com/karimcpp110/whatsdown",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Enterprise Messaging = WhatsApp + Telegram, Built From Scratch
          </TypographyP>
          <TypographyP className="font-mono">
            TALKY is an enterprise-grade, high-performance hybrid messaging
            platform combining the best of WhatsApp and Telegram. Built with
            a C++ backend for raw speed and a React frontend for premium UI,
            it features end-to-end encryption, real-time WebSocket
            communication, and a security-first architecture.
          </TypographyP>
          <ProjectsLinks repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Architecture</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">C++ WebSocket server for sub-millisecond message routing</li>
            <li className="font-mono">React frontend with real-time state synchronization</li>
            <li className="font-mono">End-to-end encryption with custom key exchange protocol</li>
            <li className="font-mono">Dockerized microservice deployment pipeline</li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">Real-time messaging with typing indicators and read receipts</li>
            <li className="font-mono">Group chats with admin controls and media sharing</li>
            <li className="font-mono">Dark/light theme with glassmorphism UI</li>
            <li className="font-mono">REST API for user management and authentication</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "chiggabot",
    category: "Local AI Agent",
    title: "Chiggabot",
    src: "/assets/projects-screenshots/chiggabot/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.js],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.flask,
        PROJECT_SKILLS.docker,
      ],
    },
    live: "",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Zero Subscriptions. Full Intelligence. Local Hardware.
          </TypographyP>
          <TypographyP className="font-mono">
            Chiggabot is a high-performance, subscription-free AI agent running
            entirely on local hardware. Powered by Ollama with real-time web
            access via RAG, it features an unfiltered personality, text-to-speech
            capabilities, and a custom knowledge pipeline. No cloud dependency,
            no API costs, no limits.
          </TypographyP>
          <ProjectsLinks />
          <TypographyH3 className="my-4 mt-8">Capabilities</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">Local LLM inference via Ollama — zero subscription cost</li>
            <li className="font-mono">Real-time web search and RAG knowledge augmentation</li>
            <li className="font-mono">Text-to-speech with personality-driven voice synthesis</li>
            <li className="font-mono">Custom prompt engineering for unfiltered responses</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "soc-ai",
    category: "Cybersecurity Platform",
    title: "SOC AI Command Center",
    src: "/assets/projects-screenshots/soc-ai/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.framerMotion,
      ],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.flask, PROJECT_SKILLS.docker],
    },
    live: "",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            AI-Powered Threat Detection & Autonomous Remediation
          </TypographyP>
          <TypographyP className="font-mono">
            A real-time Security Operations Center dashboard with AI-driven
            threat analysis, automated incident response, and a Hyper-Drive
            autonomous workflow engine. Integrates scikit-learn ML models for
            anomaly detection and features a premium glassmorphism HUD interface.
          </TypographyP>
          <ProjectsLinks />
          <TypographyH3 className="my-4 mt-8">Features</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">Real-time threat feed with ML-based severity scoring</li>
            <li className="font-mono">Autonomous &quot;Hyper-Drive&quot; mode for zero-touch remediation</li>
            <li className="font-mono">Interactive network topology visualization</li>
            <li className="font-mono">Incident timeline with automated forensics reports</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "probcast",
    category: "NASA Space Apps Challenge",
    title: "ProbCast",
    src: "/assets/projects-screenshots/probcast/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.streamlit],
      backend: [PROJECT_SKILLS.python],
    },
    live: "",
    github: "https://github.com/karimcpp110/ProbCast",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Technical Team Lead @ Team Moon Walkers
          </TypographyP>
          <TypographyP className="font-mono">
            Developed as the Technical Team Lead in the 2024 NASA Space Apps Challenge (independent of IEEE).
            ProbCast transforms NASA POWER API datasets into actionable rainfall probability forecasts and
            environmental risk assessments for event organizers across any global coordinate.
          </TypographyP>
          <ProjectsLinks repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Technical Stack</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">Streamlit interactive dashboard with real-time data viz</li>
            <li className="font-mono">NASA POWER API integration for Earth observation data</li>
            <li className="font-mono">Probabilistic rainfall modeling with Python scientific stack</li>
            <li className="font-mono">Geospatial coordinate-based querying system</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "ieee-portal",
    category: "Web Platform",
    title: "IEEE MIU Portal",
    src: "/assets/projects-screenshots/ieee-portal/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.js, PROJECT_SKILLS.tailwind],
      backend: [PROJECT_SKILLS.php, PROJECT_SKILLS.mysql],
    },
    live: "",
    github: "https://github.com/karimcpp110/ieee-miu",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            A Complete University Portal — Reverse-Engineered & Rebuilt
          </TypographyP>
          <TypographyP className="font-mono">
            Built from scratch after reverse-engineering the Misr International
            University&apos;s official portal. Features a Learning Management
            System, automated grading pipeline, event management, and
            member dashboards. Serves the entire IEEE MIU student branch.
          </TypographyP>
          <ProjectsLinks repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Features</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">Full LMS with course management and automated grading</li>
            <li className="font-mono">Member dashboard with event registration and tracking</li>
            <li className="font-mono">Admin panel with analytics and content management</li>
            <li className="font-mono">Responsive design serving 100+ active members</li>
          </ul>
        </div>
      );
    },
  },
  {
    id: "gheitbot",
    category: "AI Farming Assistant",
    title: "GheitBot",
    src: "/assets/projects-screenshots/gheitbot/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.streamlit,
        PROJECT_SKILLS.python,
      ],
      backend: [
        PROJECT_SKILLS.python,
      ],
    },
    live: "",
    github: "https://github.com/karimcpp110/GheitBot",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            AI-Powered Precision Farming for Egypt
          </TypographyP>
          <TypographyP className="font-mono">
            GheitBot is an AI assistant tailored for Egyptian farmers, providing
            real-time agricultural intelligence. It integrates OpenWeather API,
            scrapes localized agricultural data, and uses ML-based models (Pandas)
            to provide crop recommendations and irrigation schedules via a
            premium Streamlit interface.
          </TypographyP>
          <ProjectsLinks repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Technical Stack</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">Streamlit + Pandas for data analysis and UI</li>
            <li className="font-mono">BeautifulSoup for localized web scraping</li>
            <li className="font-mono">Folium for geospatial mapping of farm health</li>
            <li className="font-mono">OpenWeather API integration for precise micro-climate alerts</li>
          </ul>
        </div>
      );
    },
  },
];
export default projects;
