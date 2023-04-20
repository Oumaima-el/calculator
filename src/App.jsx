import { useEffect, useState } from "react";
import "./App.css";

function App() {
    const [isOp1, setIsOp1] = useState(true);
    const [screen, setScreen] = useState(0);
    const [op1, setOp1] = useState(0);
    const [op2, setOp2] = useState(0);
    const [operator, setOperator] = useState("");
    const [result, setResult] = useState(0);

    function clearScreen() {
        setScreen(0);
        setOp1(0);
        setOp2(0);
        setOperator("");
        setIsOp1(true);
    }

    function deleteNumber() {
        if (isOp1) {
            setOp1(0);
        } else {
            setOp2(0);
        }
        setScreen(0);
    }
    useEffect(() => {
        console.log({ op1 });
    }, [op1]);

    useEffect(() => {
        console.log({ op2 });
    }, [op2]);

    useEffect(() => {
        console.log({ operator });
    }, [operator]);

    useEffect(() => {
        console.log({ result });
    }, [result]);

    function readNumber(number) {
        //const [op, setOp] = useState(0);

        if (isOp1) {
            /*
            if ((op1 % 1 === 0) < 10) {
                op1 = op1 * 10 + number;
            }
            if ((op1 % 10 === 0) < 10) {
                op1 = op1 * 10 + number;
            }
            if ((op1 % 10 === 0) < 10) {
                op1 = op1 * 10 + number;
            }
            */
            setOp1(number);
            setIsOp1(!isOp1);
        } else {
            setOp2(number);
            //setIsOp1(!isOp1);
        }
        setScreen(number);
    }

    function operation(op) {
        switch (op) {
            case "/":
                setOperator("/");
                break;
            case "*":
                setOperator("*");
                break;
            case "-":
                setOperator("-");
                break;
            case "+":
                setOperator("+");
                break;
            case "%":
                setOperator("%");
                break;
        }
    }

    function calculate() {
        switch (operator) {
            case "/":
                setResult(op1 / op2);
                setScreen(op1 / op2);
                setOp1(0);
                setOp2(0);
                setOperator("");
                break;
            case "*":
                setResult(op1 * op2);
                setScreen(op1 * op2);
                setOp1(0);
                setOp2(0);
                setOperator("");
                break;
            case "-":
                setResult(op1 - op2);
                setScreen(op1 - op2);
                setOp1(0);
                setOp2(0);
                setOperator("");
                break;
            case "+":
                setResult(op1 + op2);
                setScreen(op1 + op2);
                setOp1(0);
                setOp2(0);
                setOperator("");
                break;
            case "%":
                setResult(op1 % op2);
                setScreen(op1 % op2);
                setOp1(0);
                setOp2(0);
                setOperator("");
                break;
        }
    }
    /*
    numbers;
    operators;
    ac;
    c;
    calcul;
    */

    return (
        <>
            <h1 className="text-4xl font-bold">Calculator</h1>
            <div className="mt-10 bg-black rounded-lg text-white p-5  text-2xl font-medium w-80 mx-auto">
                <div className="flex justify-end items-end text-5xl h-44 px-5">
                    {screen}
                </div>
                <div className="space-y-2 mt-5">
                    <div className="flex justify-center items-center space-x-2">
                        <div
                            className="rounded-full bg-gray-300 w-14 h-14 flex justify-center items-center text-black cursor-pointer"
                            onClick={clearScreen}
                        >
                            AC
                        </div>
                        <div
                            className="rounded-full bg-gray-300 w-14 h-14 flex justify-center items-center text-black cursor-pointer"
                            onClick={deleteNumber}
                        >
                            C
                        </div>
                        <div
                            className="rounded-full bg-gray-300 w-14 h-14 flex justify-center items-center text-black cursor-pointer"
                            onClick={() => operation("%")}
                        >
                            %
                        </div>
                        <div
                            className="rounded-full bg-orange-400 w-14 h-14 flex justify-center items-center cursor-pointer"
                            onClick={() => operation("/")}
                        >
                            /
                        </div>
                    </div>
                    <div className="flex justify-center items-center space-x-2">
                        <div
                            className="rounded-full bg-gray-700 w-14 h-14 flex justify-center items-center cursor-pointer"
                            onClick={() => readNumber(7)}
                        >
                            7
                        </div>
                        <div
                            className="rounded-full bg-gray-700 w-14 h-14 flex justify-center items-center cursor-pointer"
                            onClick={() => readNumber(8)}
                        >
                            8
                        </div>
                        <div
                            className="rounded-full bg-gray-700 w-14 h-14 flex justify-center items-center cursor-pointer"
                            onClick={() => readNumber(9)}
                        >
                            9
                        </div>
                        <div
                            className="rounded-full bg-orange-400 w-14 h-14 flex justify-center items-center cursor-pointer"
                            onClick={() => operation("*")}
                        >
                            *
                        </div>
                    </div>
                    <div className="flex justify-center items-center space-x-2">
                        <div
                            className="rounded-full bg-gray-700 w-14 h-14 flex justify-center items-center cursor-pointer"
                            onClick={() => readNumber(4)}
                        >
                            4
                        </div>
                        <div
                            className="rounded-full bg-gray-700 w-14 h-14 flex justify-center items-center cursor-pointer"
                            onClick={() => readNumber(5)}
                        >
                            5
                        </div>
                        <div
                            className="rounded-full bg-gray-700 w-14 h-14 flex justify-center items-center cursor-pointer"
                            onClick={() => readNumber(6)}
                        >
                            6
                        </div>
                        <div
                            className="rounded-full bg-orange-400 w-14 h-14 flex justify-center items-center cursor-pointer"
                            onClick={() => operation("-")}
                        >
                            -
                        </div>
                    </div>
                    <div className="flex justify-center items-center space-x-2">
                        <div
                            className="rounded-full bg-gray-700 w-14 h-14 flex justify-center items-center cursor-pointer"
                            onClick={() => readNumber(1)}
                        >
                            1
                        </div>
                        <div
                            className="rounded-full bg-gray-700 w-14 h-14 flex justify-center items-center cursor-pointer"
                            onClick={() => readNumber(2)}
                        >
                            2
                        </div>
                        <div
                            className="rounded-full bg-gray-700 w-14 h-14 flex justify-center items-center cursor-pointer"
                            onClick={() => readNumber(3)}
                        >
                            3
                        </div>
                        <div
                            className="rounded-full bg-orange-400 w-14 h-14 flex justify-center items-center cursor-pointer"
                            onClick={() => operation("+")}
                        >
                            +
                        </div>
                    </div>
                    <div className="flex justify-center items-center space-x-2">
                        <div
                            className="rounded-full bg-gray-700 w-28 h-14 flex justify-center items-center cursor-pointer"
                            onClick={() => readNumber(0)}
                        >
                            0
                        </div>
                        <div className="rounded-full bg-gray-700 w-14 h-14 flex justify-center items-center cursor-pointer">
                            .
                        </div>
                        <div
                            className="rounded-full bg-orange-400 w-14 h-14 flex justify-center items-center cursor-pointer"
                            onClick={calculate}
                        >
                            =
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
