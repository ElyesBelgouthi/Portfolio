function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index--7h51x6A.js","assets/index-BqiuV7_Y.js","assets/index-CWTS-Oh3.css","assets/index-CttMyaF4.js","assets/index-BkaNqBs9.js","assets/index-ZEtmyKKD.js","assets/index-BzzkPoSo.js","assets/index-Dai_fVmZ.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-BqiuV7_Y.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index--7h51x6A.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-CttMyaF4.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-BkaNqBs9.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-ZEtmyKKD.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-BzzkPoSo.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-Dai_fVmZ.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
