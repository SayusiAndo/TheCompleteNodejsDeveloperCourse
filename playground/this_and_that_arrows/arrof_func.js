const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    }, {
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }],

    getTasksTodo() {
        const incompleteItems = this.tasks.filter((item) => item.completed === false)
        incompleteItems.forEach((item) => console.log(item.text))
    }
}

tasks.getTasksTodo()
