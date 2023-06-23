const linkDropdown = document.getElementById('more')
const locationDropdown = document.querySelector('#location')
const cardDropdown = document.querySelector('#link-dropdown')

function openLinkDropdown() {
    cardDropdown.style.display = 'flex'
}

function closeLinkDropdown() {
    cardDropdown.style.display = 'none'
}

function openLocationDropdown() {
    console.log('Abriu')
}

linkDropdown.addEventListener('mouseover', openLinkDropdown)
linkDropdown.addEventListener('mouseout', closeLinkDropdown)
cardDropdown.addEventListener('mouseover', openLinkDropdown)
cardDropdown.addEventListener('mouseout', closeLinkDropdown)
locationDropdown.addEventListener('mouseover', openLocationDropdown)

//Formulário

const formulario = document.getElementById('form');
const license = document.getElementById('license');
const invalidLicense = document.getElementById('invalid-license');
const invalidState = document.getElementById('invalid-state');
const state = document.getElementById('state');
const zip = document.getElementById('zip');
const btn = document.getElementById('btn-send')
let formLicenseValid = false
let formStateValid = false

function validLicenseInput() {
    const numberPattern = /^[0-9]/;
    if (license.value.match(numberPattern)) {
        license.style.border = '2px solid green'
        invalidLicense.style.display = 'none';
        formLicenseValid = true
        validBtnSubmit()
    } else {
        license.style.border = '2px solid red'
        invalidLicense.style.display = 'flex'
        formLicenseValid = false
    }
}

function validStateInput() {
    if (state.value === 'ma') {
        alert('Estado indisponível')
    } else if (state.value) {
        state.style.border = '2px solid green'
        invalidState.style.display = 'none'
        formStateValid = true
        validBtnSubmit()
    } else {
        state.style.border = '2px solid red'
        invalidState.style.display = 'flex'
    }
}

function validBtnSubmit() {
    if (formLicenseValid && formStateValid) {
        btn.removeAttribute('disabled')
    }
}

license.addEventListener('change', validLicenseInput)
state.addEventListener('change', validStateInput)

// Alteração dos campos do formulário
const btnLicense = document.getElementById('btn-license')
const btnVin = document.getElementById('btn-vin')
const vinFields = document.getElementById('vin-fields')
const licenseFields = document.getElementById('license-fields')

btnVin.addEventListener('click', (e) => {
    e.preventDefault()
    btnLicense.setAttribute("class", "btn")
    btnVin.classList.add('selected')
    vinFields.classList.remove('hidden')
    licenseFields.classList.add('hidden')
})

btnLicense.addEventListener('click', (e) => {
    e.preventDefault()
    btnVin.classList.remove('selected')
    btnLicense.classList.add('selected')
    vinFields.classList.add('hidden')
    licenseFields.classList.remove('hidden')
})