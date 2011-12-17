function get_google_docs_link(href) {
  return "http://docs.google.com/viewer?url=" + encodeURIComponent(href);
}

chrome.contextMenus.create({
  "title": "Open Link in New Google Docs Viewer Tab",
  "contexts": ["link"],
  "onclick": function(info, tab) {
    chrome.tabs.create({
      "url": get_google_docs_link(info.linkUrl)
    });
  },
});
