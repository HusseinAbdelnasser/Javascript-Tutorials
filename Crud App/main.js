// Setting up variables

let theInput = document.querySelector(".add-course input");
let theAddButton = document.querySelector(".add-course .add");
let courseContainer = document.querySelector(".course-content");



// focus on input

window.onload = function(){
    theInput.focus();
}

// adding the task

theAddButton.onclick = function(){
    if(theInput.value === ''){
        swal("Sorry!", "You don't add task ", "error");
    } else {

        let noCourseMsg = document.querySelector(".no-courses-message");

        if(document.body.contains(document.querySelector('.no-courses-message'))){
            noCourseMsg.remove();
        }

        // create the main span
        let mainSpan = document.createElement("span");

        // create child span
        let childSpan = document.createElement("span");

        childSpan.className = "course";
         
        // create child text
        let childText = document.createTextNode(theInput.value)

        // adding child text to child span
        childSpan.appendChild(childText);

        // adding child span to main span
        mainSpan.appendChild(childSpan);

        // create edit button
        let editButton = document.createElement("button");

        // create delete text
        let editText = document.createTextNode("Edit Course");
  
        // adding delete text to delete btn
        editButton.appendChild(editText);
  
        editButton.className= "edit";
  
        // adding deletebtn to main span
        mainSpan.appendChild(editButton);
  

        // create delete button
        let deleteButton = document.createElement("button");

        // create delete text
        let deleteText = document.createTextNode("Delete Course");

        // adding delete text to delete btn
        deleteButton.appendChild(deleteText);

        deleteButton.className= "delete";

        // adding deletebtn to main span
        mainSpan.appendChild(deleteButton);

        mainSpan.className= "course-box";

        // adding main span to course container
        courseContainer.appendChild(mainSpan);

        // empty input value
        theInput.value = '';

        // focus on input
        theInput.focus();
    }
}



document.addEventListener('click',function(e){

    // delete task
    if(e.target.className == "delete"){

        // remove currunt task
        e.target.parentElement.remove();
        
        // check number of tasks inside the container
        if(courseContainer.childElementCount == 0){

            createNoCourses();
        }
    }

    // edit course

    if(e.target.className == "edit"){
        document.querySelector(".add-course").style.display= "none";
        document.querySelector(".update-course").style.display= "block";

        document.querySelector('.update').onclick = function(){
          e.target.previousElement.innerHTML = document.querySelector(".inputval").value
        } 
    }
});


// function to create no courses message
function createNoCourses() {

    //create message span element
    let msgSpan = document.createElement('span');

    // crate the text message
    let msgText = document.createTextNode('No Courses To show');
    
    // add text to message span
    msgSpan.appendChild(msgText);

    // add class to msg span
    msgSpan.className = 'no-courses-message';

    // append the msg span to course container
    courseContainer.appendChild(msgSpan);

}
