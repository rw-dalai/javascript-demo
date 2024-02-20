// What is the DOM?
// The Document Object Model (DOM) is a programming interface (API) for web pages.
// The DOM represents the web page so that javascript can change the document structure, style, and content.
// https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction

// window
//   global object, represents the browser window
//   window.document,
//   window.location,
//   window.history,
//   window.navigator
//   window.screen

// document
//   contains the DOM, initialized by parsing HTML

// DOMContentLoaded
//   event fires when the initial HTML document has been completely loaded and parsed,
//   without waiting for stylesheets, images, and subframes to finish loading.

// document.addEventListener('DOMContentLoaded', function () {
//   const $button = document.getElementById('btn');
//   console.log('button', $button);
// });


window.addEventListener("load", (event) => {
  console.log("load", event);
});

document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOMContentLoaded", event);
});

document.addEventListener("readystatechange", (event) => {
  console.log("readystatechange", document.readyState, event);
});
