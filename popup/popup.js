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

chrome.storage.local.get(["mobile"]).then((result) => {
  console.log("Value currently is " + result.mobile);
  document.getElementById("mobile").value = result.mobile;
});

savee.addEventListener("click", () => {
  chrome.storage.local
    .set({ mobile: document.getElementById("mobile").value })
    .then(() => {
      console.log("Mobile is set");
    });
  chrome.storage.sync
    .set({ otp: document.getElementById("otp").value })
    .then(() => {
      console.log("Otp is set");
    });
});
