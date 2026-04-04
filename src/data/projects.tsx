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
  problem?: string;
  solution?: string;
  shortDescription?: string;
  approach?: string;
  architectureDesc?: string;
  features?: string[];
  impact?: string;
};

const projects: Project[] = [
  {
    id: "talky",
    category: "Real-Time Systems",
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
    shortDescription: "High-performance messaging system built with React + C++ and WebSocket architecture.",
    problem: "Real-time messaging often suffers from latency, poor security, and scaling bottlenecks in custom implementations. Connecting C++ raw performance with modern web UIs is notoriously difficult.",
    solution: "Built a hybrid C++ backend with Socket.io for sub-millisecond routing and end-to-end encryption.",
    approach: "Instead of relying on standard NodeJS for everything, I deployed a C++ server strictly for WebSocket routing to guarantee sub-millisecond latency. I bridged this high-performance core to a premium React frontend using Socket.io to maintain a modern, smooth UX without sacrificing backend speed.",
    architectureDesc: "A modular microservices approach utilizing Docker. The core messaging engine runs on C++ while Node handles standard HTTP requests and REST authentication. State synchronization is managed real-time on the React frontend.",
    features: [
      "Sub-millisecond message routing via C++ WebSocket server",
      "End-to-end encryption with custom protocol",
      "Real-time state synchronization (typing, read receipts)",
      "Dockerized microservice deployment"
    ],
    impact: "Created a scalable, enterprise-grade messaging prototype capable of handling high concurrency with zero perceived latency on the frontend.",
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
    category: "AI Infrastructure",
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
    shortDescription: "Fully local AI agent with RAG, code execution, and multi-language runtime.",
    problem: "Cloud-based AI limits data privacy, requires expensive API subscriptions, and creates dangerous dependencies for enterprise codebase execution.",
    solution: "Developed a 100% local, subscription-free AI agent powered by Ollama and RAG, avoiding all external API constraints.",
    approach: "I wanted complete control over the AI environment. By deploying Ollama locally and writing a custom Python/Flask pipeline, I created a secure enclave where the model can execute code, fetch data, and perform RAG without any internet boundary issues.",
    architectureDesc: "The core engine runs Python scripts evaluating LLM output via local Ollama wrappers. A React frontend communicates seamlessly with the local Flask server serving the RAG-augmented responses.",
    features: [
      "Local LLM inference via Ollama (Zero cost, infinite privacy)",
      "Real-time web search integration via custom scraping pipeline",
      "Unfiltered, personality-driven custom prompt engineering",
      "Local code execution runtime for isolated script testing"
    ],
    impact: "Built a fully autonomous, cost-free intelligence tool that completely removes reliance on OpenAI and external constraints.",
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
    category: "Cybersecurity",
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
    shortDescription: "ML-powered SOC platform achieving 99% threat detection accuracy.",
    problem: "Security analysts are overwhelmed by high volumes of raw telemetry, leading to devastating response delays and manual triage fatigue.",
    solution: "Engineered an AI HUD with autonomous remediation that classifies threats and responds in real-time.",
    approach: "I applied an engineering mindset to defense operations by leveraging Machine Learning directly on packet telemetry. Instead of just visualizing attacks, the system actively uses Random Forest models to intercept, classify, and isolate threats autonomously.",
    architectureDesc: "Raw data feeds are continuously parsed and scored by a Python-based ML layer. Findings trigger autonomous containment protocols simulated via Docker, while the React/Tailwind HUD updates live state via WebSockets.",
    features: [
      "99% classification accuracy using Scikit-Learn Random Forest models",
      "Autonomous 'Hyper-Drive' mode for zero-touch threat remediation",
      "Real-time geographical tracking and network topology rendering",
      "Automated incident forensics reporting"
    ],
    impact: "Transformed passive security monitoring into an active containment ecosystem, drastically reducing assumed mean-time-to-respond (MTTR).",
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
    problem: "Event organizers lack localized, actionable environmental risk data from complex satellite datasets.",
    solution: "Transformed NASA POWER API data into a simple probability forecast for global coordinates.",
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
    category: "Full-Stack Systems",
    title: "IEEE MIU Portal",
    src: "/assets/projects-screenshots/ieee-portal/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.js, PROJECT_SKILLS.tailwind],
      backend: [PROJECT_SKILLS.php, PROJECT_SKILLS.mysql],
    },
    live: "",
    github: "https://github.com/karimcpp110/ieee-miu",
    shortDescription: "Rebuilt a university platform through reverse-engineered architecture and automation.",
    problem: "IEEE MIU branch operations were bottlenecked by manual grading, fragmented data across Excel sheets, and low member engagement. The official university portal was overly restrictive.",
    solution: "Automated grading and management for 100+ users, centralizing all branch operations in a familiar UI.",
    approach: "I reverse-engineered the authentication flow and UI/UX of the existing university system to ensure zero learning curve. I selected a custom PHP MVC-lite architecture to keep deployment inexpensive, fast, and highly reliable on minimal hardware.",
    architectureDesc: "A monolithic but clean PHP MVC backend handling SQL transactions mapped natively to a Vanilla CSS + JS frontend, ensuring rapid page loads and high compatibility.",
    features: [
      "Full LMS with course management and automated grading workflows",
      "Role-based Access Control (RBAC) covering 100+ active members",
      "Real-time analytics and attendance tracking via admin dashboard",
      "Seamless UI replication of the official MIU environment"
    ],
    impact: "Centralized all branch operations into a single platform currently supporting and tracking the lifecycle of over 100 active members efficiently.",
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
    github: "https://github.com/karimcpp110/GheitBot",
    problem: "Traditional farming in Egypt lacks real-time data on micro-climates and crop disease risk.",
    solution: "Developed an AI assistant integrating satellite weather and soil data for precision farming advice.",
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
