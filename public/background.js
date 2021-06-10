const MENU_TOGGLE_PW = "menuTogglePW";
const COMMAND_TOGGLE_PW = "commandTogglePasswords";
const ACTION_TOGGLE_PW = "actionTogglePW";

// context menus
chrome.contextMenus.create({
  id: MENU_TOGGLE_PW,
  title: "Toggle Passwords",
  contexts: ["all"],
});

chrome.contextMenus.onClicked.addListener(() => {
  sendToggleMessage();
});

// shortcuts commands
chrome.commands.onCommand.addListener(function (command) {
  if (command === COMMAND_TOGGLE_PW) {
    sendToggleMessage();
  }
});

function sendToggleMessage() {
  chrome.tabs.getSelected(undefined, (tab) => {
    chrome.tabs.sendMessage(tab.id, {
      action: ACTION_TOGGLE_PW,
    });
  });
}
