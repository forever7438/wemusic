
      !(function(){
        var uniAppViewReadyCallback = function(){
          setCssToHead([".",[1],"fridend_content { padding: 0 ",[0,30],"; }\n",],undefined,{path:"./pages/myFriend/myFriend.wxss"})();
document.dispatchEvent(new CustomEvent("generateFuncReady", { detail: { generateFunc: $gwx('./pages/myFriend/myFriend.wxml') } }));
        }
        if(window.__uniAppViewReady__){
          uniAppViewReadyCallback()
        }else{
          document.addEventListener('uniAppViewReady',uniAppViewReadyCallback)
        }
      })();
      