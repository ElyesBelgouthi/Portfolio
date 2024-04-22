function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-UH3gnLKP.js","assets/index-CGpovgwq.js","assets/index-VWvaGr7r.css","assets/index-CXKSOLC2.js","assets/index-BamNhYZ_.js","assets/index-_vZJW5IT.js","assets/index-BMMcsihR.js","assets/index-B5M2TN2T.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-CGpovgwq.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-UH3gnLKP.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-CXKSOLC2.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-BamNhYZ_.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-_vZJW5IT.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-BMMcsihR.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-B5M2TN2T.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
