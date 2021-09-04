import './style.css';
import completedStatus from './script';

const allTasks = document.getElementById('all-tasks');

// eslint-disable-next-line prefer-const
let taskList = [
  {
    description: 'Wake up early at 5.30am',
    completed: false,
    id: 0,
  },
  {
    description: 'Go jogging at 6am',
    completed: false,
    id: 1,
  },
  {
    description: 'Start Microverse coursework at 8am',
    completed: false,
    id: 2,
  },
];

const displayTasks = () => {
  if (localStorage.getItem('taskList') !== null) {
    taskList = JSON.parse(localStorage.getItem('taskList'));
  }
  allTasks.innerHTML = '';
  for (let i = 0; i < taskList.length; i += 1) {
    const each = taskList[i];

    const eachTask = document.createElement('div');
    eachTask.className = 'eachTask';

    const list = document.createElement('div');
    list.className = 'group-list';

    const input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    input.setAttribute('class', 'check-box');
    input.id = each.id;
    input.checked = each.completed;
    // eslint-disable-next-line no-loop-func
    input.addEventListener('change', () => {
      completedStatus(each, taskList);
    });

    list.appendChild(input);

    const label = document.createElement('label');
    label.innerHTML = `${each.description}`;
    label.className = 'form-label';
    list.appendChild(label);

    eachTask.appendChild(list);

    const button = document.createElement('button');
    button.innerHTML = '<i class="fas fa-ellipsis-v">';
    button.className = 'menu-icon';
    eachTask.appendChild(button);

    allTasks.appendChild(eachTask);
  }
  localStorage.setItem('taskList', JSON.stringify(taskList));
  displayTasks();
};

removeAll.addEventListener('click', () => {
  taskList = taskList.filter((task) => !task.completed);
  let reset = 0;
  taskList.forEach((task) => {
    reset += 1;
    task.id = reset;
  });
  localStorage.setItem('taskList', JSON.stringify(taskList));
  displayTasks();
});

insert.addEventListener('click', (e, taskList) => {
  if (localStorage.getItem('taskList') !== null) {
    taskList = JSON.parse(localStorage.getItem('taskList'));
  }
  e.preventDefault();
  addTaskList(taskList);
});

export default displayTasks;

window.onload = displayTasks();