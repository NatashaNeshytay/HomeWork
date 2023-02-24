const employees = [
  { name: 'George', title: 'Director', age: 32, retiredate: 'March 12, 2014' },
  { name: 'Edward', title: 'Teacher', age: 17, retiredate: 'June 2, 2023' },
  { name: 'Christine', title: 'Teacher', age: 58, retiredate: 'December 20, 2036' },
  { name: 'Sarah', title: 'Cleaner', age: 62, retiredate: 'April 30, 2020' },
];

class ToDo {
  constructor() {
    this.tasks = employees;
  }

  add(title) {
    this.tasks.push({
      title,
      id: this.tasks.lenght + 1,
      isCompleted: false,
    });
  }

  delete(id) {
    this.tasks = this.tasks.filter((item) => item.id !== id);
  }

  complete(id) {
    this.tasks = this.tasks.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isCompleted: true,
        };
      }
      return item;
    });
  }

  edit(task) {
    const { id, title, isCompleted } = task;
    this.tasks = this.tasks.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          title,
          isCompleted,
        };
      }
      return item;
    });
  }

  sortByDate() {
    this.tasks = this.tasks.sort((a, b) => {
      const dateA = new Date(a.retiredate);
      const dateB = new Date(b.retiredate);

      return dateA - dateB;
    });
  }

    sortAge() {
      this.tasks = this.tasks.sort((a, b) => {
        return a.age - b.age;
      });
    }

    filterTitle(id) {
        this.tasks.title = this.tasks.title.filter((i) => i.id !== id);
    }

    showAllTasks() {
      this.tasks = this.tasks.forEach((item) => {
        console.log(item);
      });
    }
  
}
const employees1 = new ToDo();
employees1.sortByDate();
employees1.showAllTasks();
const employees2 = new ToDo();
employees2.sortAge();
employees2.showAllTasks();
const employees3 = new ToDo();
employees3.filterTitle();
employees3.showAllTasks();

