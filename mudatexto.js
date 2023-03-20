function changeTitle() {
  var inputText = document.getElementsByClassName("input-text")[0].value; // Obtém o valor do input de texto
  document.getElementsByClassName("title")[0].innerHTML = inputText; // Define o valor do input de texto como o novo conteúdo da tag h1
  document.getElementsByClassName("title")[1].innerHTML = inputText; // Define o valor do input de texto como o novo conteúdo da tag h1
  document.getElementsByClassName("title")[2].innerHTML = inputText; // Define o valor do input de texto como o novo conteúdo da tag h1
  document.getElementsByClassName("title")[3].innerHTML = inputText; // Define o valor do input de texto como o novo conteúdo da tag h1
  document.getElementsByClassName("title")[4].innerHTML = inputText; // Define o valor do input de texto como o novo conteúdo da tag h1

  if(inputText==""){ //redefine o valor do input em cada caixa de texto
    document.getElementsByClassName("title")[0].innerHTML = "Monospace";
  document.getElementsByClassName("title")[1].innerHTML = "Sans-Serif"; 
  document.getElementsByClassName("title")[2].innerHTML = "Serif"; 
  document.getElementsByClassName("title")[3].innerHTML = "Handwriting"; 
  document.getElementsByClassName("title")[4].innerHTML = "Display";
  }
}