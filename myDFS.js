export const connData = [
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
    connections: [4, 2],
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

function findFriend(source) {
  let a = [];
  for (let i = 0; i < connData.length; i++) {
    if (connData[i].connections.includes(source)) {
      a.push(connData[i].id);
    }
  }
  return a;
}

function getMyConn(source, target, ans) {
  let friends = findFriend(source);
  if (source === target) {
    ans = [...ans, source];
    mySet.add(ans);
    return ans;
  }
  if (friends.length > 0 && !ans.includes(source)) {
    ans = [...ans, source];
    friends.forEach((item) => {
      getMyConn(item, target, ans);
    });
  }
}

let mySet = new Set([]);

let a = [];

console.log(getMyConn(1, 3, a));

console.log(mySet);
