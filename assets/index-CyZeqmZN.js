function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-Dzf59tXy.js","assets/index-B_IKb0RI.js","assets/index-VWvaGr7r.css","assets/index-DnjAocZJ.js","assets/index-D49jjd7-.js","assets/index-BdtKSol8.js","assets/index-BoKfYEP2.js","assets/index-DIed-e06.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-B_IKb0RI.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-Dzf59tXy.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-DnjAocZJ.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-D49jjd7-.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-BdtKSol8.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-BoKfYEP2.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-DIed-e06.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
