function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-Bf8T4jS7.js","assets/index-C-wJfTDu.js","assets/index-DHPvGsrT.css","assets/index-Bt_NSnyo.js","assets/index-Bsvz_RdR.js","assets/index-CbxXUjQM.js","assets/index-DpBkJsGw.js","assets/index-BszvpSjK.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-C-wJfTDu.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-Bf8T4jS7.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-Bt_NSnyo.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-Bsvz_RdR.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-CbxXUjQM.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-DpBkJsGw.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-BszvpSjK.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
