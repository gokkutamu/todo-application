/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

import confetti from 'canvas-confetti';
import { v4 as uuidV4 } from 'uuid';

confetti.create(document.getElementById('canvas') as HTMLCanvasElement, {
  resize: true,
  useWorker: true,
})({ particleCount: 200, spread: 200 });

const list = document.querySelector<HTMLUListElement>("#list__tasks");
const form = document.getElementById("form__task") as HTMLFormElement | null;
const input = document.querySelector<HTMLInputElement>("#input__task");
const btnDelete = document.querySelector(".delete");

type Task = {
  id: string, title: string, completed: boolean, createdAt: Date
}

const tasks: Task[] = loadingTasks();
tasks.forEach(addItemNewTask);

form?.addEventListener("submit", e => {
  e.preventDefault();

  if (input?.value == "" || input?.value == null) return;

  const newTask: Task = {
    id: uuidV4(),
    title: input.value,
    completed: false,
    createdAt: new Date()
  }
  tasks.push(newTask);
  saveTasks();

  addItemNewTask(newTask);
  input.value = "";
});

function addItemNewTask(task: Task) {
  const item = document.createElement("li");
  const label = document.createElement("label");
  const checkbox = document.createElement("input");
  const editInput=document.createElement("input");//text
	const editButton = document.createElement("button");//edit button
	const deleteButton = document.createElement("button");//delete button

  checkbox.addEventListener("change", () => {
    task.completed = checkbox.checked;
    /* save tasks */
    saveTasks();
  })

  deleteButton.addEventListener("click", e => {
    e.preventDefault();
    if (task.title != null) {
      localStorage.removeItem("tasks");
    }
  })

  checkbox.type = "checkbox";
  editInput.type = "text";
  checkbox.checked = task.completed;
  label.innerText = task.title;

  editButton.innerText = "Edit";
  editButton.className = "edit";
  deleteButton.innerText = "Delete";
  deleteButton.className = "delete";
  
  item.append(checkbox, label, editButton, deleteButton);
  list?.append(item);
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadingTasks(): Task[] {
  const jsonTasks = localStorage.getItem("tasks");
  if (jsonTasks == null) return [];
  return JSON.parse(jsonTasks);
}