chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
  if (msg.command && (msg.command == "btn_clicked")) {
    var reveal_password,hide_password;

    hide_password = document.querySelectorAll('[data-status]');

    if (hide_password.length == 0){
      reveal_password = document.querySelectorAll('input[type=password]');
      for(var i=0; i< reveal_password.length; i++){
        reveal_password[i].dataset.status = "revealed";
        reveal_password[i].setAttribute('type', 'text');
      }
    }else{
      for(var i=0; i< hide_password.length; i++){
        delete hide_password[i].dataset.status;
        hide_password[i].setAttribute('type', 'password');
      }
    }

  }
});
