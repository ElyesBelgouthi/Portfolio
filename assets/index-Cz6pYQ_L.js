function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/SizeUpdater-DK1shZ2G.js","assets/index-rxDoIKok.js","assets/index-DT2Iu4Yo.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-rxDoIKok.js";async function o(t,a=!0){await t.addParticleUpdater("size",async()=>{const{SizeUpdater:e}=await r(()=>import("./SizeUpdater-DK1shZ2G.js"),__vite__mapDeps([0,1,2]));return new e},a)}export{o as loadSizeUpdater};
