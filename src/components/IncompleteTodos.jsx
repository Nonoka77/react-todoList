import React from "react";

export const IncompleteTodos = (props) => {
  const { incompleteTodos, onClickDone, onClickDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul id="incomplete-list">
        {incompleteTodos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button id="completeBtn" onClick={() => onClickDone(index)}>
                完了
              </button>
              <button id="deleteBtn" onClick={() => onClickDelete(index)}>
                削除
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
