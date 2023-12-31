function loadExternalHTML(url, targetElementId) {
  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
          document.getElementById(targetElementId).innerHTML = this.responseText;
      }
  };
  httpRequest.open("GET", url, true);
  httpRequest.send();
}
