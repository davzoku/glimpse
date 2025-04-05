const MENU_TOGGLE_PW = "menuTogglePW";
const COMMAND_TOGGLE_PW = "commandTogglePasswords";
const ACTION_TOGGLE_PW = "actionTogglePW";

// Create context menu entry on installation
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: MENU_TOGGLE_PW,
    title: "Toggle Passwords",
    contexts: ["all"]
  });
});

// Handle context menu clicks
chrome.contextMenus.onClicked.addListener(() => {
  sendToggleMessage();
});

// Handle keyboard shortcut commands
chrome.commands.onCommand.addListener((command) => {
  if (command === COMMAND_TOGGLE_PW) {
    sendToggleMessage();
  }
});

// Function to send a message to the active tab
function sendToggleMessage() {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs && tabs.length > 0) {
      chrome.tabs.sendMessage(tabs[0].id, { action: ACTION_TOGGLE_PW });
    }
  });
}