function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-cvvaUQgK.js","assets/index-Ci_UUOrR.js","assets/index-VWvaGr7r.css","assets/index-C4dH69nR.js","assets/index-tscQmXhz.js","assets/index-BgMY8KR2.js","assets/index-6jChCJPI.js","assets/index-psoRcVjl.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-Ci_UUOrR.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-cvvaUQgK.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-C4dH69nR.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-tscQmXhz.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-BgMY8KR2.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-6jChCJPI.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-psoRcVjl.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
