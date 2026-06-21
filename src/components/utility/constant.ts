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

type WorkflowCard = {
  title: string;
  Icon: LucideIcon;
  bullets: string[];
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
