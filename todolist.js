let MasterTodoList = []; 
let addBtn = document.getElementById("addbutton");
let txtBox = document.getElementById("textbox"); 
let todoList = document.getElementById("todolist"); 
let doneOnly = document. getElementById("doneonly"); 


function addList()
{  
let todoitem = 
{ text: txtBox.value , isdone: false}
  
MasterTodoList.push(todoitem); 
   render() ; 
}
let hasbeendone = (i) => { MasterTodoList[i].isdone = ! MasterTodoList[i].isdone; render()}

let render = function()
 {   
 
    todoList.innerHTML = MasterTodoList.map((todo, i) => 
    { if (todo.isdone)
     { return `<li> <s> ${todo.text} </s> <a href='#' onclick='hasbeendone(${i})'> Mark Undone </a> <a href='#' onclick='remove(${i})'> Remove </a> </li>`;
     }
     else {return `<li> ${todo.text} <a href='#' onclick='hasbeendone(${i})'> Mark Done </a> <a href='#' onclick='remove(${i})'> Remove </a> </li>`; 
     } 
} ).join(" ");}


function remove(i) { 
    MasterTodoList.splice(i,1);
    render();  }



addBtn.addEventListener("click",addList); 
//doneOnly.addEventListener ("checked", showundone); 

MasterTodoList = [{text: 'orange', isdone: false}, {text:'banana', isdone: true}];

console.log(MasterTodoList); 



