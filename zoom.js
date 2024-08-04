// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Add an event listener to the image to show the modal
img.addEventListener('click', function() {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
});

// Get the close button
var span = document.getElementsByClassName("close")[0];

// Add an event listener to the close button to hide the modal
span.addEventListener('click', function() {
  modal.style.display = "none";
});