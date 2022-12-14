const root = document.querySelector('#root');

const toDoList = await fetch("https://jsonplaceholder.typicode.com/todos");

const toDo = await toDoList.json();

function createIdCard(bioCard){
    return `
    <h2>User ID ${bioCard.userId}</h2>
    <div>ID Number ${bioCard.id}</div>
    <div>Title ${bioCard.title}</div>
    <div>Task Completed ${bioCard.completed}</div>
    `;
/* map it */

}
const compile = toDo.map(createIdCard).join("");
root.innerHTML = compile;
