function buildTree(treeNodes) {
  const obj = {}
  const root = treeNodes[0];
  for (let i = 1; i < treeNodes.length; i++) {
     findParent(treeNodes, treeNodes[i].parent)[treeNodes[i].id] = treeNodes[i];
  }
  obj[root.id] = root
  return obj;
}
function findParent(treeNodes, parent) {
   for(let i = 0; i < treeNodes.length; i++){
       if(treeNodes[i].id === parent) return treeNodes[i]
   }
}

console.log(buildTree([
  { parent: null, id: 0 },
  { parent: 0, id: 1 },
  { parent: 0, id: 2 },
  { parent: 1, id: 3 },
  { parent: 1, id: 4 },
  { parent: 2, id: 5 },
  { parent: 4, id: 6 },
]))
