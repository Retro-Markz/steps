// eslint-disable-next-line react/prop-types
function ButtonCtr({ children, classNames, funct }) {
  return (
    <div>
      <button className={classNames} onClick={funct}>
        {children}
      </button>
    </div>
  );
}

export default ButtonCtr;
