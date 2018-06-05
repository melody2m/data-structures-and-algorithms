'use strict';

function leftJoin(map1, map2) {
  const solution = {};
  Object.entries(map1).forEach(([key, value]) => {
    if (map2[key]) { 
      solution[key] = `${value} ${map2[key]}`;
    } else { solution[key] = `${value} null` };
  });
  return solution;
}

export default leftJoin;
