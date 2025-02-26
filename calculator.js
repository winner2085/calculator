document.addEventListener('DOMContentLoaded', function() {
    var textbox = document.querySelector("#userInput");
    var numButtons = document.querySelectorAll(".buttons");
    
    numButtons.forEach(function(btn) {
      btn.addEventListener("click", function(e) {
        textbox.value += this.value;
      });
    });
});

