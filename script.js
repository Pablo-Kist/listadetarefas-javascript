let input = document.querySelector(".input");
let list = document.querySelector(".list");

let tasks = [
  {
    done: false,
    title: "Estudar javascript",
  },
  { done: true, title: "Comprar corante pro bolo" },
  { done: false, title: "Fazer academia" },
];

input.addEventListener("keyup", (e) => {
  if (e.key.toLowerCase() === "enter" && input.value !== "") {
    tasks.push({
      done: false,
      title: input.value,
    });
    input.value = "";
    renderList();
  }
});

/*function renderList() {
  list.innerHTML = "";
  for (let i in tasks) {
    let liTask = document.createElement("li");

    let checkboxTask = document.createElement("input");
    checkboxTask.setAttribute("type", "checkbox");
    if (tasks[i].done === true) {
      checkboxTask.setAttribute("checked", "true");
      liTask.classList.add("done");
    }
    checkboxTask.onclick = () => {
      tasks[i].done = !tasks[i].done;
      renderList();
    };

    liTask.appendChild(checkboxTask);

    let spanTask = document.createElement("span");
    spanTask.innerHTML = tasks[i].title;
    liTask.appendChild(spanTask);

    list.appendChild(liTask);
  }
}

renderList();*/
function renderList() {
  list.innerHTML = "";
  for (let i of tasks) {
    let liTask = document.createElement("li");

    let checkboxTask = document.createElement("input");
    checkboxTask.setAttribute("type", "checkbox");
    if (i.done === true) {
      checkboxTask.setAttribute("checked", "true");
      liTask.classList.add("done");
    }
    checkboxTask.onclick = () => {
      i.done = !i.done;
      renderList();
    };

    liTask.appendChild(checkboxTask);

    let spanTask = document.createElement("span");
    spanTask.innerHTML = i.title;

    liTask.appendChild(spanTask);

    list.appendChild(liTask);
  }
}

renderList();
