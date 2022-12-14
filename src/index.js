const root = document.querySelector('#root');


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
