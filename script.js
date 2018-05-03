function validateForm (fields) {
    document.querySelectorAll("input").forEach(function (fields) {
        var val = fields.value
        var par = fields.parentElement
        if (par.classList.contains("input-field")) {
            if (val == '') {
                fields.parentElement.classList.add("input-invalid")
            } else {
                fields.parentElement.classList.add("input-valid")
            }
        } else {
            if (val == '') {
                fields.parentElement.parentElement.classList.add("input-invalid")
            } else {
                fields.parentElement.parentElement.classList.add("input-valid")
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