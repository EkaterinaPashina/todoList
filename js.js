const button = document.querySelector("#buttonadd");
const clearbtn = document.getElementById('buttonclear');
let input = document.getElementById('task');
let emptyTask = document.querySelector(".emptyTask");
let parent = document.getElementById('ul');

function addTask() {
    if (input.value) {
        emptyTask.classList.add('displaynone');
        let liTask = document.createElement('li');
        liTask.className = 'taskline';
        parent.appendChild(liTask);

        let task = document.createElement('input');
        task.type = "checkbox";
        task.className = 'input_style';
        task.value = input.value;
        liTask.appendChild(task);

        let label = document.createElement('label');
        label.innerHTML = input.value;
        liTask.appendChild(label);

        input.value = '';
        clearbtn.removeAttribute('disabled');
    }
}

button.addEventListener('click', addTask);

parent.addEventListener('click', function (task) {
    if (task.target.tagName === 'LI') {
        task.target.classList.toggle('checked');

    } else if (task.target.tagName === 'SPAN') {
        task.target.parentElement.remove();
    }
});

function deleteTasks() {
    parent.innerHTML = '';
    emptyTask.classList.remove('displaynone');
    clearbtn.disabled = true;
}

clearbtn.addEventListener('click', deleteTasks);

liinputvalue