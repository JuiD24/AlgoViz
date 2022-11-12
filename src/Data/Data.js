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
      {
        heading: "BFS",
        path: "/learn/bfs",
        icon: UilBookOpen,
      },
      {
        heading: "DFS",
        path: "/learn/dfs",
        icon: UilBookOpen,
      },
      {
        heading: "Binary Search Tree",
        path: "/learn/bst",
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
    path: "/analytics",
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
    questionText:
      "What are the correct intermediate steps of the following data set when it is being sorted with the bubble sort?" +
      "\n" +
      "15,20,10,18",
    answerOptions: [
      {
        answerText: "15,10,20,18 -- 15,10,18,20 -- 10,15,18,20",
        isCorrect: true,
      },
      {
        answerText: "10, 20,15,18 -- 10,15,20,18 -- 10,15,18,20",
        isCorrect: false,
      },
      {
        answerText: "15,20,10,18 -- 15,10,20,18 -- 10,15,20,18 -- 10,15,18,20",
        isCorrect: false,
      },
      {
        answerText: "15,18,10,20 -- 10,18,15,20 -- 10,15,18,20 -- 10,15,18,20",
        isCorrect: false,
      },
    ],
  },
  {
    questionText:
      "Which one of the following is the first step in a selection sort algorithm?",
    answerOptions: [
      {
        answerText: "The minimum value in the list is found.",
        isCorrect: true,
      },
      {
        answerText: "The maximum value in the list is found.",
        isCorrect: false,
      },
      { answerText: "Adjacent elements are swapped.", isCorrect: false },
    ],
  },
  {
    questionText: "A merge sort",
    answerOptions: [
      {
        answerText: "Divides the unsorted array into 3 sublists of equal size",
        isCorrect: false,
      },
      {
        answerText: "Divides the unsorted array into 4 sublists of equal size",
        isCorrect: false,
      },
      {
        answerText: "Divides the unsorted array into 2 sublists of equal size",
        isCorrect: true,
      },
      {
        answerText: "Divides the unsorted array into 8 sublists of equal size",
        isCorrect: false,
      },
    ],
  },
  {
    questionText: "Which of the following is False about merge sort algorithm?",
    answerOptions: [
      { answerText: "It is a comparison sorting algorithm.", isCorrect: false },
      {
        answerText:
          "The unsorted array is divided into sublists, which are in turn divided into more sublists",
        isCorrect: true,
      },
      {
        answerText:
          "The unsorted array is divided into sublists, each sublist is then sorted recursively by re-applying the algorithm.",
        isCorrect: false,
      },
      { answerText: "All of the above statements are true", isCorrect: false },
    ],
  },

  {
    questionText:
      "The following two lists are to be merged, which element first goes into the new merged list? \n" +
      "List 1 --> " +
      "2 4 7 9 " +
      "\nList 2 --> " +
      "1 6 8 12 ",
    answerOptions: [
      { answerText: "9", isCorrect: false },
      {
        answerText: "1",
        isCorrect: true,
      },
      {
        answerText: "2",
        isCorrect: false,
      },
      { answerText: "4", isCorrect: false },
    ],
  },

  {
    questionText:
      "How many passes does an insertion sort algorithm consist of?",
    answerOptions: [
      { answerText: "N", isCorrect: false },
      {
        answerText: "N-1",
        isCorrect: true,
      },
      {
        answerText: "N+1",
        isCorrect: false,
      },
      { answerText: "N2", isCorrect: false },
    ],
  },

  {
    questionText:
      "What is the average case running time of an insertion sort algorithm?",
    answerOptions: [
      { answerText: "O(N)", isCorrect: false },
      {
        answerText: "O(N log N)",
        isCorrect: false,
      },
      {
        answerText: "O(log N)",
        isCorrect: false,
      },
      { answerText: "O(N2)", isCorrect: true },
    ],
  },

  {
    questionText:
      "Partition a list A[] into two non-empty parts. in left part the values should be:",
    answerOptions: [
      { answerText: "A [ ] <= pivot", isCorrect: true },
      {
        answerText: "A[] >= pivot",
        isCorrect: false,
      },
      {
        answerText: "A [ ] > pivot",
        isCorrect: false,
      },
      { answerText: "A [ ] < pivot", isCorrect: false },
    ],
  },

  {
    questionText: "The data structure used for Depth First Algorithm is",
    answerOptions: [
      { answerText: "Stack", isCorrect: true },
      {
        answerText: "Queue",
        isCorrect: false,
      },
      {
        answerText: "Both stack and queue",
        isCorrect: false,
      },
      { answerText: "None of these", isCorrect: false },
    ],
  },

  {
    questionText: "The data structure used for Breadth First Algorithm is",
    answerOptions: [
      { answerText: "Stack", isCorrect: false },
      {
        answerText: "Queue",
        isCorrect: true,
      },
      {
        answerText: "Both stack and queue",
        isCorrect: false,
      },
      { answerText: "None of these", isCorrect: false },
    ],
  },

  {
    questionText:
      "The following numbers are inserted into an empty binary search tree in the given order: 20,10, 1, 3, 5, 15, 12, 16,34,87,35. The height of the binary search tree, respectively, is.",
    answerOptions: [
      { answerText: "3", isCorrect: false },
      {
        answerText: "4",
        isCorrect: true,
      },
      {
        answerText: "8",
        isCorrect: false,
      },
      { answerText: "9", isCorrect: false },
    ],
  },

  {
    questionText:
      "If this tree is used for sorting, then new no 8 should be placed as the \n" +
      "               23\n" +
      "            /       \\\n" +
      "        11            27\n" +
      "     /     \\         /\n" +
      "   7         17    25\n" +
      " /  \\       /\n" +
      "6    9    14",
    answerOptions: [
      { answerText: "Left child of the node labeled 6", isCorrect: false },
      {
        answerText: "Left child of the node labeled 9",
        isCorrect: true,
      },
      {
        answerText: "Right child of the node labeled 14",
        isCorrect: false,
      },
      { answerText: "Right child of the node labeled 6", isCorrect: false },
    ],
  },

  {
    questionText:
      "In Bubble sort, How many passes/scans will go through a list of 10 elements?",
    answerOptions: [
      { answerText: "3", isCorrect: false },
      {
        answerText: "9",
        isCorrect: true,
      },
      {
        answerText: "5",
        isCorrect: false,
      },
      { answerText: "7", isCorrect: false },
    ],
  },

  {
    questionText:
      "Considering this Binary search tree, if you want to delete node 14 \n" +
      "               23\n" +
      "            /       \\\n" +
      "        11            27\n" +
      "     /     \\         /\n" +
      "   7         17    25\n" +
      " /  \\       /\n" +
      "6    9    14",
    answerOptions: [
      { answerText: "Delete node 17 first and move 14 up", isCorrect: false },
      {
        answerText: "simply delete node 14 as it is a leaf node",
        isCorrect: true,
      },
      {
        answerText:
          "find leftmost node of right subtree of node 14 and swap value and then delete 14",
        isCorrect: false,
      },
    ],
  },

  {
    questionText:
      "Considering this Binary search tree, if you want to delete node 11 \n" +
      "               23\n" +
      "            /       \\\n" +
      "        11            27\n" +
      "     /     \\         /\n" +
      "   7         17    25\n" +
      " /  \\       /\n" +
      "6    9    14",
    answerOptions: [
      { answerText: "Delete node 11 first and move 17 up", isCorrect: false },
      {
        answerText: "simply delete node 11 as it is a leaf node",
        isCorrect: false,
      },
      {
        answerText:
          "find leftmost node of right subtree of node 11 which is 14 and swap value (11 <--> 14) and then delete 11",
        isCorrect: true,
      },
    ],
  },
];
