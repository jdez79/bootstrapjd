async function getTodoItem() {
    try {
        const response  = await fetch('https://jsonplaceholder.typicode.com/todos/1');

        if (!response.ok) {
            throw new Error('HTTP error! status: $(response.status)');
        }

        const todo = await response.json();
        console.log('Todo item', todo);
   } catch (error) {
        console.error('Fetch Error:', error.message);     
  } 
}

getTodoItem();