function validateForm (fields) {
    document.querySelectorAll("input").forEach(function (fields) {
        var val = fields.value
        if (val == '') {
            fields.parentElement.classList.add("input-invalid")
        } else {
            fields.parentElement.classList.add("input-valid")
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