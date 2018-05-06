
// Regular field functions //

function validateEntry(field) {
    var labelText = field.previousElementSibling.innerText
    var handle = document.getElementById(labelText)
    var par = field.parentElement 
    par.classList.add("input-valid")
        if (handle !== null) {
            handle.remove()
        }
        field.setAttribute("class", "check")
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
    field.setAttribute("class", "car-check")
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

// Remove Error Messages/ Prevent repeat error messages //

function deleteNumberError() {
    if (document.getElementById("isNumber") !== null) {
        document.getElementById("isNumber").remove()
    }
}

function deleteAfterError() {
    if (document.getElementById("after") !== null) {
        document.getElementById("after").remove()
    }
}

function deleteFutureError() {
    if (document.getElementById("future") !== null) {
        document.getElementById("future").remove()
    }
}

function deleteParkDateError() {
    if (document.getElementById("park-warn") !== null) {
        document.getElementById("park-warn").remove()
    }
}

function deleteParkNumberError() {
    if (document.getElementById("day-number") !== null) {
        document.getElementById("day-number").remove()
    }
}

function deleteLengthError() {
    if (document.getElementById("length") !== null) {
        document.getElementById("length").remove()
    }
}

function deleteCvvError() {
    if (document.getElementById("cvvEntry") !== null) {
        document.getElementById("cvvEntry").remove()
    }
}

function deleteCreditCardError() {
    if (document.getElementById("credit-card-error") !== null) {
        document.getElementById("credit-card-error").remove()
    }
}

// Field-specific Error messages //

function insertNumberError() {
    deleteNumberError()
    var yearField = document.querySelector("#car-year")
    var parent = yearField.parentElement
    var oneDiv = document.createElement("div")
    var yearWarn = document.createTextNode("Car year must be a number.")
    oneDiv.setAttribute("id", "isNumber")
    oneDiv.appendChild(yearWarn)
    parent.parentElement.appendChild(oneDiv) 
    parent.parentElement.classList.remove("input-valid")
    parent.parentElement.classList.add("input-invalid")
    deleteFutureError()
    deleteAfterError()
}

function insertAfterError() {
    deleteAfterError()
    var yearField = document.querySelector("#car-year")
    var parent = yearField.parentElement
    var twoDiv = document.createElement("div")
    var afterWarn = document.createTextNode("Car year must be after 1900.")
    twoDiv.setAttribute("id", "after")
    twoDiv.appendChild(afterWarn)
    parent.parentElement.appendChild(twoDiv) 
    parent.parentElement.classList.remove("input-valid")
    parent.parentElement.classList.add("input-invalid")
    deleteNumberError()
    deleteFutureError()
}

function insertFutureError() {
    deleteFutureError()
    var yearField = document.querySelector("#car-year")
    var parent = yearField.parentElement
    var threeDiv = document.createElement("div")
    var futureWarn = document.createTextNode("Car year cannot be in the future.")
    threeDiv.setAttribute("id", "future")
    threeDiv.appendChild(futureWarn)
    parent.parentElement.appendChild(threeDiv) 
    parent.parentElement.classList.remove("input-valid")
    parent.parentElement.classList.add("input-invalid")
    deleteNumberError()
    deleteAfterError()
}

function insertParkNumberError() {
    deleteParkNumberError()
    var daysField = document.querySelector("#days")
    var fiveDiv = document.createElement("div")
    var daysWarn = document.createTextNode("Number of days must be a number.")
    fiveDiv.setAttribute("id", "day-number")
    fiveDiv.appendChild(daysWarn)
    daysField.parentElement.appendChild(fiveDiv) 
    daysField.parentElement.classList.remove("input-valid")
    daysField.parentElement.classList.add("input-invalid")
}

function insertLengthError() {
    deleteLengthError()
    var daysField = document.querySelector("#days")
    var sixDiv = document.createElement("div")
    var lengthWarn = document.createTextNode("Number of days must be between 1 and 30.")
    sixDiv.setAttribute("id", "length")
    sixDiv.appendChild(lengthWarn)
    daysField.parentElement.appendChild(sixDiv) 
    daysField.parentElement.classList.remove("input-valid")
    daysField.parentElement.classList.add("input-invalid")
}

function insertCvvError() {
    deleteCvvError()
    var cvvEntry = document.querySelector("#cvv")
    var sevenDiv = document.createElement("div")
    var cvvWarn = document.createTextNode("CVV must be a three-digit number.")
    sevenDiv.setAttribute("id", "cvvEntry")
    sevenDiv.appendChild(cvvWarn)
    cvvEntry.parentElement.appendChild(sevenDiv)
    cvvEntry.parentElement.classList.remove("input-valid")
    cvvEntry.parentElement.classList.add("input-invalid")
}

function insertCreditCardError() {
    deleteCreditCardError()
    var creditCardEntry = document.querySelector("#credit-card")
    var nineDiv = document.createElement("div")
    var creditWarn = document.createTextNode("Not a valid credit card number.")
    nineDiv.setAttribute("id", "credit-card-error")
    nineDiv.appendChild(creditWarn)
    creditCardEntry.parentElement.appendChild(nineDiv)
    creditCardEntry.parentElement.classList.remove("input-valid")
    creditCardEntry.parentElement.classList.add("input-invalid")
}

function luhnCheck(val) {
    var sum = 0;
    var creditCardEntry = document.querySelector("#credit-card")
    for (var i = 0; i < val.length; i++) {
        var intVal = parseInt(val.substr(i, 1));
        if (i % 2 == 0) {
            intVal *= 2;
            if (intVal > 9) {
                intVal = 1 + (intVal % 10);
            }
        }
        sum += intVal;
    }
    if ((sum % 10) == 0) {
        creditCardEntry.parentElement.classList.add("input-valid")
        deleteCreditCardError()
    } else {
        creditCardEntry.parentElement.classList.remove("input-valid")
        creditCardEntry.parentElement.classList.add("input-invalid")
        insertCreditCardError()
    }
}

// Listener Functions (call above functions) //

function validateForm(fields) {
    document.querySelectorAll("input").forEach(function (fields) {
        var val = fields.value
        var parent = fields.parentElement   
        if (parent.classList.contains("input-field")) {
            if (val == '') {
                invalidMessage(fields)
                parent.classList.remove("input-valid")   
                deleteParkNumberError()
            } else {
                validateEntry(fields)
                deleteParkDateError()
                deleteParkNumberError()
                deleteParkNumberError()
                deleteLengthError()
                deleteCvvError()
                deleteCreditCardError()
            }
        } else {
            if (val == '') {
                invalidMessageCar(fields)
            }else {
                validateEntryCar(fields)
                deleteNumberError()
                deleteAfterError()
                deleteFutureError()
            }
        }
        
    })
}

function carYear() {
    var yearField = document.querySelector("#car-year")
    var val = yearField.value
    var num = parseInt(val, 10)
    var parent = yearField.parentElement 
    if (yearField.classList.contains("car-check")) {
        if (isNaN(num)) {
            insertNumberError()
        } else if (num < 1900) {
            insertAfterError()
        } else if (num > 2018) {
            insertFutureError()
        }
    }
    
}

function datePark() {
    var todayParse = Date.now()
    var entryDate = document.querySelector("#start-date").value
    var entryParse = Date.parse(entryDate)
    if(todayParse > entryParse) {
        deleteParkDateError()
        var fourDiv = document.createElement("div")
        var parkWarn = document.createTextNode("Date parking must be in the future.")
        fourDiv.setAttribute("id", "park-warn")
        fourDiv.appendChild(parkWarn)
        document.querySelector("#start-date").parentElement.appendChild(fourDiv) 
        document.querySelector("#start-date").parentElement.classList.remove("input-valid")
        document.querySelector("#start-date").parentElement.classList.add("input-invalid")
    } 
}

function daysNumber() {
    var daysField = document.querySelector("#days")
    if (daysField.classList.contains("check")) {
        if (isNaN(daysField.value)) {
            insertParkNumberError()
        } else if (daysField.value < 1 || daysField.value > 30) {
            insertLengthError()
        } 
    }
}

function cvv() {
    var cvvEntry = document.querySelector("#cvv")
    if (cvvEntry.classList.contains("check")) {
        if (isNaN(cvvEntry.value) || cvvEntry.value.length !== 3) {
            insertCvvError()
        } 
    }
}

// function cost() {
//     var price 
//     var eightDiv = document.createElement("div")
//     var costTotal = document.createTextNode("Total Price = " + price)
// }

function creditCard() {
    var creditCardEntry = document.querySelector("#credit-card")
    if (creditCardEntry.classList.contains("check")) {
        if (isNaN(creditCardEntry.value) || creditCardEntry.value.length !== 16) {
            insertCreditCardError()
        } 
        else {
            luhnCheck(creditCardEntry.value)
        }
    }
    
}

// Listener //

  function run() {

  document.querySelector("#submit-button").addEventListener('click', function (event) {
    validateForm()
    carYear()
    datePark()
    daysNumber()
    cvv()
    creditCard()
    // all validation functions called here //
    event.preventDefault()
  })
}

document.addEventListener('DOMContentLoaded', run())