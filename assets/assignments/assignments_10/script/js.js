var display = document.querySelector('#final-output');

$('#btn-1').on('click', () => {
    display.value = ''
})



$('#btn-3').on('click', () => {
    display.value += '/'
})

$('#btn-4').on('click', () => {
    display.value += '7'
})

$('#btn-5').on('click', () => {
    display.value += '8'
})

$('#btn-6').on('click', () => {
    display.value += '9'
})

$('#btn-7').on('click', () => {
    display.value += '*'
})

$('#btn-8').on('click', () => {
    display.value += '4'
})

$('#btn-9').on('click', () => {
    display.value += '5'
})

$('#btn-10').on('click', () => {
    display.value += '6'
})

$('#btn-11').on('click', () => {
    display.value += '-'
})

$('#btn-12').on('click', () => {
    display.value += '1'
})

$('#btn-13').on('click', () => {
    display.value += '2'
})

$('#btn-14').on('click', () => {
    display.value += '3'
})

$('#btn-15').on('click', () => {
    display.value += '+'
})

$('#btn-16').on('click', () => {
    display.value += '00'
})

$('#btn-17').on('click', () => {
    display.value += '0'
})

$('#btn-18').on('click', () => {
    display.value += '.'
})

$('#btn-19').on('click', () => {
    display.value = eval(display.value)
})