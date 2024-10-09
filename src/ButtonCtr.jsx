function ButtonCtr({ children, classNames, onClick }) {
  return (
    <div>
      <button className={classNames} onClick={onClick}>
        {children}
      </button>
    </div>
  );
}

export default ButtonCtr;
