function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-BMrxI6QN.js","assets/index-QTuXbGxm.js","assets/index-DHPvGsrT.css","assets/index-BXQnF54z.js","assets/index-B0re0pC9.js","assets/index-D96fJWbm.js","assets/index-DS2nbpf-.js","assets/index-DynsfGTo.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-QTuXbGxm.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-BMrxI6QN.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-BXQnF54z.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-B0re0pC9.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-D96fJWbm.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-DS2nbpf-.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-DynsfGTo.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
