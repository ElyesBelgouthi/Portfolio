function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-zgbBDH-s.js","assets/index-DPjYu-CC.js","assets/index-BdllLyp0.css","assets/index-D8F6wABg.js","assets/index-CcqFp99u.js","assets/index-tUlkd91D.js","assets/index-CP60zdLx.js","assets/index-DQ9k1CsY.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-DPjYu-CC.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-zgbBDH-s.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-D8F6wABg.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-CcqFp99u.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-tUlkd91D.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-CP60zdLx.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-DQ9k1CsY.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
