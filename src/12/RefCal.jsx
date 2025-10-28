import React, { useRef, useEffect } from 'react';
import TailButton from '../component/TailButton';

export default function RefCal() {
  const txt1Ref = useRef();
  const txt2Ref = useRef();
  const txt3Ref = useRef();
  const opRef = useRef();

  const handleTxt1 = () => {
    txt1Ref.current.value = "";
    txt2Ref.current.value = "";
    txt3Ref.current.value = "";
  };

  const handleClick = (e) => {
    e.preventDefault();

    const num1 = txt1Ref.current?.value ?? "";
    const num2 = txt2Ref.current?.value ?? "";
    const op = opRef.current?.value ?? "+";

    let num3 = 0;
    switch (op) {
      case "+": num3 = Number(num1) + Number(num2); break;
      case "-": num3 = Number(num1) - Number(num2); break;
      case "x": num3 = Number(num1) * Number(num2); break;
      case "/": num3 = Number(num2) == 0 ? "오류" : Number(num1) / Number(num2); break;
    }

    txt3Ref.current.value = num3;
  };

  useEffect(() => {
    txt1Ref.current.focus();
  }, []);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <form className="w-9/10 flex justify-center bg-green-100">
        <input type="number" name="txt1" ref={txt1Ref} onFocus={handleTxt1}
          className="border border-blue-200 bg-white rounded"
        />
        <select ref={opRef}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="x">x</option>
          <option value="/">/</option>
        </select>
        <input type="number" name="txt2" ref={txt2Ref}
            className="border border-blue-200 bg-white rounded"
        />
        <TailButton
          color="blue"
          caption="="
          onHandle={handleClick}
        />
        <input type="text" name="txt3" readOnly ref={txt3Ref}
          className="border border-blue-200 bg-white rounded"
        />
      </form>
    </div>
  );
}
