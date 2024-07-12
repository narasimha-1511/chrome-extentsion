// this is the script that will be injected into the page

console.log("contentScript.js loaded");

const fn = async () => {
  const mobileno = await chrome.storage.local.get(["mobile"]);

  if (mobileno == undefined) {
    console.log("Mobile number not found");
    alert("Mobile number not found");
    return;
  }

  let MobileText = document.getElementById("login-mobile-number");
  MobileText.value = mobileno;
  let MobileText1 = document.getElementById("login-mobile");
  MobileText1.value = "+91-" + mobileno;

  //this is th code for actuval automating scrape
};

fn();