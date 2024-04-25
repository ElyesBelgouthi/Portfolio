function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Linker-B2KOPPoo.js","assets/Ranges-RsD6-9Rz.js","assets/index-BqiuV7_Y.js","assets/index-CWTS-Oh3.css","assets/index-BPyrGlw4.js","assets/OptionsColor-Dfvx9sHz.js","assets/ParticlesInteractorBase-vfDeBun3.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-BqiuV7_Y.js";async function o(t,r=!0){await t.addInteractor("particlesLinks",async a=>{const{Linker:n}=await i(()=>import("./Linker-B2KOPPoo.js"),__vite__mapDeps([0,1,2,3,4,5,6]));return new n(a)},r)}export{o as loadLinksInteraction};
