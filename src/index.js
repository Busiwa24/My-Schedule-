import './style.css';

const allTasks = document.getElementById('all-tasks');

const taskList = [
  {
    description: 'Wake up early at 5.30 am',
    completed: false,
    id: 0,
  },
  {
    description: 'Go for a jog  at 6am',
    completed: false,
    id: 1,
  },
  {
    description: 'Start Microverse classes at 8:00 am, 
    completed: false,
    id: 2,
  },
];

const displayTasks = () => {
  allTasks.innerHTML = '';
  for (let i = 0; i < taskList.length; i += 1) {
    const each = taskList[i];
    const list = `<div class="eachTask">
      <div class="group-list">
      <input type="checkbox" class="box" id="list-box" name="list-box">
        <p class="task-name">${each.description}</p>
      </div> 
      <button class="menu-icon" id="${each.id}"><i class="fas fa-ellipsis-v"></i></button>
    </div>
    <hr>`;
    allTasks.innerHTML += list;
  }
};

window.onload = displayTasks();