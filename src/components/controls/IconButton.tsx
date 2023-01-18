
interface IconButtonParams {
  icon: string;
  action: React.MouseEventHandler<HTMLButtonElement>;
}

function IconButton({icon, action}: IconButtonParams) {
  return (
    <button className="w-12 h-12 rounded-full bg-white text-black text-xl" onClick={action} role="icon-button">
      <i className={"bi " + icon}></i>
    </button>
  );
}

export default IconButton;