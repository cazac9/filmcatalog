
interface ActionButtonParams {
  title: string;
  action: React.MouseEventHandler<HTMLButtonElement>;
}

function ActionButton({title, action}: ActionButtonParams) {
  return (
    <button className="bg-blue-500 margin-x-auto hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={action} role="action-button">
      {title}
    </button>
  );
}

export default ActionButton;