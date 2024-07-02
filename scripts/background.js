chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "explainWithAi",
    title: "Explain with GenAI",
    contexts: ["selection"],
  });
});

// const model = window.ai.createTextSession();

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "explainWithAi") {
    if (info.menuItemId === "explainWithAi") {
      console.info(`Explaining is`);
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ["scripts/inject.js"],
      });
    }
  }
});

// async function modifyHighlightedText() {
//   const selection = window.getSelection().toString();
//   const modifiedText = selection.toUpperCase(); // Example modification
//   await window.ai.generateText(
//     {
//       prompt: `Can you explain the following text?\n${selection}`,
//     },
//     {
//       onStreamResult: (res) => alert(res.text),
//     }
//   );

//   // alert(`Modified text: ${modifiedText}`);
// }
