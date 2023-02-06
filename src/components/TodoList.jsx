// paragraphs
/**
const paragraphs = [
 <p key="Todo item 1-0">Todo item 1</p>,
 <p key="Todo item 2-1">Todo item 2</p>,
 <p key="Todo item 3-2">Todo item 3</p>,
...
];
 */

const TodoList = (props) => {
  if (!props.list || !props.list.length) {
    return null;
  }

  const paragraphs = props.list.map((text, index) => {
    return <p key={text + "-" + index}>{text}</p>;
  });

  return <div>{paragraphs}</div>;
};

export default TodoList;
