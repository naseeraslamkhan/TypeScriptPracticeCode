console.log('Hello I am here type requiredUtility file');
interface Todo {
    title: string;
    description: string;
  }
  
  function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return { ...todo, ...fieldsToUpdate };
  }
  
  const todo1 = {
    title: "organize desk",
    description: "clear clutter",
  };
  
  const todo2 = updateTodo(todo1, {
    title: "Update Desk",

    description: "throw out trash",
  });
  console.log(todo2.description)
  console.log(todo2.title)
 