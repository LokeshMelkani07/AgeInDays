console.log('This is challenge 1');

let result = document.getElementById('result');
function clickMe() {
    let birthYear = prompt('What is your Birth Year ?');
    let calc = (2022 - birthYear) * 365;
    result.innerHTML = `<h2> Your age in days is ${calc} </h2>`;
    result.style.border = 'solid black 5px';
    result.style.paddingTop = '5px';
    result.style.marginTop = '5px';
}
function reSet() {
    result.innerHTML = '';
    result.style.removeProperty('border');
}