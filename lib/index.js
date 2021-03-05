'use strict';

var taskManager = new TaskManager();
taskManager.load();
taskManager.render();
var validFormFieldInput = function validFormFieldInput() {
    var newTaskNameInput = document.querySelector('#task-name');
    var name = newTaskNameInput.value;
    var newDescriptionInput = document.querySelector('#description');
    var description = newDescriptionInput.value;
    var newAssignedToInput = document.querySelector('#assigned-to');
    var assignedTo = newAssignedToInput.value;
    var newDueDateInput = document.querySelector('#due-date');
    var dueDate = newDueDateInput.value;
    if (name === "") {
        $('#name-alert').show();
        setTimeout(function () {
            $('#name-alert').hide();
        }, 2000);
        return false;
    }
    if (description === "") {
        $('#descrip-alert').show();
        setTimeout(function () {
            $('#descrip-alert').hide();
        }, 2000);
        return false;
    }
    if (assignedTo === "") {
        $('#assigned-alert').show();
        setTimeout(function () {
            $('#assigned-alert').hide();
        }, 2000);
        return false;
    }
    if (dueDate === "") {
        $('#due-alert').show();
        setTimeout(function () {
            $('#due-alert').hide();
        }, 2000);
        return false;
    }
    taskManager.addTask(name, description, assignedTo, dueDate);
    taskManager.save();
    taskManager.render();
    newTaskNameInput.value = "";
    newDescriptionInput.value = "";
    newAssignedToInput.value = "";
    newDueDateInput.value = "";
};
var tasksList = document.querySelector('#tasks');
tasksList.addEventListener('click', function (event) {
    var parentTask = event.target.parentElement.parentElement.parentElement;
    var taskId = parentTask.dataset.taskId;
    var task = taskManager.getTaskById(taskId);
    if (event.target.classList.contains('done-button')) {
        task.status = "DONE";
        taskManager.save();
        taskManager.render();
        return false;
    }
    if (event.target.classList.contains('delete-button')) {
        taskManager.deleteTask(taskId);
        taskManager.save();
        taskManager.render();
        return false;
    }
});