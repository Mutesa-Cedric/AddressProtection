(function () {
  let objBrowser = chrome ? chrome : browser;
  //See if they have the signature injection enabled
  objBrowser.runtime.sendMessage(
    { func: "signature_inject" },
    function (objResponse) {
      if (objResponse.resp === "1") {
        window.onload = function () {
          var strSignature = "<!--- EAL IS INSTALLED -->";
          if (
            document.getElementById("ext-smartaddressprotection-signature") ===
            null
          ) {
            var objSignatureDiv = document.createElement("div");
            objSignatureDiv.id = "ext-smartaddressprotection-signature";
            objSignatureDiv.innerHTML = strSignature;
            document.body.appendChild(objSignatureDiv);
          }
        };
      }
    }
  );
})();
