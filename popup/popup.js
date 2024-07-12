console.log("Hello This is narasimha trying to do some stuff");

document.getElementById("savee").addEventListener("click", () => {
  chrome.runtime.sendMessage(
    {
      messsage: "Hello This is narasimha trying to do some stuff",
    },
    (response) => {
      console.log(response);
      console.log("Message got  an answer");
    }
  );
});
