import "./App.css";
import { useState } from "react";
import ButtonCtr from "./ButtonCtr";
import StepMessage from "./StepMessage";

const messages = ["Learn React ", "Apply for Jobs", "Continue Improving"];

function AppV2() {
  const [step, setStep] = useState(1);

  function handlePrev() {
    if (step > 1) setStep(step - 1);
  }

  function handleNext() {
    if (step < 3) setStep(step + 1);
  }

  return (
    <>
      <div className="container  h-[max-content]  w-[40vw] bg-gray-200 mx-auto mt-48 rounded-3xl shadow-xl ">
        <div className="steps flex justify-between p-8 *:font-semibold ">
          <div className={step >= 1 ? "active" : "num"}>1</div>
          <div className={step >= 2 ? "active" : "num"}>2</div>
          <div className={step >= 3 ? "active" : "num"}>3</div>
        </div>

        <StepMessage step={step}>{messages[step - 1]}</StepMessage>

        <div className="buttons ">
          <ButtonCtr classNames="btn" funct={() => handlePrev()}>
            <span>👈</span> Previous
          </ButtonCtr>

          <ButtonCtr classNames="btn" funct={() => handleNext()}>
            Next <span>👉</span>
          </ButtonCtr>
        </div>
      </div>
    </>
  );
}

export default AppV2;
