const employees=[
    {name: "George", age: 32, retiredate: "March 12, 2014"},
    {name: "Edward", age: 17, retiredate: "June 2, 2023"},
    {name: "Christine", age: 58, retiredate: "December 20, 2036"},
    {name: "Sarah", age: 62, retiredate: "April 30, 2020"},
    ];
    
    class ToDo {
        constructor() {
            this.tasks = employees;
        }
    
        add(title) {
            this.tasks.push ({
                title,
                id: this.tasks.lenght +1,
                isCompleted: false,
            });
            console.log(tasks)
        }
    
        delete(id) {
            this.tasks = this.tasks.filter ((item) => item.id !== id);
        }
    
        complete(id) {
            this.tasks = this.tasks.map ((item) => {
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
        const {id, title, isCompleted} = task;
        this.tasks = this.tasks.map ((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    title,
                    isCompleted,
                }
            }
            return item
        })
       }
    
        showAllTasks() {
            this.tasks = this.tasks.forEach ((item) => {
                console.log(item);
            });
        }
    }
    