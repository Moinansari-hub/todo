import { Fragment } from "react";
import { useSelector } from "react-redux";

import Todo from "../models/Todo";
import { RootStateType } from "../store/store";

const TodosDisplayComp = () => {
  const { todos } = useSelector((state: RootStateType) => state.todo);

  return (
    <Fragment>
      <ul>
        {todos.map((item: Todo) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </Fragment>
  );
};

export default TodosDisplayComp;
