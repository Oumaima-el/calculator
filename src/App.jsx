import { useEffect, useState } from "react";
import "./App.css";

function App() {
    const [isOp1, setIsOp1] = useState(true);
    const [screen, setScreen] = useState("0");
    const [op1, setOp1] = useState("0");
    const [op2, setOp2] = useState("0");
    const [operator, setOperator] = useState("");
    const [result, setResult] = useState(0);

    function clearScreen() {
        setScreen("0");
        setOp1("0");
        setOp2("0");
        setResult(0);
        setOperator("");
        setIsOp1(true);
    }

    function deleteNumber() {
        if (isOp1) {
            setOp1("0");
        } else {
            setOp2("0");
        }
        setScreen("0");
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
        if (isOp1) {
            if (op1 !== "0") {
                setOp1(op1 + "" + number);
                setScreen(op1 + "" + number);
            } else {
                setOp1(number + "");
                setScreen(number + "");
            }
        } else {
            if (op2 !== "0") {
                setOp2(op2 + "" + number);
                setScreen(op2 + "" + number);
            } else {
                setOp2(number + "");
                setScreen(number + "");
            }
        }
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
        setIsOp1(!isOp1);
    }

    function calculate() {
        switch (operator) {
            case "/":
                setResult(parseFloat(op1 / op2));
                setScreen(parseFloat(op1 / op2));
                setOp1("0");
                setOp2("0");
                setOperator("");
                break;
            case "*":
                setResult(parseFloat(op1) * parseFloat(op2));
                setScreen(parseFloat(op1) * parseFloat(op2));
                setOp1("0");
                setOp2("0");
                setOperator("");
                break;
            case "-":
                setResult(parseFloat(op1) - parseFloat(op2));
                setScreen(parseFloat(op1) - parseFloat(op2));
                setOp1("0");
                setOp2("0");
                setOperator("");
                break;
            case "+":
                setResult(parseFloat(op1) + parseFloat(op2));
                setScreen(parseFloat(op1) + parseFloat(op2));
                setOp1("0");
                setOp2("0");
                setOperator("");
                break;
            case "%":
                setResult(parseFloat(op1) % parseFloat(op2));
                setScreen(parseFloat(op1) % parseFloat(op2));
                setOp1("0");
                setOp2("0");
                setOperator("");
                break;
        }
    }

    return (
        <>
            <h1 className="text-4xl font-bold">Calculator</h1>
            <pre>
                {JSON.stringify(
                    { operator, op1, op2, result, isOp1, screen },
                    null,
                    2
                )}
            </pre>
            <div className="mt-10 bg-black rounded-lg text-white p-5  text-2xl font-medium w-80 mx-auto">
                <div className="flex justify-end items-end text-5xl h-44 px-5">
                    {screen}
                </div>
                <div className="space-y-2 mt-5">
                    <div className="flex justify-center items-center space-x-2">
                        <div
                            className="rounded-full bg-gray-300 w-14 h-14 flex justify-center items-center text-black cursor-pointer active:bg-gray-50"
                            onClick={clearScreen}
                        >
                            AC
                        </div>
                        <div
                            className="rounded-full bg-gray-300 w-14 h-14 flex justify-center items-center text-black cursor-pointer active:bg-gray-50"
                            onClick={deleteNumber}
                        >
                            C
                        </div>
                        <div
                            className="rounded-full bg-gray-300 w-14 h-14 flex justify-center items-center text-black cursor-pointer active:bg-gray-50"
                            onClick={() => operation("%")}
                        >
                            %
                        </div>
                        <div
                            className="rounded-full bg-orange-400 w-14 h-14 flex justify-center items-center cursor-pointer active:bg-white active:text-orange-400"
                            onClick={() => operation("/")}
                        >
                            /
                        </div>
                    </div>
                    <div className="flex justify-center items-center space-x-2">
                        <div
                            className="rounded-full bg-gray-700 w-14 h-14 flex justify-center items-center cursor-pointer active:bg-gray-500"
                            onClick={() => readNumber(7)}
                        >
                            7
                        </div>
                        <div
                            className="rounded-full bg-gray-700 w-14 h-14 flex justify-center items-center cursor-pointer active:bg-gray-500"
                            onClick={() => readNumber(8)}
                        >
                            8
                        </div>
                        <div
                            className="rounded-full bg-gray-700 w-14 h-14 flex justify-center items-center cursor-pointer active:bg-gray-500"
                            onClick={() => readNumber(9)}
                        >
                            9
                        </div>
                        <div
                            className="rounded-full bg-orange-400 w-14 h-14 flex justify-center items-center cursor-pointer active:bg-white active:text-orange-400"
                            onClick={() => operation("*")}
                        >
                            *
                        </div>
                    </div>
                    <div className="flex justify-center items-center space-x-2">
                        <div
                            className="rounded-full bg-gray-700 w-14 h-14 flex justify-center items-center cursor-pointer active:bg-gray-500"
                            onClick={() => readNumber(4)}
                        >
                            4
                        </div>
                        <div
                            className="rounded-full bg-gray-700 w-14 h-14 flex justify-center items-center cursor-pointer active:bg-gray-500"
                            onClick={() => readNumber(5)}
                        >
                            5
                        </div>
                        <div
                            className="rounded-full bg-gray-700 w-14 h-14 flex justify-center items-center cursor-pointer active:bg-gray-500"
                            onClick={() => readNumber(6)}
                        >
                            6
                        </div>
                        <div
                            className="rounded-full bg-orange-400 w-14 h-14 flex justify-center items-center cursor-pointer active:bg-white active:text-orange-400"
                            onClick={() => operation("-")}
                        >
                            -
                        </div>
                    </div>
                    <div className="flex justify-center items-center space-x-2">
                        <div
                            className="rounded-full bg-gray-700 w-14 h-14 flex justify-center items-center cursor-pointer active:bg-gray-500"
                            onClick={() => readNumber(1)}
                        >
                            1
                        </div>
                        <div
                            className="rounded-full bg-gray-700 w-14 h-14 flex justify-center items-center cursor-pointer active:bg-gray-500"
                            onClick={() => readNumber(2)}
                        >
                            2
                        </div>
                        <div
                            className="rounded-full bg-gray-700 w-14 h-14 flex justify-center items-center cursor-pointer active:bg-gray-500"
                            onClick={() => readNumber(3)}
                        >
                            3
                        </div>
                        <div
                            className="rounded-full bg-orange-400 w-14 h-14 flex justify-center items-center cursor-pointer active:bg-white active:text-orange-400"
                            onClick={() => operation("+")}
                        >
                            +
                        </div>
                    </div>
                    <div className="flex justify-center items-center space-x-2">
                        <div
                            className="rounded-full bg-gray-700 w-28 h-14 flex justify-center items-center cursor-pointer active:bg-gray-500"
                            onClick={() => readNumber(0)}
                        >
                            0
                        </div>
                        <div className="rounded-full bg-gray-700 w-14 h-14 flex justify-center items-center cursor-pointer active:bg-gray-500">
                            .
                        </div>
                        <div
                            className="rounded-full bg-orange-400 w-14 h-14 flex justify-center items-center cursor-pointer active:bg-white active:text-orange-400"
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
