function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-C9F6iziu.js","assets/index-enHMMOzu.js","assets/index-DHPvGsrT.css","assets/index-xCxEB9OT.js","assets/index-1hZHYrAM.js","assets/index-J-8CyyX2.js","assets/index-CMEtZfuN.js","assets/index-C62F8zSc.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-enHMMOzu.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-C9F6iziu.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-xCxEB9OT.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-1hZHYrAM.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-J-8CyyX2.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-CMEtZfuN.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-C62F8zSc.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
