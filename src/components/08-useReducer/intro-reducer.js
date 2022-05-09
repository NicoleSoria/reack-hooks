
//Estado inicial
const initialState = [{
  id: 1,
  todo: 'Comprar pan',
  done: false
}];

const todoReducer = (state = initialState, action) => {

  //Acciones
  if (action?.type === 'agregar') {
    return [...state, action.payload];
  }

  return state; //Siempre retorna un state
}

// inicializacion de reducer
let todos = todoReducer();

const newTodo = {
  id: 2,
  todo: 'Comprar leche',
  done: false
};

//Creo accion
const agregarTodoAction = {
  type: 'agregar',
  payload: newTodo
}

todos = todoReducer(todos, agregarTodoAction);

console.log(todos);