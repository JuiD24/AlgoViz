import "./App.css";
import MainDash from "./components/MainDash/MainDash";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Quiz from "./pages/Quiz";
import MergeSortingVisualiser from "./pages/SortingVisualiser/MergeSortingVisualiser/MergeSortingVisualiser";
import BubbleSortingVisualiser from "./pages/SortingVisualiser/BubbleSortingVisualiser/BubbleSortingVisualiser";
import SelectionSortingVisualiser from "./pages/SortingVisualiser/SelectionSortingVisualiser/SelectionSortingVisualiser";
import InsertionSortingVisualiser from "./pages/SortingVisualiser/InsertionSortingVisualiser/InsertionSortingVisualiser";
import QuickSortingVisualiser from "./pages/SortingVisualiser/QuickSortingVisualiser/QuickSortingVisualiser";
import PathfindingVisualizer from "./pages/PathFindingVisualiser/PathfindingVisualizer";
import BubbleSortLearning from "./pages/SortingLearning/BubbleSortLearning/BubbleSortLearning";
import MergeSortLearning from "./pages/SortingLearning/MergeSortLearning/MergeSortLearning";
import SelectionSortLearning from "./pages/SortingLearning/SelectionSortLearning/SelectionSortLearning";
import InsertionSortLearning from "./pages/SortingLearning/InsertionSortLearning/InsertionSortLearning";
import BinarySearchTreeVisualiser, {
  BinarySearchTree,
} from "./pages/BinaryTreeVisualiser/BinarySearchTreeVisualiser/BinarySearchTreeVisualiser";
import QuickSortLearning from "./pages/SortingLearning/QuickSortLearning/QuickSortLearning";

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Router>
          <Sidebar>
            <Routes>
              <Route path="/" element={<MainDash />} />
              <Route path="/learn/bubble" element={<BubbleSortLearning />} />
              <Route path="/learn/merge" element={<MergeSortLearning />} />
              <Route
                path="/learn/selection"
                element={<SelectionSortLearning />}
              />
              <Route path="/learn/insert" element={<InsertionSortLearning />} />
              <Route path="/learn/quick" element={<QuickSortLearning />} />
              <Route path="/q1" element={<Quiz />} />
              <Route
                path="/visualiser/merge"
                element={<MergeSortingVisualiser />}
              />
              <Route
                path="/visualiser/bubble"
                element={<BubbleSortingVisualiser />}
              />
              <Route
                path="/visualiser/selection"
                element={<SelectionSortingVisualiser />}
              />
              <Route
                path="/visualiser/insertion"
                element={<InsertionSortingVisualiser />}
              />
              <Route
                path="/visualiser/quick"
                element={<QuickSortingVisualiser />}
              />
              <Route
                path="/visualiser/dijkstra"
                element={<PathfindingVisualizer />}
              />
              <Route
                path="/visualiser/bst"
                element={<BinarySearchTreeVisualiser />}
              />
            </Routes>
          </Sidebar>
        </Router>
      </div>
    </div>
  );
}

export default App;
