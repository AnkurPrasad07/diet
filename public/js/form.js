const btn_primary_one = document.getElementById("btn-primary-1")
const btn_primary_two = document.getElementById("btn-primary-2")
const btn_primary_three = document.getElementById("btn-primary-3")

const btn_secondary_two = document.getElementById("btn-secondary-2")
const btn_secondary_three = document.getElementById("btn-secondary-3")
const btn_secondary_four = document.getElementById("btn-secondary-4")


const form_one = document.getElementById("form-part-1")
const form_two = document.getElementById("form-part-2")
const form_three = document.getElementById("form-part-3")
const form_four = document.getElementById("form-part-4")

btn_primary_one.addEventListener("click", ()=>{
    form_two.classList.add("active-form")
    form_one.classList.remove("active-form")
})

btn_primary_two.addEventListener("click", ()=>{
    form_three.classList.add("active-form")
    form_two.classList.remove("active-form")
})

btn_primary_three.addEventListener("click", ()=>{
    form_four.classList.add("active-form")
    form_three.classList.remove("active-form")
})

// secondary btn

btn_secondary_two.addEventListener("click", ()=>{
    form_one.classList.add("active-form")
    form_two.classList.remove("active-form")
})


btn_secondary_three.addEventListener("click", ()=>{
    form_two.classList.add("active-form")
    form_three.classList.remove("active-form")
})


btn_secondary_four.addEventListener("click", ()=>{
    form_three.classList.add("active-form")
    form_four.classList.remove("active-form")
})
