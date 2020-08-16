document.getElementById('modalBtn').onclick = displayPopup;

function displayPopup() {
  var popup = document.getElementById("popup");
  var frame = document.getElementById('popupFrame');
  frame.src = "https://drive.google.com/file/d/1zvfWcD0v4nl3I05k6yOzyDaYEdtSlF47/preview";
  popup.style.display = "block";
}