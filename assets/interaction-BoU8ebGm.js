function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Linker-DQ7dzMpz.js","assets/Ranges-VcYxbyyv.js","assets/index-rxDoIKok.js","assets/index-DT2Iu4Yo.css","assets/index-fWCw-TrN.js","assets/OptionsColor-B_2m0Tr7.js","assets/ParticlesInteractorBase-vfDeBun3.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-rxDoIKok.js";async function o(t,r=!0){await t.addInteractor("particlesLinks",async a=>{const{Linker:n}=await i(()=>import("./Linker-DQ7dzMpz.js"),__vite__mapDeps([0,1,2,3,4,5,6]));return new n(a)},r)}export{o as loadLinksInteraction};
