// General variables //



// Regular field functions //

function validateEntry(field) {
    var reg = field.previousElementSibling.innerText
    var handle = document.getElementById(reg)
    var par = field.parentElement 
    par.classList.add("input-valid")
        if (handle !== null) {
            handle.remove()
        }
}

function invalidMessage(field) {
    var parent = field.parentElement  
    var reg = field.previousElementSibling.innerText
    var newDiv = document.createElement("div")
    var newText = document.createTextNode(reg + " is required")
    newDiv.setAttribute("id",reg)
    if (!parent.classList.contains("input-invalid")) {
        parent.classList.add("input-invalid")
        newDiv.appendChild(newText)
        parent.appendChild(newDiv)            
    }
}

// Car field functions //

function validateEntryCar(field) {
    var regCar = field.placeholder
    var handleCar = document.getElementById(regCar)
    var parent = field.parentElement 
    parent.parentElement.classList.add("input-valid")
        if (handleCar !== null) {
            handleCar.remove()
        }
}

function invalidMessageCar(field) {
    var parent = field.parentElement   
    var regCar = field.placeholder
    var handleCar = document.getElementById(regCar)
    var newDiv = document.createElement("div")
    var newText = document.createTextNode(regCar + " is required")
    newDiv.setAttribute("id",regCar)
    if (parent.parentElement.classList.contains("input-invalid")) {
        if (handleCar !== null) {
            handleCar.remove()
        } 
    } 
    parent.parentElement.classList.remove("input-valid")
    parent.parentElement.classList.add("input-invalid")
    newDiv.appendChild(newText)
    parent.parentElement.appendChild(newDiv) 
}



function validateForm (fields) {
    document.querySelectorAll("input").forEach(function (fields) {
        var val = fields.value
        var parent = fields.parentElement   
        if (parent.classList.contains("input-field")) {
            if (val == '') {
                invalidMessage(fields)
                parent.classList.remove("input-valid")   
            } else {
                validateEntry(fields)
            }
        } else {
            if (val == '') {
                invalidMessageCar(fields)
            }else {
                validateEntryCar(fields)
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