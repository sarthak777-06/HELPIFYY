function showLoader(event) {
  event.preventDefault();
  document.getElementById("loader").classList.remove("hidden");
  setTimeout(() => {
    window.location.href = "book.html";
  }, 2000); // 2 second loading delay
}
