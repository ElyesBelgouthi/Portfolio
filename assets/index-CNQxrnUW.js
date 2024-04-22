function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-ocQf7ink.js","assets/index-DpYboewn.js","assets/index-DT2Iu4Yo.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-DpYboewn.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-ocQf7ink.js"),__vite__mapDeps([0,1,2]));await a.addShape("star",new r,t)}export{_ as loadStarShape};
