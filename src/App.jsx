import "./App.css";

const messages = ["Learn react ", "Apply for jobs", "continue improving"];

function App() {
  const step = 1;
  return (
    <>
      <div className="container  h-[max-content]  w-[40vw] bg-gray-200 mx-auto mt-48 rounded-xl shadow-xl ">
        <div className="steps flex justify-between p-8 *:font-semibold ">
          <div className={`${step >= 1 ? "active" : "num"}`}>1</div>
          <div className={`${step >= 2 ? "active" : "num"}`}>2</div>
          <div className={`${step >= 3 ? "active" : "num"}`}>3</div>
        </div>

        <p className="message text-center text-4xl font-bold pt-8 pb-8">
          Step {step}: {messages[step - 1]}
        </p>

        <div className="buttons flex justify-around font-bold mt-4 pb-8">
          <button className="btn">Previus</button>
          <button className="btn">Next</button>
        </div>
      </div>
    </>
  );
}

export default App;
