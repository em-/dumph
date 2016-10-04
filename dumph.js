console.log("dumph");
window.addEventListener("load", function load(event){
  console.log("load");

  document.addEventListener("click", function clickProjectFilter(event){
    console.log('click:', event);
    var projectFilter = event.target.dataset.projectFilter;
    if (!projectFilter)
      return;
    console.log('projectFilter:', projectFilter);
    var toptasks = document.body.querySelectorAll("[data-top-task='true']");
    for (task of toptasks) {
      console.log('toptask:', task);
      var projects = task.dataset.taskProjects.split(',');
      var matching = projectFilter != "all" ? projects.includes(projectFilter) : true;
      task.classList.toggle('task-project-hidden', !matching);
    }
  });

  document.addEventListener("click", function clickPriorityFilter(event){
    console.log('click:', event);
    var priorityFilter = event.target.dataset.priorityFilter;
    if (!priorityFilter)
      return;
    console.log('priorityFilter:', priorityFilter);
    var toptasks = document.body.querySelectorAll("[data-top-task='true']");
    for (task of toptasks) {
      console.log('toptask:', task);
      var priority = task.dataset.taskPriority
      var matching = priorityFilter != "all" ? priority == priorityFilter : true;
      task.classList.toggle('task-priority-hidden', !matching);
    }
  });
});

