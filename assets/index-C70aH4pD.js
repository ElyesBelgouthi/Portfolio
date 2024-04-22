function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-D56PyvA6.js","assets/index-DpYboewn.js","assets/index-DT2Iu4Yo.css","assets/index-DtiwoO3W.js","assets/index-DPC3qfie.js","assets/index-BViHElii.js","assets/index-CyLmkVBV.js","assets/index-CwZRFjFl.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-DpYboewn.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-D56PyvA6.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-DtiwoO3W.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-DPC3qfie.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-BViHElii.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-CyLmkVBV.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-CwZRFjFl.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
