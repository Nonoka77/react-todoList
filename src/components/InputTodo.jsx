import React from "react";

export const InputTodo = (props) => {
  const { todoText, onChangeText, onClickAdd } = props;
  return (
    <div className="input-area">
      <input
        id="new-task"
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChangeText}
      />
      <button id="add-new-task" onClick={onClickAdd}>
        追加
      </button>
    </div>
  );
};
