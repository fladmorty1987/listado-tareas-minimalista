document.getElementById('add-task').addEventListener('click', function() {
    const taskInput = document.getElementById('new-task');
    const taskValue = taskInput.value.trim(); // Trim whitespace from input

    if (taskValue) {
        const li = document.createElement('li');
        li.textContent = taskValue;

        li.addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        li.addEventListener('contextmenu', function(e) {
            e.preventDefault();
            li.remove();
        });

        document.getElementById('task-list').appendChild(li);
        taskInput.value = '';
    }
});