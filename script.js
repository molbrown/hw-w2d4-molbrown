
// Regular field functions //

function validateEntry(field) {
    var labelText = field.previousElementSibling.innerText
    var handle = document.getElementById(labelText)
    var par = field.parentElement 
    par.classList.add("input-valid")
        if (handle !== null) {
            handle.remove()
        }
}

function invalidMessage(field) {
    var parent = field.parentElement  
    var labelText = field.previousElementSibling.innerText
    var newDiv = document.createElement("div")
    var newText = document.createTextNode(labelText + " is required")
    var labelText = field.previousElementSibling.innerText
    var handle = document.getElementById(labelText)
    newDiv.setAttribute("id",labelText)
    if (parent.classList.contains("input-invalid") && handle !== null) {
        handle.remove()        
    }
    parent.classList.remove("input-valid")
    parent.classList.add("input-invalid")
    newDiv.appendChild(newText)
    parent.appendChild(newDiv)    
}

// Car field functions //

function validateEntryCar(field) {
    var placeText = field.placeholder
    var handleCar = document.getElementById(placeText)
    var parent = field.parentElement 
    parent.parentElement.classList.add("input-valid")
        if (handleCar !== null) {
            handleCar.remove()
        }
}

function invalidMessageCar(field) {
    var parent = field.parentElement   
    var placeText = field.placeholder
    var handleCar = document.getElementById(placeText)
    var newDiv = document.createElement("div")
    var newText = document.createTextNode(placeText + " is required")
    newDiv.setAttribute("id",placeText)
    if (parent.parentElement.classList.contains("input-invalid") && handleCar !== null) {
        handleCar.remove()
    } 
    parent.parentElement.classList.remove("input-valid")
    parent.parentElement.classList.add("input-invalid")
    newDiv.appendChild(newText)
    parent.parentElement.appendChild(newDiv) 
}


// Listener Functions (call above functions) //

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

function carYear() {
    var yearField = document.querySelector("#car-year")
    var val = yearField.value
    var num = parseInt(val, 10)
    var parent = yearField.parentElement 
    if (parent.parentElement.classList.contains("input-valid")) {
        if (isNaN(num)) {
            var oneDiv = document.createElement("div")
            var yearWarn = document.createTextNode("Car year must be a number.")
            oneDiv.setAttribute("id", "isNumber")
            oneDiv.appendChild(yearWarn)
            parent.parentElement.appendChild(oneDiv) 
            parent.parentElement.classList.remove("input-valid")
            parent.parentElement.classList.add("input-invalid")
            if (document.getElementById("future") !== null) {
                document.getElementById("future").remove()
            }
            if (document.getElementById("after") !== null) {
                document.getElementById("after").remove()
            }
        } else if (num < 1900) {
            var twoDiv = document.createElement("div")
            var afterWarn = document.createTextNode("Car year must be after 1900.")
            twoDiv.setAttribute("id", "after")
            twoDiv.appendChild(afterWarn)
            parent.parentElement.appendChild(twoDiv) 
            parent.parentElement.classList.remove("input-valid")
            parent.parentElement.classList.add("input-invalid")
            if (document.getElementById("isNumber") !== null) {
                document.getElementById("isNumber").remove()
            }
            if (document.getElementById("future") !== null) {
                document.getElementById("future").remove()
            }
        } else if (num > 2018) {
            var threeDiv = document.createElement("div")
            var futureWarn = document.createTextNode("Car year cannot be in the future.")
            threeDiv.setAttribute("id", "future")
            threeDiv.appendChild(futureWarn)
            parent.parentElement.appendChild(threeDiv) 
            parent.parentElement.classList.remove("input-valid")
            parent.parentElement.classList.add("input-invalid")
            if (document.getElementById("isNumber") !== null) {
                document.getElementById("isNumber").remove()
            }
            if (document.getElementById("after") !== null) {
                document.getElementById("after").remove()
            }
        }
    }
    
}



  function run() {

  document.querySelector("#submit-button").addEventListener('click', function (event) {
    validateForm()
    carYear()
    // other functions called here //
    event.preventDefault()
  })
}

document.addEventListener('DOMContentLoaded', run());