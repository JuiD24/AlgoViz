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
              <Route
                path="/AlgoViz/learn/bubble"
                element={<BubbleSortLearning />}
              />
              <Route
                path="/AlgoViz/learn/merge"
                element={<MergeSortLearning />}
              />
              <Route
                path="/AlgoViz/learn/selection"
                element={<SelectionSortLearning />}
              />
              <Route
                path="/AlgoViz/learn/insert"
                element={<InsertionSortLearning />}
              />
              <Route
                path="/AlgoViz/learn/quick"
                element={<QuickSortLearning />}
              />
              <Route path="/AlgoViz/learn/bfs" element={<BFSLearning />} />
              <Route path="/AlgoViz/learn/dfs" element={<DFSLearning />} />
              <Route path="/AlgoViz/learn/bst" element={<BSTLearning />} />
              <Route path="/AlgoViz/q1" element={<Quiz1 />} />
              <Route path="/AlgoViz/q2" element={<Quiz2 />} />
              <Route
                path="/AlgoViz/visualiser/merge"
                element={<MergeSortingVisualiser />}
              />
              <Route
                path="/AlgoViz/visualiser/bubble"
                element={<BubbleSortingVisualiser />}
              />
              <Route
                path="/AlgoViz/visualiser/selection"
                element={<SelectionSortingVisualiser />}
              />
              <Route
                path="/AlgoViz/visualiser/insertion"
                element={<InsertionSortingVisualiser />}
              />
              <Route
                path="/AlgoViz/visualiser/quick"
                element={<QuickSortingVisualiser />}
              />
              <Route
                path="/AlgoViz/visualiser/dijkstra"
                element={<PathfindingVisualizer />}
              />
              <Route
                path="/AlgoViz/visualiser/bst"
                element={<BinarySearchTreeVisualiser />}
              />
              <Route path="/AlgoViz/analytics" element={<Analytics />} />
            </Routes>
          </Sidebar>
        </Router>
      </div>
    </div>
  );
}

export default App;
