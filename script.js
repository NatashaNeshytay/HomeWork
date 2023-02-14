let treeSum = [5, 7, [4, [2], 8, [1, 3], 2], [9, []], 1, 8]
  .flat(Infinity)
  .reduce((a, b) => a + b);

console.log(treeSum);








class TodoList {
  constructor() {
    this.tasks = [];
  }

  add(title) {
    this.tasks.push({
      title,
      id: this.tasks.length + 1,
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

  description() {
    const frut = "Купить банан";
    const sok = "Купить сок";
    const concat = frut.concat(" , " + sok);
  }

  showAllTasks() {
    if (this.tasks.length) {
      this.tasks.forEach((item) => {
        console.log(item);
      });
    } else {
      console.log("Нет задач");
    }
  }
}

const app = new TodoList();

app.add("Выучить JS");
app.add("Выучить React");
app.add("Выучить Angular");

app.complete(2);
app.delete(3);

app.edit({
  id: 2,
  title: "Сходить в магаз",
  isCompleted: false,
});
app.description();
app.showAllTasks();
