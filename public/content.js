const ACTION_TOGGLE_PW = "actionTogglePW";

chrome.runtime.onMessage.addListener((request, _, sendResponse) => {
  if (request.action === ACTION_TOGGLE_PW) {
    togglePW();
  }
  sendResponse({ value: "ok" });
});

function togglePW() {
  let passwordFields = document.querySelectorAll('input[type="password"]');
  let revealedFields = document.querySelectorAll('input[revealed="true"]');

  // console.log("Password fields count:", passwordFields.length);
  // console.log("Revealed fields count:", revealedFields.length);

  // Convert hidden password fields to text
  for (let i = 0; i < passwordFields.length; i++) {
    // console.log("Converting field:", passwordFields[i]);
    passwordFields[i].setAttribute("type", "text");
    passwordFields[i].setAttribute("revealed", "true");
  }

  // Revert revealed fields back to password type
  for (let i = 0; i < revealedFields.length; i++) {
    // console.log("Reverting field:", revealedFields[i]);
    revealedFields[i].setAttribute("type", "password");
    revealedFields[i].setAttribute("revealed", "false");
  }
}