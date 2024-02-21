// What is the DOM?
// The Document Object Model (DOM) is a programming interface (API) for web pages.
// The DOM represents the web page so that javascript can change the document structure, style, and content.
// https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction

// window
//   global object, represents the browser window
//   (window.document, window.location, window.history, ...)

// document
//   contains the DOM, initialized by parsing HTML
//   (document.head, document.body, ...)

// DOMContentLoaded
//   event fires when the initial HTML document has been completely loaded and parsed,
//   without waiting for stylesheets, images, and subframes to finish loading.

window.addEventListener("load", (event) => {
  console.log("load", event);
});

document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOMContentLoaded", event);
});

document.addEventListener("readystatechange", (event) => {
  console.log("readystatechange", document.readyState, event);
});
