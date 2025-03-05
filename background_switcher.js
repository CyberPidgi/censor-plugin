debugger;

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log('hello from background_switcher.js')

  var textelements = ['p', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']

  textelements.forEach(element => {
    document.querySelectorAll(element).forEach(e => {
      if (!e.textContent.includes('illustrative')) return;
      e.innerHTML = '<span style="background-color: black">' + e.innerHTML + '</span>'
    })
  });

  console.log('fetching from localhost:5000')

  // for this to work
  // make sure you whitelist the localhost:5000 if you use adblock
  // and idk if the cors shit is required but we keep it here
  // fetch('http://localhost:5000/test',  {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Access-Control-Allow-Origin': '*',
  //     'Access-Control-Allow-Headers': "*",
  //     'Access-Control-Allow-Methods': "*",
  //   }
  // })
  // .then(response => response.text())
  // .then((response) => {
  //     console.log(response)
  // })
  // .catch(err => console.log(err))

  // if (request.action === "toggleBackgroundColor") {
  //   if (document.body.style.backgroundColor !== "yellow") {
  //     document.body.style.backgroundColor = "yellow";
  //   } else {
  //     document.body.style.backgroundColor = "";
  //   }
  // }
});