let body = document.body;

function showPopUpMessage(
  titleText = "Order Success",
  messageText = "Thanks for making a purchase, you may find all the details in your email"
) {
  let popUp = document.createElement("div");
  popUp.className = "pop-up";
  let popUpContent = document.createElement("div");
  popUpContent.className = "pop-up-content";
  let popUpContentBody = document.createElement("div");
  popUpContentBody.className = "pop-up-content-body";
  let popUpTitle = document.createElement("h4");
  popUpTitle.className = "title";
  let title = document.createTextNode(titleText);
  let popUpMessage = document.createElement("p");
  let message = document.createTextNode(messageText);
  let closeButton = document.createElement("button");
  closeButton.className = "button close-pop-up";
  let closeButtonMessage = document.createTextNode("Close");
  closeButton.appendChild(closeButtonMessage);

  popUpTitle.appendChild(title);
  popUpMessage.appendChild(message);
  popUpContentBody.appendChild(popUpTitle);
  popUpContentBody.appendChild(popUpMessage);
  popUpContent.appendChild(popUpContentBody);
  popUpContent.appendChild(closeButton);
  popUp.appendChild(popUpContent);
  body.appendChild(popUp);

  closeButton.addEventListener("click", function (e) {
    document.body.removeChild(document.getElementsByClassName("pop-up")[0]);
  });
}
