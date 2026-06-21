import type { LucideIcon } from "lucide-react";
import {
  Accessibility,
  Bot,
  ChartColumnBig,
  Brain,
  FileText,
  Frame,
  HeartPulse,
  ImagePlay,
  IdCard,
  Layers3,
  LayoutGrid,
  MessageSquareCode,
  Monitor,
  MoveRight,
  PenTool,
  Route,
  Search,
  Sparkles,
  TabletSmartphone,
  Target,
  UserRoundCheck,
  Video,
  WandSparkles,
  Workflow,
  Zap,
} from "lucide-react";

type SkillItem = {
  label: string;
  Icon: LucideIcon;
};


type SkillGroup = {
  title: string;
  items: SkillItem[];
};



export const skillGroups: SkillGroup[] = [
  {
    title: "INDUSTRY/ DOMAIN EXPERTISE",
    items: [
      { label: "Pharmaceuticals (Pharma)", Icon: HeartPulse },
      { label: "Digital Healthcare", Icon: HeartPulse },
      { label: "Quick Service Restaurants (QSR)", Icon: Monitor },
      { label: "Generative AI", Icon: Sparkles },
      { label: "Data Science", Icon: ChartColumnBig },
      { label: "CRM systems", Icon: MessageSquareCode },
      { label: "Ride-Sharing Platforms", Icon: MoveRight },
      { label: "Social Media Platforms", Icon: Layers3 },
      { label: "Web/ Mobile User Interface", Icon: TabletSmartphone },
      { label: "Booth/KIOSK User Interface", Icon: LayoutGrid },
      { label: "Logo Design", Icon: PenTool },
      { label: "Video Editing", Icon: Video },
    ],
  },
  {
    title: "CORE UX SKILL",
    items: [
      { label: "Product Strategy", Icon: Target },
      { label: "End-to-End Product Design", Icon: Frame },
      { label: "Enterprise UX Design", Icon: Workflow },
      { label: "Interaction Design", Icon: MoveRight },
      { label: "Information Architecture", Icon: IdCard },
      { label: "User Journey Mapping", Icon: Route },
      { label: "Wireframing & Prototyping", Icon: PenTool },
      { label: "Design Systems", Icon: Layers3 },
      { label: "Accessibility", Icon: Accessibility },
      { label: "Usability Testing & Optimization", Icon: Search },
      { label: "Adoption-Focused UX", Icon: UserRoundCheck },
      { label: "UX Writing", Icon: FileText },
      { label: "AI-Driven Product Design", Icon: WandSparkles },
      { label: "Data Visualization Dashboard Design", Icon: ChartColumnBig },
    ],
  },
  {
    title: "DESIGN TOOLS",
    items: [
      { label: "Figma", Icon: PenTool },
      { label: "Framer", Icon: Frame },
      { label: "Adobe XD", Icon: PenTool },
      { label: "Adobe Illustrator", Icon: ImagePlay },
      { label: "Adobe After Effects", Icon: Video },
      { label: "Canva", Icon: Sparkles },
      { label: "Rive", Icon: Zap },
    ],
  },
];

type WorkflowCard = {
  title: string;
  Icon: LucideIcon;
  bullets: string[];
};


export const workflowCards: WorkflowCard[] = [
  {
    title: "Chatgpt",
    Icon: Bot,
    bullets: [
      "Research & Discovery",
      "Product Thinking",
      "UX Writing",
      "Information Architecture",
      "Documentation",
    ],
  },
  {
    title: "Claude",
    Icon: Brain,
    bullets: [
      "Research & Discovery",
      "Product Thinking",
      "UX Writing",
      "Information Architecture",
      "Quick Prototyping",
      "Accessibility Evaluation",
      "Usability Testing Strategies",
      "Strategy/Planning Decks",
    ],
  },
  {
    title: "Grok",
    Icon: Sparkles,
    bullets: ["Social Sentiment Analysis", "Image Generation"],
  },
  {
    title: "Figma Make",
    Icon: Frame,
    bullets: ["Quick Prototyping"],
  },
  {
    title: "Lovable",
    Icon: HeartPulse,
    bullets: ["Quick Prototyping"],
  },
];


type TProjectDataList = {
  id: string;
  heading: string;
  subheading: string;
  link: string;
  imgUrl: string;
  date?: string;
}

export const projectDataList: TProjectDataList[] = [
  {
    id: "101",
    heading: "The Donut Model of Design",
    subheading: "A product & UX framework evolution case study",
    imgUrl: "/project/project1.webp",
    link: "https://www.behance.net/gallery/249802837/The-Donut-Model-Of-Design",
  },
  {
    id: "102",
    heading: "GenPLS",
    subheading: "A fortune 500 pharma product case study",
    imgUrl: "/project/project2.webp",
    link: "https://www.behance.net/gallery/241506375/GenPLS-UIUX-Case-Study",
  },
  {
    id: "103",
    heading: "Cluster Profiler AI",
    subheading: "A B2B data segmentation product case study",
    imgUrl: "/project/project3.webp",
    link: "https://www.behance.net/gallery/239588767/Cluster-Profiler-AI-UX-Case-Study",
  },
  {
    id: "104",
    heading: "Drive Assist - User Side Application",
    subheading: "A B2C ride-sharing platform case study",
    imgUrl: "/project/project4.webp",
    link: "https://www.behance.net/gallery/183227549/Drive-Assist-(User-Side)",
  },
  {
    id: "105",
    heading: "Drive Assist - Driver Side Application",
    subheading: "A B2C ride-sharing platform case study",
    imgUrl: "/project/project5.webp",
    link: "https://www.behance.net/gallery/183483747/Drive-Assist-(Driver-Side-Application)",
  },
  {
    id: "106",
    heading: "Drive Assist - Admin Side Application",
    subheading: "A B2C ride-sharing platform case study",
    imgUrl: "/project/project6.webp",
    link: "https://www.behance.net/gallery/183484397/Drive-Assist-(Admin-Side-Web-App)",
  },
  {
    id: "107",
    heading: "Smart Care - Doctor End Application",
    subheading: "A B2C digital health-care web-platform UI redesign case study",
    imgUrl: "/project/project7.webp",
    link: "https://www.behance.net/gallery/163425911/Smart-Care-Doctor-App-UX-Case-Study",
  },
  {
    id: "108",
    heading: "Smart Care - Patient End Application",
    subheading: "A B2C digital health-care mobile application UI showcase",
    imgUrl: "/project/project8.webp",
    link: "https://www.behance.net/gallery/162851725/Smart-Care-Mobile-App-UI-Show-Case",
  },
  {
    id: "109",
    heading: "Medimytra",
    subheading: "A healthcare price comparison & discovery platform logo design & UI showcase.",
    imgUrl: "/project/project9.webp",
    link: "https://www.behance.net/gallery/184071285/Medimytra-Logo-Design-And-UI-Show-Case",
  },
  {
    id: "110",
    heading: "HealthOMax",
    subheading: "A healthcare social media platform UI showcase.",
    imgUrl: "/project/project10.webp",
    link: "https://www.behance.net/gallery/184106203/HealthOMax-UI-Show-Case",
  },
  {
    id: "111",
    heading: "Pinco - Rebranding",
    subheading: "Interview preparation platform logo redesign/ brand identity guidelines.",
    imgUrl: "/project/project11.webp",
    link: "https://www.figma.com/deck/NKQ7No7Et9rRcwMohlV6Om/Pinco-Brand-Guidelines-2024?node-id=2005-375&t=smRixoETpMuOUPkc-1",
    date: "Jul - 2024 ",
  },
  {
    id: "112",
    heading: "Pinco - Interview Preparation Platform",
    subheading: "Mobile app redesign case study",
    imgUrl: "/project/project12.webp",
    link: "https://www.behance.net/gallery/183532633/Pinco-Interview-Preparation-App",
    date: "May - 2023 ",
  },
  {
    id: "113",
    heading: "Sport Spirit",
    subheading: "Sports community platform logo redesign & UI showcase",
    imgUrl: "/project/project13.webp",
    link: "https://www.behance.net/gallery/143891555/Sport-Spirit-Logo-Design",
    date: "Apr 2022",
  },
  {
    id: "114",
    heading: "Cyber Cell",
    subheading: "Logo design for a cyber security college club",
    imgUrl: "/project/project14.webp",
    link: "https://www.behance.net/gallery/143887319/Cyber-Cell-Logo-Design",
    date: "Jan 2022",
  },
  {
    id: "115",
    heading: "Sabpay",
    subheading: "Quick commerce application UI/UX case study",
    imgUrl: "/project/project15.webp",
    link: "https://www.behance.net/gallery/142864847/SabPay",
    date: "Oct 2020 - Aug 2021",
  },

]
