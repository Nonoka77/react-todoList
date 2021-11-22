import React from "react";

export const InputTodo = (props) => {
  const { todoText, onChangeText, onClickAdd, disabled } = props;
  return (
    <div className="input-area">
      <input
        id="new-task"
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChangeText}
        disabled={disabled}
      />
      <button id="add-new-task" onClick={onClickAdd} disabled={disabled}>
        追加
      </button>
    </div>
  );
};
