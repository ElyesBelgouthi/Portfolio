function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/BaseMover-DGe3aJB1.js","assets/index-B_IKb0RI.js","assets/index-VWvaGr7r.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-B_IKb0RI.js";async function _(a,e=!0){await a.addMover("base",async()=>{const{BaseMover:o}=await r(()=>import("./BaseMover-DGe3aJB1.js"),__vite__mapDeps([0,1,2]));return new o},e)}export{_ as loadBaseMover};
