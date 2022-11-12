import React from "react";
import "./Learning.css";
var im = require("./bst1.png");
var im1 = require("./bst2.png");
var im2 = require("./bst3.png");
var im3 = require("./bst4.png");
var im4 = require("./bst5.png");
const BSTLearning = () => {
  return (
    <div className="array-container-learn">
      <h2>Binary Search Tree</h2>
      <p>
        Binary search tree is a data structure that quickly allows us to
        maintain a sorted list of numbers. Because each tree node has a maximum
        of two children, it is known as a binary tree. It is called a search
        tree because it can be used to search for the presence of a number in
        O(log(n)) time.
      </p>
      <div>
        <h3>How does BST Work?</h3>
        <p>Binary Search Tree has the following properties:</p>

        <li>All nodes of left subtree are less than the root node.</li>
        <li>All nodes of right subtree are more than the root node.</li>
        <li>
          Both subtrees of each node are also BSTs i.e. they have the above two
          properties.
        </li>

        <h4>Searching process</h4>
        <p>
          The algorithm depends on the property of BST that if each left subtree
          has values below root and each right subtree has values above the
          root.
        </p>

        <ul>
          <li>
            If the value is below the root, we can say for sure that the value
            is not in the right subtree; we need to only search in the left
            subtree
          </li>
          <li>
            If the value is above the root, we can say for sure that the value
            is not in the left subtree; we need to only search in the right
            subtree.
          </li>
        </ul>
        <img src={im} width="1000" height="300" />
        <p>Let us try to search 4 in above BST diagram.</p>
        <ul>
          <li>
            Begin with the head node. First, determine whether the value of the
            head node equals 4 or not. Head node value in this case is 8.
            Therefore, determine if 4 is greater than 8 or less than 8.
          </li>
          <li>4 is less than 8. So start looking in left sub tree.</li>
          <li>
            Head node of left subtree is 3 which is not equal to 4. Therefore,
            determine if 4 is greater than 3 or less than 3.
          </li>
          <li>4 is greater than 3. So start looking in right sub tree.</li>
          <li>
            Head node of right subtree is 6 which is not equal to 4. Therefore,
            determine if 4 is greater than 6 or less than 6.
          </li>
          <li>4 is less than 6. So start looking in left sub tree.</li>
          <li>Head node of left subtree is 4 and so we found 4.</li>
        </ul>

        <h4>Insertion process</h4>
        <p>
          Because we try to maintain the constraint that the left subtree is
          smaller than root and the right subtree is larger than root, inserting
          a value in the appropriate spot is similar to searching. Depending on
          the value, we continue moving to the right or left subtree, and when
          we get to a position where the left or right subtree is null, we
          insert the new node there.
        </p>
        <img src={im1} width="1200" height="300" />
        <p>Let's try to visualize how we add a number to an existing BST.</p>
        <li>4 &lt; 8 so, transverse through the left child of 8</li>
        <li>4 &gt; 3 so, transverse through the right child of 8</li>
        <li>4 &lt; 6 so, transverse through the left child of 6</li>
        <li>Here left subtree is null. So, Insert 4 as a left child of 6</li>

        <h4>Deletion process</h4>
        <p>
          There are three cases for deleting a node from a binary search tree.
        </p>
        <ul>
          <li>
            <p>
              If the node is a leaf node, simply delete the node from the tree.
              <img src={im2} height="300" />
            </p>
          </li>
          <li>
            <p>
              If the node to be deleted lies has a single child node, replace
              that node with its child node and remove the child node from its
              original position.
              <img src={im3} height="300" />
            </p>
          </li>
          <li>
            <p>
              If the node to be deleted has two children, get the inorder
              successor (leftmost node from right subtree) of that node. Replace
              the node with the inorder successor and remove the inorder
              successor from its original position.
              <img src={im4} height="300" />
            </p>
          </li>
        </ul>
        <h4>
          The time complexity is O(log(n)). Here, n is the number of nodes in
          the tree.
        </h4>
      </div>
    </div>
  );
};

export default BSTLearning;
