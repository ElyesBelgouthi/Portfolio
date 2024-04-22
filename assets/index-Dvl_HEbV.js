function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-cNLTgLsL.js","assets/index-CsrGPvuU.js","assets/index-CWTS-Oh3.css","assets/index-D7x6PFb9.js","assets/index-Th-g8Ybt.js","assets/index-DcfwLzqM.js","assets/index-J6I0g3VA.js","assets/index-DaPh6Gb0.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-CsrGPvuU.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-cNLTgLsL.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-D7x6PFb9.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-Th-g8Ybt.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-DcfwLzqM.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-J6I0g3VA.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-DaPh6Gb0.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
