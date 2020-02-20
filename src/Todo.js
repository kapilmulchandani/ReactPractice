const DELAY = 1000;
const todoById = {
  1516820260715: {
    id: '1516820260715',
    note: 'Hello Todos',
  },
  1516820289796: {
    id: '1516820289796',
    note: 'Another Todo',
  },
};
const todoIds = [
  '1516820260715',
  '1516820289796',
];
const Todo = ({ id, note }) => ({
  id,
  note,
  destroy() {
    return new Promise((resolve) => {
      delete todoById[this.id];
      todoIds.splice(todoIds.indexOf(this.id), 1);
      resolve();
    }, DELAY);
  },
});
// module.exports = {
  function create({ note }) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const id = Date.now().toString();
        todoById[id] = {
          id,
          note,
        };
        todoIds.push(id);
        resolve(Todo(todoById[id]));
      }, DELAY);
    });
  }
  function findAll() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(todoIds.map(id => Todo(todoById[id])));
      }, DELAY);
    });
  }
  function findById(id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Todo(todoById[id]));
      }, DELAY);
    });
  }

  function createToDoList(){
    var noteText = document.getElementById('noteToDo');
    this.create({ noteText});
  }

  function appendData() {
    var mainContainer = document.getElementById("myData");
    var result = await findAll();
    console.log(result.promei);
    for (var i = 0; i < todoById.length; i++) {
        var div = document.createElement("addTodosHere");
        div.innerHTML = todoById[i].note;
        mainContainer.appendChild(div);
    }
  }

// };