


function validateForm (fields) {
    document.querySelectorAll("input").forEach(function (fields) {
        // debugger
        var val = fields.value
        var par = fields.parentElement   
        if (par.classList.contains("input-field")) {
            var reg = fields.previousElementSibling.innerText
            var newDiv = document.createElement("div")
            var newText = document.createTextNode(reg + " is required")
            newDiv.setAttribute("id",reg)
            var handle = document.getElementById(reg)
            if (val == '') {
                if (!par.classList.contains("input-invalid")) {
                    par.classList.add("input-invalid")
                    newDiv.appendChild(newText)
                    par.appendChild(newDiv)               
                }
            } else {
                    par.classList.add("input-valid")
                    if (handle !== null) {
                        handle.remove()
                    }
                }
            
        } else {
            var regCar = fields.placeholder
            // debugger
            var newDiv = document.createElement("div")
            var newText = document.createTextNode(regCar + " is required")
            newDiv.setAttribute("id",regCar)
            var handleCar = document.getElementById(regCar)
            if (val == '') {
                if (par.parentElement.classList.contains("input-invalid")) {
                    if (handleCar !== null) {
                        handleCar.remove()
                    } 
                } 
                par.parentElement.classList.add("input-invalid")
                newDiv.appendChild(newText)
                par.parentElement.appendChild(newDiv) 
            }else {
                    par.parentElement.classList.add("input-valid")
                    if (handleCar !== null) {
                        handleCar.remove()
                    }
                }
        }
        
    })
}


  function run() {

  document.querySelector("#submit-button").addEventListener('click', function (event) {
    validateForm()
    event.preventDefault()
  })
}

document.addEventListener('DOMContentLoaded', run());