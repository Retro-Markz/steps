function StepMessage({ step, children }) {
  return (
    <>
      <p className="message text-center text-4xl font-bold pt-8 pb-8">
        <h3>Step {step}: </h3> {children}
      </p>
    </>
  );
}

export default StepMessage;
