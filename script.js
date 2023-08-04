const $button = document.getElementById("button");
const $sidebar = document.getElementById("sidebar");

$button.addEventListener("click", toggleSidebar)

function toggleSidebar() {
  $sidebar.classList.toggle("show")
}