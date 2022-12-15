const root = document.querySelector('#root');

const toDoList = await fetch("https://jsonplaceholder.typicode.com/todos");

const toDo = await toDoList.json();

function createIdCard(bioCard){
    return `
    <section class="m-10
 bg-gradient-to-r from-cyan-500 to-blue-500; bg-amber-500; border-solid border-4 border-500">


    <h2 UserID: ${bioCard.userId} </h2>
    <ul>
        <li>ID Number ${bioCard.id}</li>
        <li>Title ${bioCard.title}</li>
        <li>Task Complete ${bioCard.complete}</li>
    </ul>
    </section>
`;
/* map it */

}
const compile = toDo.map(createIdCard).join("");
root.innerHTML = compile;
