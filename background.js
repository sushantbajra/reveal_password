chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.sendMessage(tab.id, {
        command: "btn_clicked"
      },
      function(msg) {
        console.log("result message:", msg);
      }
  );
});
