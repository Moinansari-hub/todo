import { ChangeEvent, FormEvent, Fragment, useState } from "react";
import { useDispatch } from "react-redux";

import { DispatchType } from "../store/store";
import { TodoActions } from "../store/todoSlice";

const TodosInputComp = () => {
  const [todoInput, setTodoInput] = useState<string>("");

  const dispatch: DispatchType = useDispatch();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setTodoInput(value);
  };

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();

    dispatch(TodoActions.add(todoInput));
    setTodoInput("");
  };

  return (
    <Fragment>
      <form action="" onSubmit={handleFormSubmit}>
        <label htmlFor="todoInput"></label>
        <input
          onChange={handleInputChange}
          value={todoInput}
          type="text"
          name="todoInput"
          id="todoInput"
          required
        />
        <input type="submit" value="Add" />
      </form>
    </Fragment>
  );
};

export default TodosInputComp;
