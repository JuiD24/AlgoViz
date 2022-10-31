// Sidebar imports
import {
  UilEstate,
  UilBookOpen,
  UilQuestionCircle,
  UilPlayCircle,
  UilChart,
  // UilSignOutAlt,
} from "@iconscout/react-unicons";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
    path: "/",
  },
  {
    icon: UilBookOpen,
    heading: "  Learning     ",
    path: "/learn",
    subMenu: [
      {
        heading: "Bubble Sort",
        path: "/learn/bubble",
        icon: UilBookOpen,
      },
      {
        heading: "Merge Sort",
        path: "/learn/merge",
        icon: UilBookOpen,
      },
      {
        heading: "Selection Sort",
        path: "/learn/selection",
        icon: UilBookOpen,
      },
      {
        heading: "Insertion Sort",
        path: "/learn/insert",
        icon: UilBookOpen,
      },
      {
        heading: "Quick Sort",
        path: "/learn/quick",
        icon: UilBookOpen,
      },
    ],
  },
  {
    icon: UilQuestionCircle,
    heading: "Quiz 1",
    path: "/q1",
  },
  {
    icon: UilPlayCircle,
    heading: "Visualisation",
    path: "/h",
    subMenu: [
      {
        heading: "Bubble Sort",
        path: "/visualiser/bubble",
        icon: UilBookOpen,
      },
      {
        heading: "Merge Sort",
        path: "/visualiser/merge",
        icon: UilBookOpen,
      },
      {
        heading: "Selection Sort",
        path: "/visualiser/selection",
        icon: UilBookOpen,
      },
      {
        heading: "Insertion Sort",
        path: "/visualiser/insertion",
        icon: UilBookOpen,
      },
      {
        heading: "Quick Sort",
        path: "/visualiser/quick",
        icon: UilBookOpen,
      },
      {
        heading: "DFS/BFS",
        path: "/visualiser/dijkstra",
        icon: UilBookOpen,
      },
      {
        heading: "Binary Search Tree",
        path: "/visualiser/bst",
        icon: UilBookOpen,
      },
    ],
  },
  {
    icon: UilQuestionCircle,
    heading: "Quiz 2",
    path: "/q2",
  },
  {
    icon: UilChart,
    heading: "Analytics",
    path: "/a",
  },
];

// Progress Cards Data
export const cardsData = [
  {
    title: "Learning",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    png: UilBookOpen,
  },
  {
    title: "Quiz 1",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    png: UilQuestionCircle,
  },
  {
    title: "Visualisation",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    png: UilPlayCircle,
  },
  {
    title: "Quiz 2",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 60,
    png: UilQuestionCircle,
  },
];

export const questions = [
  {
    questionText: "What is the capital of France?",
    answerOptions: [
      { answerText: "New York", isCorrect: false },
      { answerText: "London", isCorrect: false },
      { answerText: "Paris", isCorrect: true },
      { answerText: "Dublin", isCorrect: false },
    ],
  },
  {
    questionText: "Who is CEO of Tesla?",
    answerOptions: [
      { answerText: "Jeff Bezos", isCorrect: false },
      { answerText: "Elon Musk", isCorrect: true },
      { answerText: "Bill Gates", isCorrect: false },
      { answerText: "Tony Stark", isCorrect: false },
    ],
  },
  {
    questionText: "The iPhone was created by which company?",
    answerOptions: [
      { answerText: "Apple", isCorrect: true },
      { answerText: "Intel", isCorrect: false },
      { answerText: "Amazon", isCorrect: false },
      { answerText: "Microsoft", isCorrect: false },
    ],
  },
  {
    questionText: "How many Harry Potter books are there?",
    answerOptions: [
      { answerText: "1", isCorrect: false },
      { answerText: "4", isCorrect: false },
      { answerText: "6", isCorrect: false },
      { answerText: "7", isCorrect: true },
    ],
  },
];
