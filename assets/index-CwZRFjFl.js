function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/SizeUpdater-B2GwRsMk.js","assets/index-DpYboewn.js","assets/index-DT2Iu4Yo.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-DpYboewn.js";async function o(t,a=!0){await t.addParticleUpdater("size",async()=>{const{SizeUpdater:e}=await r(()=>import("./SizeUpdater-B2GwRsMk.js"),__vite__mapDeps([0,1,2]));return new e},a)}export{o as loadSizeUpdater};
