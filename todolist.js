let MasterTodoList = [];
let addBtn = document.getElementById("addbutton");
let txtBox = document.getElementById("textbox");
let todoList = document.getElementById("todolist");
let doneOnly = document.getElementById("doneonly");


function addList() {
    let todoitem =
        { text: txtBox.value, isdone: false }

    MasterTodoList.push(todoitem);
    render();
    txtBox.value=""; 
}
let hasbeendone = (i) => { MasterTodoList[i].isdone = !MasterTodoList[i].isdone; render(); }

let render = function () {
    let undonearr;
    if (checked) {
        undonearr = MasterTodoList.filter(item => item.isdone == false);
        todoList.innerHTML = undonearr.map((todo, i) => {
            return `<li> ${todo.text} <a href='#' onclick='hasbeendone(${i})'> Mark Done </a> </span> <a href='#' onclick='remove(${i})'> X  </a> </li>`;
        }).join(" ");
    }

    else {
        todoList.innerHTML = MasterTodoList.map((todo, i) => {
            if (todo.isdone) {
                return `<li> <s> ${todo.text} </s> <a href='#' onclick='hasbeendone(${i})'> Mark Undone </a> <a href='#' onclick='remove(${i})'> Remove </a> </li>`;
            }
            else {
                return `<li> ${todo.text} <a href='#' onclick='hasbeendone(${i})'> Mark Done </a> <a href='#' onclick='remove(${i})'> X </a> </li>`;
            }
        }).join(" ");
    }
}


function remove(i) {
    MasterTodoList.splice(i, 1);
    render();
}
let checked = false;

function showundone() {
    if (doneOnly.checked) { checked = true; render(); }
    else { checked = false; render(); }
}

addBtn.addEventListener("click", addList);
doneOnly.addEventListener("change", showundone);

//localStorage.setItem('Masterlist', MasterTodoList); 








