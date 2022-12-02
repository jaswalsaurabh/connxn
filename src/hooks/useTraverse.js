import { useEffect, useState } from "react";
import { connData } from "../data/connectionData";

const useTraverse = () => {
  const [users, setUsers] = useState(connData);
  const [userObj, setUserObj] = useState({});
  const [myConnxn, setMyConnxn] = useState(new Set([]));

  function parseIntoObj() {
    let temp = {};
    users.forEach((item) => {
      temp[item.id] = item.name;
    });
    setUserObj({ ...temp });
  }

  useEffect(() => {
    parseIntoObj();
  }, [users]);

  function addUser(tree, value) {
    if (tree.length > 0) {
      tree.unshift({
        id: new Date().getTime(),
        name: value,
        connections: [],
      });
      setUsers([...tree]);
      return tree;
    } else {
      tree = [
        {
          id: new Date().getTime(),
          name: value,
          connections: [],
        },
      ];
      setUsers(tree);
      return tree;
    }
  }

  function handleConnection(tree, source, target) {
    tree.forEach((item) => {
      if (item.id === target) {
        if (!item.connections.includes(source)) {
          item.connections.push(source);
        }
      }
    });

    setUsers([...tree]);
    return tree;
  }

  function findFriend(source) {
    let a = [];
    for (let i = 0; i < users.length; i++) {
      if (users[i].connections.includes(source)) {
        a.push(users[i].id);
      }
    }
    return a;
  }

  function getConxn(source, target, arr, set) {
    let friends = findFriend(source);
    if (source === target) {
      arr = [...arr, source];
      setMyConnxn(set.add(arr));
      return arr;
    }
    if (friends.length > 0 && !arr.includes(source)) {
      arr = [...arr, source];

      friends.forEach((item) => {
        getConxn(item, target, arr, set);
      });
    }
  }

  return { addUser, handleConnection, getConxn, myConnxn, users, userObj };
};

export default useTraverse;
