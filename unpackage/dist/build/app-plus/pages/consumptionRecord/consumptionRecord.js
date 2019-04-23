
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead(["wx-view { padding: 0 ",[0,30],"; }\n",],undefined,{path:"./pages/consumptionRecord/consumptionRecord.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/consumptionRecord/consumptionRecord.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      