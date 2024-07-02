var promptAi = async () => {
  const model = await window.ai.createTextSession();
  let selection = window.getSelection().toString();
  selection = selection.replace(/(\r\n|\n|\r)/gm, " ");

  const oldCursor = document.body.style.cursor;
  console.log({ oldCursor });

  document.body.style.cursor = "progress";

  const response = await model.prompt(
    `You are Jables, a helpful AI assistant that helps explain topics, words, and phrases.
    
    Can you explain the following text in less than 60 words? 
    Just reply with the description, and no additional markup.

    Here's the text to explain :${selection}`
  );
  document.body.style.cursor = oldCursor;

  console.log({ response });
  createModal(selection, response);
};

function createModal(selection, ai_response) {
  // Create the modal element
  const modal = document.createElement("div");
  modal.classList.add("modal");

  // Create the modal content element
  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");

  // Create the close button
  const closeButton = document.createElement("span");
  closeButton.classList.add("close");
  closeButton.innerHTML = "&times;";
  closeButton.onclick = function () {
    modal.style.display = "none";
  };

  // Create some content for the modal
  const modalText = document.createElement("p");
  modalText.innerText = `Here's the text to explain:\n${selection}\n\nHere's the AI response:\n${ai_response}`;

  // Append the close button and text to the modal content
  modalContent.appendChild(closeButton);
  modalContent.appendChild(modalText);

  // Append the modal content to the modal
  modal.appendChild(modalContent);

  // Append the modal to the document body
  document.body.appendChild(modal);

  // Show the modal
  modal.style.display = "block";
}

(async () => {
  await promptAi();
})();
