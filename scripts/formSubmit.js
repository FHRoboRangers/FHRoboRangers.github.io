

function getTextFromForm() {
  var contactForm = document.getElementById("form");
  return contactForm;
 }

  function checkContents(formArray){
     var name = formArray.elements[0].value;
     var email = formArray.elements[1].value;
     var message = formArray.elements[2].value;
     return name == "" || email == "" || message == "";
  }

 function onClicked(){
    var array = getTextFromForm();
    var isEmpty = checkContents(array);
    if(isEmpty == true){
        window.alert("Complete the form.");
        return;
    }
    else
        window.alert("You did the form :)");
 }