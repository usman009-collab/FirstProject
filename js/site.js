let count = 0;

function addTask() {
    count++;
    let taskTemplate = `<li class="item list-group-item">Task ${count}</li>`;
    let element = document.getElementById("list");
    element.innerHTML += taskTemplate;
}
