chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
  if (msg.command && (msg.command == "change_title")) {
    var reveal_password;
reveal_password = document.querySelectorAll('input[type=password]');

reveal_password[0].removeAttribute('type');
  }
});
