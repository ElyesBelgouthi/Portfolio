function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ParallaxMover-CRx0FMos.js","assets/index-B_IKb0RI.js","assets/index-VWvaGr7r.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-B_IKb0RI.js";async function l(a,r=!0){await a.addMover("parallax",async()=>{const{ParallaxMover:o}=await t(()=>import("./ParallaxMover-CRx0FMos.js"),__vite__mapDeps([0,1,2]));return new o},r)}export{l as loadParallaxMover};
