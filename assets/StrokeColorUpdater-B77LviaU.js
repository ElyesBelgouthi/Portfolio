import{Q as r,H as a,r as d,ac as l,ad as u}from"./index-enHMMOzu.js";const c=1;class g{constructor(n){this.container=n}init(n){var i;const e=this.container,o=n.options,t=r(o.stroke,n.id,o.reduceDuplicates);n.strokeWidth=a(t.width)*e.retina.pixelRatio,n.strokeOpacity=a(t.opacity??c),n.strokeAnimation=(i=t.color)==null?void 0:i.animation;const s=d(t.color)??n.getFillColor();s&&(n.strokeColor=l(s,n.strokeAnimation,e.retina.reduceFactor))}isEnabled(n){const e=n.strokeAnimation,{strokeColor:o}=n;return!n.destroyed&&!n.spawning&&!!e&&((o==null?void 0:o.h.value)!==void 0&&o.h.enable||(o==null?void 0:o.s.value)!==void 0&&o.s.enable||(o==null?void 0:o.l.value)!==void 0&&o.l.enable)}update(n,e){this.isEnabled(n)&&u(n.strokeColor,e)}}export{g as StrokeColorUpdater};
