import React from "react";
import { BinarySearchTree } from "./BinarySearchTree";
import "./binary.css";
import "treeflex/dist/css/treeflex.css";
const bst = new BinarySearchTree();

function Tree(props) {
  const { data, parent } = props;

  function renderTree(node) {
    return Object.entries(node).map(function ([key, value]) {
      console.log(key, value);
      if (key === "left" && typeof value === "object") {
        if (value !== null) {
          return (
            <li key={value.data}>
              <Tree data={value} />
            </li>
          );
        }
        if (value === null) {
          return null;
        }
      } else if (key === "right" && typeof value === "object") {
        if (value !== null) {
          return (
            <li key={value.data}>
              <Tree data={value} />
            </li>
          );
        }
        if (value === null) {
          return null;
        }
      }
    });
  }

  return parent !== null ? (
    <>
      <span className="tf-nc">{data.data}</span>
      <ul>{renderTree(data)}</ul>
    </>
  ) : (
    "EMPTY"
  );
}

function BinarySearchTreeVisualiser() {
  const [number, setNumber] = React.useState();
  const [root, setRoot] = React.useState(null);

  React.useEffect(() => {
    setRoot((prev) => ({ ...prev, ...bst.root }));
  }, []);

  function changeNumber(e) {
    setNumber(Number(e.target.value));
  }

  function addNumber(e) {
    e.preventDefault();
    bst.add(number);
    setRoot((prev) => ({ ...prev, ...bst.root }));
    setNumber("");
    e.target.reset();
  }

  function removeNumber(e) {
    e.preventDefault();
    bst.remove(number);
    setRoot((prev) => ({ ...prev, ...bst.root }));
    // setRoot(bst.root);
    setNumber("");
    e.target.reset();
    console.log(bst.root);
  }

  function findMax() {
    alert(`Max value is ${bst.findMax()}`);
  }

  function findMin() {
    alert(`Mim value is ${bst.findMin()}`);
  }

  return (
    <div className="container">
      <h1 style={{ width: "1000px" }}>Binary Search Tree Visualization</h1>
      <form onSubmit={addNumber} className="form-control">
        <input
          type="number"
          min="1"
          name="add"
          onChange={changeNumber}
          required
        />
        <button type="submit" className="input-button">
          Add
        </button>
        <button type="button" onClick={findMax} className="find-max-button">
          Find Max
        </button>
      </form>
      <form onSubmit={removeNumber} className="form-control">
        <input
          type="number"
          min="1"
          name="remove"
          onChange={changeNumber}
          required
        />
        <button type="submit" className="input-button">
          Remove
        </button>
        <button type="button" onClick={findMin} className="find-min-button">
          Find Min
        </button>
      </form>
      <div className="tf-tree tf-custom">
        <ul>
          <li>
            <Tree data={root} parent={bst.root} />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default BinarySearchTreeVisualiser;
