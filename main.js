(()=>{"use strict";!function(){let t=16,e=1;const s=t=>document.getElementById(`hole${t}`),a=()=>{e=Math.floor(1+16*Math.random());const t=s(e);"true"===t.dataset.visited?a():t.className="hole hole_has-mole"};setInterval((()=>{(e=>{const a=s(e);a.className="hole",a.dataset.visited="true",t-=1})(e),t<1||a()}),400)}()})();