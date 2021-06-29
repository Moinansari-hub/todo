import { Fragment } from "react";

import TodosDisplayComp from "./TodosDisplayComp";
import TodosInputComp from "./TodosInputComp";

const TodosBaseComp = () => (
  <Fragment>
    <TodosInputComp />
    <TodosDisplayComp />
  </Fragment>
);

export default TodosBaseComp;
