const connData = [
  {
    id: 1,
    name: "sameer",
    connections: [],
  },
  {
    id: 2,
    name: "ayushi",
    connections: [1],
  },
  {
    id: 3,
    name: "bhaskar",
    connections: [2, 4],
  },
  {
    id: 4,
    name: "shanti",
    connections: [5],
  },
  {
    id: 5,
    name: "kamalnath",
    connections: [1],
  },
];

const adjList = {
  sameer: [],
  ayushi: ["sameer"],
  bhaskar: ["ayushi", "shanti"],
  shanti: ["kamalnath"],
  kamalnath: ["sameer"],
};

// function myDfs(a, b, ans) {
//  for (let i = 0; i < connData.length; i++) {
//     if(a==b){
//         console.log(a,b,ans);
//         return ans
//     }else if(connData[i].connections.includes(a)){
//         ans = [...ans,a]
//         myDfs(connData[i].id,b,ans)
//     }
//  }
// }

// let newAns = [];

// console.log(myDfs(1, 3, newAns));

function breadthFirstSearch(queue = [], visited = {}, parent = {}) {
  console.log("visited", visited, "parent", parent);
  const current = queue.shift();

  for (let vertex in adjList) {
    if (adjList[vertex].includes(current)) {
      parent[vertex] = current;
      visited[vertex] = true;
      queue.push(vertex);
    }
  }
  // adjList[current].forEach((vertex) => {
  //   console.log("this is verted",vertex);
  //   if (!visited[vertex]) {
  //     parent[vertex] = current;
  //     visited[vertex] = true;
  //     queue.push(vertex);
  //   }
  // });
}

function getIntersection(visitedFromSource, visitedFromTarget) {
  for (let vertex in adjList) {
    if (visitedFromSource[vertex] && visitedFromTarget[vertex]) {
      return vertex;
    }
  }
}

function getPath(
  parentFromSource,
  parentFromTarget,
  source,
  target,
  intersection
) {
  let path = [intersection];

  let current = intersection;

  while (current !== source) {
    path.push(parentFromSource[current]);
    current = parentFromSource[current];
  }

  path = path.reverse();

  current = intersection;

  while (current !== target) {
    path.push(parentFromTarget[current]);
    current = parentFromTarget[current];
  }

  return path;
}

function bidirectionalSearch(source, target) {
  const visitedFromSource = {};
  const visitedFromTarget = {};

  const parentFromSource = {};
  const parentFromTarget = {};

  const sourceQueue = [];
  const targetQueue = [];

  sourceQueue.push(source);
  visitedFromSource[source] = true;

  targetQueue.push(target);
  visitedFromTarget[target] = true;

  while (sourceQueue.length && targetQueue.length) {
    breadthFirstSearch(sourceQueue, visitedFromSource, parentFromSource);
    breadthFirstSearch(targetQueue, visitedFromTarget, parentFromTarget);

    console.log("target",visitedFromTarget);
    console.log("visitedFromSource",visitedFromSource);

    const intersection = getIntersection(visitedFromSource, visitedFromTarget);

    // console.log("intersection",intersection);

    // if (intersection) {
    //   return getPath(
    //     parentFromSource,
    //     parentFromTarget,
    //     source,
    //     target,
    //     intersection
    //   );
    // }
  }
}

console.log(bidirectionalSearch("sameer", "bhaskar"));
