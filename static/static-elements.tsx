import {
  gpack_service_1,
  gpack_service_2,
  gpack_service_3,
  gpack_service_4,
  gpack_service_5,
  gpack_service_6,
} from "@/public/assets/service";
import {
  FaCubes,
  FaRegLightbulb,
  FaBalanceScale,
  FaChartBar,
  FaChalkboardTeacher,
  FaShieldAlt,
} from "react-icons/fa";

type TeamMember = {
  name: string;
  title: string;
  role: string;
  fields: string[];
  image: string;
};

export const services = [
  {
    title: "Diagnostic Assessments",
    description:
      "Diagnostic assessments of laws, policies and strategic plans and organizations meant to deliver them in parliamentary democracies.",
    icon: gpack_service_1,
  },
  {
    title: "Programme Design Studies/Sectoral Studies",
    description:
      "Programme design work compatible with organizational capabilities and context and matches with resources with a fair chance of success.",
    icon: gpack_service_2,
  },
  {
    title: "Democratic Strengthening",
    description:
      "Former team of Democracy Reporting International leads on assessments of legal framework, laws, engaging with parliamentary committees, Ministers and their teams, Political Parties.",
    icon: gpack_service_3,
  },
  {
    title: "Programme Evaluations",
    description:
      "Experts with global experience of conducting large scale evaluations of social development programs offering both rapid and detailed evaluation services.",
    icon: gpack_service_4,
  },
  {
    title: "Mentoring and Executive Coaching",
    description:
      "One to one and team coaching and leadership development programmes to help organization deliver better while committing to excellence and empathy.",
    icon: gpack_service_5,
  },
  {
    title: "Human Rights/GESI/ Safeguarding Services",
    description:
      "Support services to assess and implement affirmative action and protection safeguards inside policies, programmes and organizations with an elaborate focus on safeguarding.",
    icon: gpack_service_6,
  },
];
export const team: TeamMember[] = [
  {
    name: "Dr Javed Ahmed Malik",
    title: "Senior Fellow",
    role: "Policy Effectiveness",
    fields: [
      "Education System Reforms",
      "Social Policy Effectiveness",
      "Governance",
    ],
    image: "https://i.postimg.cc/8z4VLPRg/Placeholder.png",
  },
  {
    name: "Akif Sattar",
    title: "Fellow",
    role: "Parliamentary Strengthening",
    fields: ["Programme Management", "Senior Stakeholders’ Management"],
    image: "https://i.postimg.cc/HnwNHB31/Placeholder-1.png",
  },
  {
    name: "Ambreen Shabir",
    title: "",
    role: "Quantitative & Qualitative Researcher",
    fields: ["Water Rights Conflicts"],
    image: "https://i.postimg.cc/dtFXncts/Placeholder-2.png",
  },
  {
    name: "Mohammed Rafiq",
    title: "Fellow",
    role: "",
    fields: [
      "National Human Rights Institutions",
      "GPS+",
      "Human Rights Trainings",
    ],
    image: "https://i.postimg.cc/9QFk5P7s/Placeholder-3.png",
  },
  {
    name: "Sardar Shafiq",
    title: "Fellow",
    role: "",
    fields: [
      "Humanitarian Preparedness & Reforms",
      "Fragile/Conflict Affected Regions",
    ],
    image: "https://i.postimg.cc/HkZhpJ0n/Placeholder-4.png",
  },
];

export const publications = [
  {
    category: "Books",
    items: [
      {
        title: "Teachers, Bureaucrats & Politicians",
        author: "Malik, Javed Ahmed (2021)",
        description: "The success story of reforming 54000 schools in Punjab.",
        publisher: "Book Corner, Pakistan",
        coverLabel: "BOOK",
        image: "https://i.postimg.cc/6qMjWDX8/image.png",
      },
      {
        title: "Transforming Village",
        author: "Malik, Javed Ahmed (2018)",
        description:
          "How we schooled our poor and what can be done to change their lives at a rapid pace.",
        notes: "Publishing options being discussed.",
        coverLabel: "BOOK",
        image: "https://i.postimg.cc/6qMjWDX8/image.png",
      },
    ],
  },
  {
    category: "Book Chapters",
    items: [
      {
        title: "Book Chapter (2023)",
        description:
          "Sustainable Local Governments and Public Service Delivery, Sustainable Development Policy Institute (SDPI)",
        publisher: "Sustainable Development Policy Institute (SDPI)",
        coverLabel: "BOOK CHAPTERS",
        image: "https://i.postimg.cc/QxVSgYDq/image-1.png",
      },
      {
        title: "Book Chapter",
        description:
          "Project Management in conflict situations in Managing Development in Developing Countries Oxford University Press (2005)",
        publisher: "Oxford University Press (2005)",
        coverLabel: "BOOK CHAPTERS",
        image: "https://i.postimg.cc/QxVSgYDq/image-1.png",
      },
    ],
  },
  {
    category: "Consulting Assignments",
    items: [
      {
        title: "Beneficiary Assessment Survey",
        description:
          "Govt of Punjab-Gender Responsive Budgeting Initiative, UNDP, Lahore.",
        coverLabel: "CONSULTING ASSIGNMENTS",
        image: "https://i.postimg.cc/26z712Th/image-2.png",
      },
    ],
  },
];
