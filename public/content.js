const ACTION_TOGGLE_PW = "actionTogglePW";

chrome.runtime.onMessage.addListener(function (request, _, sendResponse) {
  if (request.action === ACTION_TOGGLE_PW) {
    togglePW();
  }
  sendResponse({
    value: "ok",
  });
});

function togglePW() {
  let passwordFields = document.querySelectorAll('input[type="password"]');
  let revealedFields = document.querySelectorAll('input[revealed="true"]');
  console.log(passwordFields.length);
  console.log(revealedFields.length);

  for (let i = 0; i < passwordFields.length; i++) {
    console.log("pass ", passwordFields[i]);
    passwordFields[i].setAttribute("type", "text");
    passwordFields[i].setAttribute("revealed", "true");
  }

  for (let i = 0; i < revealedFields.length; i++) {
    console.log("revealed ", passwordFields[i]);
    revealedFields[i].setAttribute("type", "password");
    revealedFields[i].setAttribute("revealed", "false");
  }
}
