function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-nXe3euh0.js","assets/index-C2dOe-4t.js","assets/index-VWvaGr7r.css","assets/index-jf9hGotO.js","assets/index-PeYHE_s4.js","assets/index-CA7qS4yN.js","assets/index-Ci1Lp2A-.js","assets/index-QmY8hTzJ.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-C2dOe-4t.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-nXe3euh0.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-jf9hGotO.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-PeYHE_s4.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-CA7qS4yN.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-Ci1Lp2A-.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-QmY8hTzJ.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
