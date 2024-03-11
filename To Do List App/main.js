
// Setting up variables

let theInput = document.querySelector(".add-task input");
let theAddButton = document.querySelector(".add-task .plus");
let tasksContainer = document.querySelector(".tasks-content");
let tasksCount = document.querySelector(".tasks-count span");
let tasksCompleted = document.querySelector(".tasks-completed span");




// focus on input

window.onload = function (){
    theInput.focus();
}

// Adding the task

theAddButton.onclick = function(){
    // if input is empty
    if(theInput.value === ''){
        swal("Sorry!", "You don't add task ", "error");
    } else {

        let noTaskMsg = document.querySelector(".no-tasks-message");

        if(document.body.contains(document.querySelector('.no-tasks-message'))){
            noTaskMsg.remove();
        }

       
        // create the main span
        let mainSpan = document.createElement("span");

        // create the delete btn
        let deleteElement = document.createElement("span")

        // create text to main span
        let text = document.createTextNode(theInput.value);

        // create text to delete span
        let deleteText = document.createTextNode("delete");

        // add text to main span
        mainSpan.appendChild(text);

        // add class to main span
        mainSpan.className = "task-box";

        // add text to delete span
        deleteElement.appendChild(deleteText);

        // add class to delete span
        deleteElement.className = "delete";

        // add delete element to main span
        mainSpan.appendChild(deleteElement);

        // add the main span to tasks container
        tasksContainer.appendChild(mainSpan);

        // empty input value
        theInput.value = '';


        // focus on input
        theInput.focus();

        // calculate tasks
        calculateTasks();
    }
};


document.addEventListener('click',function(e){

    // delete task
    if(e.target.className == "delete"){

        // remove currunt task
        e.target.parentElement.remove();
       
        // check number of tasks inside the container
        if(tasksContainer.childElementCount == 0){

            createNoTasks();
        }

        // calculate tasks
        calculateTasks();
    
    }


    // finish task
    if(e.target.classlist.contains('task-box')){
        
        // toggle the task
        e.target.classlist.toggle("finished");

        // calculate tasks
        calculateTasks();
    }

    

});



// function to create no tasks message
function createNoTasks() {

    //create message span element
    let msgSpan = document.createElement('span');

    // crate the text message
    let msgText = document.createTextNode('No Tasks To show');
    
    // add text to message span
    msgSpan.appendChild(msgText);

    // add class to msg span
    msgSpan.className = 'no-tasks-message';

    // append the msg span to task container
    tasksContainer.appendChild(msgSpan);

}


// function to calculate tasks

function calculateTasks() {

    // calculate all tasks
    tasksCount.innerHTML = document.querySelectorAll('.tasks-content .task-box').length;

    // calculate complete tasks
    tasksCompleted.innerHTML = document.querySelectorAll('.tasks-content .finished').length;
}