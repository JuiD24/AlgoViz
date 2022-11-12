import "./App.css";
import MainDash from "./components/MainDash/MainDash";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Quiz1 from "./pages/Quiz/Quiz1";
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
import BFSLearning from "./pages/PathFindingLearning/BFSLearning";
import DFSLearning from "./pages/PathFindingLearning/DFSLearning";
import BSTLearning from "./pages/TreeLearning/BSTLearning";
import Quiz2 from "./pages/Quiz/Quiz2";
import Analytics from "./pages/Analytics";

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Router>
          <Sidebar>
            <Routes>
              <Route path="/AlgoViz" element={<MainDash />} />
              <Route path="/learn/bubble" element={<BubbleSortLearning />} />
              <Route path="/learn/merge" element={<MergeSortLearning />} />
              <Route
                path="/learn/selection"
                element={<SelectionSortLearning />}
              />
              <Route path="/learn/insert" element={<InsertionSortLearning />} />
              <Route path="/learn/quick" element={<QuickSortLearning />} />
              <Route path="/learn/bfs" element={<BFSLearning />} />
              <Route path="/learn/dfs" element={<DFSLearning />} />
              <Route path="/learn/bst" element={<BSTLearning />} />
              <Route path="/q1" element={<Quiz1 />} />
              <Route path="/q2" element={<Quiz2 />} />
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
              <Route path="/analytics" element={<Analytics />} />
            </Routes>
          </Sidebar>
        </Router>
      </div>
    </div>
  );
}

export default App;
