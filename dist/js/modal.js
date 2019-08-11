let modal = document.getElementsByClassName("modal-window")[0];
let open = document.getElementsByClassName("open-button")[0];
let close = document.getElementsByClassName("modal-window__close-button")[0];
let filter = document.getElementsByClassName("filter")[0];
let text = document.getElementsByClassName("modal-window__text-area")[0];

open.onclick = function () {
    modal.style.display = "block";
    filter.style.display ="block";
}

close.onclick = function() {
    modal.style.display = "none";
    filter.style.display ="none";
    text.textContent = "Вы можете ввести сюда текст";
}

window.onclick = function(event) {
    if (event.target == filter) {
      close.onclick();
    }
}

