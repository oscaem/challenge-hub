//Challenge 1: Your Age In Days

function ageInSeconds(){
    var birthYear = prompt('What year were you born? ');
    var ageResult = (new Date().getFullYear() - birthYear) * 31536000;
    var p = document.createElement(p);
    var resultAnswer = document.createTextNode('You are ' + ageResult + ' seconds old. Wow.');
    p.setAttribute('id', 'ageInDays');
    p.appendChild(resultAnswer);
    document.getElementById('result').appendChild(p);
    console.log(ageResult);
}

function reset(){
    document.getElementById('ageInDays').remove();
}

function generateCat(){
    var image = document.createElement('img');
    var div = document.getElementById('catspace');
    image.src = "https://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);

}


