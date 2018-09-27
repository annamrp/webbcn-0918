"use strict";

//cerramos dentro de una función para no tener variables locales
function main() {
  //seleccionamos los elementos del html
  var buttonHideProfile = document.querySelector("button.toggle-profile");
  var buttonHideExperiments = document.querySelector("button.toggle-experiments");
  var sectionProfile = document.querySelector("section.profile");
  var sectionExperiments = document.querySelector("section.experiments");

  function hideProfile(e) {
    sectionProfile.classList.toggle("hidden");
    if (sectionProfile.classList.contains("hidden")) {
      e.currentTarget.innerText = "Show Section";
    } else {
      e.currentTarget.innerText = "Hide Section";
    }
  }

  function hideExperiments(e) {
    sectionExperiments.classList.toggle("hidden");
    if (sectionExperiments.classList.contains("hidden")) {
      e.currentTarget.innerText = "Show Section";
    } else {
      e.currentTarget.innerText = "Hide Section";
    }
  }

  buttonHideProfile.addEventListener("click", hideProfile);
  buttonHideExperiments.addEventListener("click", hideExperiments);

  //añadimos buscador de estudiantes con un en el html
  //seleccionamos input
  var input = document.querySelector(".input-student input");
  //Sacamos la variable fuera de la función displayResults para poder acceder a ella desde el evento para la tecla Escape
  var searchResultsElement = document.querySelector(".search-results");
  //añadimos evento para cuando escribamos en el input y llamamos a función
  input.addEventListener("keyup", handleKeyUp);
  //Evento para que cuando hacemos click en el input no nos borre la búsqueda
  input.addEventListener("click", function(event) {
    event.stopPropagation();
  });
  //Evento para que al apretar la tecla 'Escape' nos cierre la lista de búsqueda
  document.body.addEventListener("keyup", function() {
    if (event.key === "Escape") {
      searchResultsElement.innerHTML = "";
    }
  });
  //Evento para que al hacer click fuera del input nos cierre la lista de búsqueda
  document.body.addEventListener("click", function() {
    searchResultsElement.innerHTML = "";
  });

 
  function findStudents(searchTerm) {
    var results = [];
    if (searchTerm) {
      results = students.filter(function(student) {
        var studentName = student.name.toLowerCase();
        if (studentName.indexOf(searchTerm) !== -1) {
          return true;
        }
      });
    }
    return results;
  }

  function displayResults(results) {
    searchResultsElement.innerHTML = "";
    var searchResultsListElement = document.createElement("ul");
    results.forEach(function(result) {
      var resultLink = document.createElement("a");
      resultLink.innerText = result.name;
      resultLink.setAttribute("href", "../" + result.url);
      var resultListItem = document.createElement("li");
      resultListItem.appendChild(resultLink);
      searchResultsListElement.appendChild(resultListItem);
    });
    searchResultsElement.appendChild(searchResultsListElement);
  }

   //función para el evento
  function handleKeyUp() {
    var searchTerm = input.value.toLowerCase();
    //llamamos a la función findStudents con el argumento searchTerm
    var results = findStudents(searchTerm);
    displayResults(results);
  }

//juego cuenta atrás
var startButton = document.querySelector('.start-button');
var stopButton = document.querySelector('.stop-button');
var number = document.querySelector('.counter-box');

startButton.addEventListener('click', startCounter);
stopButton.addEventListener('click', stopCounter)
var intervalID = 0;
var timeLeft = 10;
function startCounter(){
  intervalID = setInterval(function(){
    timeLeft --;
    number.innerHTML = timeLeft;
    if(timeLeft <= 0){
      clearInterval(intervalID);
    }
},1000);
return timeLeft;
}
function stopCounter(){
  clearInterval(intervalID);
}

}
//hacemos evento para que cargue main
window.addEventListener("load", main);
