
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead(["wx-view { padding: 0 ",[0,30],"; }\n",],undefined,{path:"./pages/rechargeRecord/rechargeRecord.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/rechargeRecord/rechargeRecord.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      