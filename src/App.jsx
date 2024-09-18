import "./App.css";

const messages = ["Learn react", "Apply for jobs", "continue improving"];

function App() {
  return (
    <>
      <div className="container  h-[max-content]  w-[40vw] bg-gray-200 mx-auto mt-48 rounded-xl shadow-xl ">
        <div className="steps flex justify-between p-8 *:font-semibold ">
          <div className="one active ">1</div>
          <div className="two num">2</div>
          <div className="tree num">3</div>
        </div>

        <p className="message text-center font-bold pt-8 pb-8">Hello</p>

        <div className="buttons flex justify-around font-bold mt-4 pb-8">
          <button className="btn">Previus</button>
          <button className="btn">Next</button>
        </div>
      </div>
    </>
  );
}

export default App;
