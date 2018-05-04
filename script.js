


function validateForm (fields) {
    document.querySelectorAll("input").forEach(function (fields) {
        var val = fields.value
        var par = fields.parentElement   
        if (par.classList.contains("input-field")) {
            var reg = fields.previousElementSibling.innerText
            var newDiv = document.createElement("div")
            var newText = document.createTextNode(reg + " is required")
            newDiv.setAttribute("id",reg)
            if (val == '') {
                par.classList.add("input-invalid")
                newDiv.appendChild(newText)
                par.appendChild(newDiv)               
            } else {
                par.classList.add("input-valid")
                var handle = document.getElementById(reg)
                console.log(handle)
                if (handle !== null) {
                    handle.remove()
                }
            }
        } else {
            var regCar = fields.placeholder
            var newDiv = document.createElement("div")
            var newText = document.createTextNode(regCar + " is required")
            newDiv.setAttribute("id",regCar)
            if (val == '') {
                par.parentElement.classList.add("input-invalid")
                newDiv.appendChild(newText)
                par.parentElement.appendChild(newDiv) 
            } else {
                par.parentElement.classList.add("input-valid")
                var handleCar = document.getElementById(regCar)
                console.log(handle)
                if (handleCar !== null) {
                    handleCar.remove()
                }
            }
        }}
)}

  function run() {

  document.querySelector("#submit-button").addEventListener('click', function (event) {
    validateForm()
    event.preventDefault()
  })
}

document.addEventListener('DOMContentLoaded', run());