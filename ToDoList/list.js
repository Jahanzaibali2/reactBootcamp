var inpScreen = document.getElementById("screen");
var taskCount = 0;

function addToList() {

   taskCount += 1;

    let showTaskDiv = document.getElementById("showTask");

    //inside showTask div
    let divStore = document.createElement("div");
    divStore.className = "divStore";
    showTaskDiv.appendChild(divStore);



    // inside DivStore div
    let taskDelDiv = document.createElement("div");
    taskDelDiv.className = "taskDelDiv";
    divStore.appendChild(taskDelDiv);



    // edit
    let editButtonDiv = document.createElement("div");
    editButtonDiv.className = "editButtonDiv";
    divStore.appendChild(editButtonDiv);
    // Inside edit ButtonDiv
    let editButton = document.createElement("button");
    editButton.className = "editButton";
    // editButton.textContent = "Edit";
    let editIcon = document.createElement("img");
    editIcon.src = "/edit-text.png";
    editIcon.className = "editIcon";
    editButton.appendChild(editIcon);

    editButton.onclick = function () {

        var newValue = prompt("Edit new text");
        detailLabel.textContent = newValue;
    }

    editButtonDiv.appendChild(editButton);


    // delete 
    let DelButtonDiv = document.createElement("div");
    DelButtonDiv.className = "delButtonDiv";
    divStore.appendChild(DelButtonDiv);
    // Inside Delete ButtonDiv
    let delButton = document.createElement("button");
    delButton.className = "delButton";
    //delButton.textContent = "Delete";
    let delIcon = document.createElement("img");
    delIcon.src = "/bin.png";
    delIcon.className = "deleteIcon";
    delButton.appendChild(delIcon);


    delButton.onclick = function () {
        divStore.remove();
        taskCount -= 1;
    };
    DelButtonDiv.appendChild(delButton);


    //inside task detail div
    let detailLabel = document.createElement("label");
    detailLabel.className = "detailLabel";
    detailLabel.textContent =  taskCount +" - " + inpScreen.value;
    taskDelDiv.appendChild(detailLabel);

    inpScreen.value = "";

}

