function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-DsUuHMeL.js","assets/index-rxDoIKok.js","assets/index-DT2Iu4Yo.css","assets/index-CozDu6O2.js","assets/index-Dve9B53T.js","assets/index-B8Dvd2Uc.js","assets/index-BYhnyxpB.js","assets/index-Cz6pYQ_L.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-rxDoIKok.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-DsUuHMeL.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-CozDu6O2.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-Dve9B53T.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-B8Dvd2Uc.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-BYhnyxpB.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-Cz6pYQ_L.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
