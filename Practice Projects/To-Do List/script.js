let main = document.querySelector('main');

function manageTask(event) {
    let target = event.target.parentElement.parentElement;
    if (["daily-todoList", "weekly-todoList", "mounthly-todoList"].includes(target.className) && event.target.parentElement.tagName === "H3") {
        let task = prompt("Enter your task: ");
        if (task) {
            let li = document.createElement('li');
            li.innerHTML = `<i class="fa-solid fa-check task-done"></i> ${task} <i class="fa-solid fa-xmark task-failed"></i> <button class="delete-btn">Delete</button>`;

            target.children[1].append(li);
        }
    }

    if (target.tagName === 'UL') {
        let targetClicked = event.target;

        if (targetClicked.className === "delete-btn") {
            targetClicked.parentElement.remove();
        }

        if (targetClicked.className.includes("task-done")) {
            targetClicked.parentElement.style.textDecoration = "line-through";
            targetClicked.parentElement.style.color = "green";
        }

        if (targetClicked.className.includes("task-failed")) {
            targetClicked.parentElement.style.textDecoration = "line-through";
            targetClicked.parentElement.style.color = "red";
        }
    }
}

main.addEventListener('click', manageTask);