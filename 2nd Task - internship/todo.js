document.addEventListener('DOMContentLoaded', () => {
    const addTaskBtn = document.getElementById('add-task-btn');
    const newTaskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    addTaskBtn.addEventListener('click', addTask);
    newTaskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addTask();
    });

    function addTask() {
        const taskText = newTaskInput.value.trim();
        if (taskText === '') return;

        const listItem = document.createElement('li');

        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        listItem.appendChild(taskSpan);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', deleteTask);
        listItem.appendChild(deleteBtn);

        listItem.addEventListener('click', toggleTaskCompletion);

        taskList.appendChild(listItem);
        newTaskInput.value = '';
    }

    function deleteTask(event) {
        event.stopPropagation();
        const listItem = event.target.parentElement;
        taskList.removeChild(listItem);
    }

    function toggleTaskCompletion(event) {
        if (event.target.tagName === 'LI' || event.target.tagName === 'SPAN') {
            event.currentTarget.classList.toggle('completed');
        }
    }
});
