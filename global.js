const counter_button = document.getElementById("click_button")

click_button.onclick = function () {
    // Complete this function so that it increments the variable named count
    document.querySelector('#countspan').innerHTML = ++count
}