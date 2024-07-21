

let btn = document.querySelector('#btn');

let task = document.querySelector('#task');


document.addEventListener('DOMContentLoaded' , getTask)

btn.addEventListener('click', addTask);




// when we dont need local storage

// function addTask() {
//     let taskValue = task.value ; //we get the value from the input and save it

//     let myli = document.createElement('li'); //for ul list , we create li s

//     myli.innerHTML = taskValue; //transfer the value and present it in the list li s

//     let taskList = document.querySelector('#taskList');
//     taskList.appendChild(myli); //give li s the values we entered in to the input
// }



function addTask() {

    let taskArray;

    if (JSON.parse(localStorage.getItem('taskKey')) == null) {
        taskArray = [];

    } 
    
    else {
        taskArray = JSON.parse(localStorage.getItem('taskKey'));
    }

    
    let taskValue = task.value ; //we get the value from the input and save it

    taskArray.push(taskValue); //push the values to the array

    localStorage.setItem('taskKey', JSON.stringify(taskArray));
}


function getTask() {
    let tasks = JSON.parse(localStorage.getItem('taskKey'));
    
    tasks.forEach(item => {
        let myli = document.createElement('li');
        myli.innerHTML = item;
        document.getElementById('taskList').appendChild(myli);
    });
}










