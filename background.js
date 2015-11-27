chrome.browserAction.onClicked.addListener(function(tab) {
// alert();
chrome.tabs.sendMessage(tab.id, {
      command: "change_title",
      title: "hoge"
    },
    function(msg) {
      console.log("result message:", msg);
    });

});
