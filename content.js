chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
  if (msg.command && (msg.command == "btn_clicked")) {
    var reveal_password;
    reveal_password = document.querySelectorAll('input[type=password]');
    for(var i=0; i< reveal_password.length; i++) reveal_password[i].setAttribute('type', 'text');
  }
});
