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
      e.currentTarget.innerText = "Show Profile";
    }else{
      e.currentTarget.innerText = "Hide Profile";
    }
  }

  function hideExperiments(e) {
    sectionExperiments.classList.toggle("hidden");
    if (sectionExperiments.classList.contains("hidden")) {
      e.currentTarget.innerText = "Show Experiments";
    }else{
      e.currentTarget.innerText = "Hide Experiments";
    }
  }

  buttonHideProfile.addEventListener("click", hideProfile);
  buttonHideExperiments.addEventListener("click", hideExperiments);

 //añadimos buscador de estudiantes con un en el html
 //seleccionamos input
  var input = document.querySelector('.input-student input');
//añadimos evento para cuando escribamos en el input
  input.addEventListener('keyup', handleKeyUp);

//función para el evento
function findStudents(searchTerm){
  var results = [];
  if(searchTerm){
  results = students.filter(function(student){
    var studentName = student.name.toLowerCase();
    if(studentName.indexOf(searchTerm) !== -1){
      return true;
    }
  })
  return results;
}
}  

function displayResults (results){
  var searchResultsElement = document.querySelector('.search-results');
    searchResultsElement.innerHTML = '';
    var searchResultsListElement = document.createElement('ul');
    results.forEach(function(result){
      var resultLink = document.createElement('a');
      resultLink.innerText = result.name;
      resultLink.setAttribute('href', '../' + result.url);
      var resultListItem = document.createElement('li');
      resultListItem.appendChild(resultLink);
      searchResultsListElement.appendChild(resultListItem);
    })
    searchResultsElement.appendChild(searchResultsListElement);
}
function handleKeyUp(){
    var searchTerm = input.value.toLowerCase();
    var results = findStudents(searchTerm);
    displayResults(results);
    
  }





}

//hacemos evento para que cargue main
window.addEventListener("load", main);
