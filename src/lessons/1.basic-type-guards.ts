type Todo = {
  title: string;
  priority: 'High' | 'Normal' | 'Low';
  isComplete: boolean;
  description?: string;
  dueDate: Date | string;
};

function extendTodo(todo: Todo) {
  console.log(todo.dueDate.getDate());
  //  method 1
  if (todo.dueDate instanceof Date) {
    console.log(todo.dueDate.getDate());
  } else {
    console.log(todo.dueDate);
  }

  //  method 2
  if (todo.dueDate instanceof Date) {
    console.log(todo.dueDate.getDate());
    return;
  } else if (typeof todo.dueDate === 'number') {
    console.log(todo.dueDate);
    return;
  }

  console.log(todo.dueDate);
}

function getDescriptionLength(todo: Todo) {
  // console.log(todo.description.length);

  // method 1
  if (todo.description) {
    console.log(todo.description.length);
  }

  // method 2
  if (typeof todo.description === 'string') {
    console.log(todo.description.length);
  }

  // method 3
  return todo.description?.length;
}

type SuccessState = {
  status: 'success';
  data: any;
};

type ErrorState = {
  status: 'error';
  error: Error;
};

type State = SuccessState | ErrorState;

function handleState(state: State) {
  if (state.status === 'success') {
    console.log(state.data);
  } else {
    console.log(state.error);
  }
}

function handleState2(items: string[] | string) {
  if (Array.isArray(items)) {
    console.log(items.length);
  } else {
    console.log(items);
  }
}
