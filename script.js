let count = 0;

const countDisplay = document.getElementById("count");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const clearBtn = document.getElementById("clear");
const errorMsg = document.getElementById("error");

function updateUI() {
  countDisplay.innerHTML = count;

  if (count > 0) {
    clearBtn.style.display = "inline-block";
  } else {
    clearBtn.style.display = "none";
  }

  errorMsg.style.display = "none";
}

incrementBtn.addEventListener("click", function () {
  count++;
  updateUI();
});

decrementBtn.addEventListener("click", function () {
  if (count === 0) {
    errorMsg.style.display = "block";
  } else {
    count--;
    updateUI();
  }
});

clearBtn.addEventListener("click", function () {
  count = 0;
  updateUI();
});

updateUI();