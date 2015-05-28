function openTab(url) {
  var app = document.createElement('a');
  app.href = url;
  app.target='_blank';
  app.click();
}
chrome.app.runtime.onLaunched.addListener(function() {
  openTab('index.html');
});
