// General variables //



// Regular field functions //

function validateEntry (field) {
    var reg = field.previousElementSibling.innerText
    var handle = document.getElementById(reg)
    var par = field.parentElement 
    par.classList.add("input-valid")
        if (handle !== null) {
            handle.remove()
        }
}

// Car field functions //

function validateCarEntry(field) {
    var regCar = field.placeholder
    var handleCar = document.getElementById(regCar)
    var par = field.parentElement 
    par.parentElement.classList.add("input-valid")
        if (handleCar !== null) {
            handleCar.remove()
        }
}



function validateForm (fields) {
    document.querySelectorAll("input").forEach(function (fields) {
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
                par.classList.remove("input-valid")   
            } else {
                validateEntry(fields)
            }
        } else {
            var regCar = fields.placeholder
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
                par.parentElement.classList.remove("input-valid")
                par.parentElement.classList.add("input-invalid")
                newDiv.appendChild(newText)
                par.parentElement.appendChild(newDiv) 
            }else {
                validateCarEntry(fields)
            }
        }
        
    })
}

// function carYear (year) {
//     document.querySelector("#car-year").forEach(function (year)
//         // if ()


// )
// }




  function run() {

  document.querySelector("#submit-button").addEventListener('click', function (event) {
    validateForm()
    // other functions called here //
    event.preventDefault()
  })
}

document.addEventListener('DOMContentLoaded', run());