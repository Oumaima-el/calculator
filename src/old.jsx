import "./App.css";

function App() {
    //const [count, setCount] = useState(0)

    return (
        <>
            <h1 className="text-4xl font-bold">Calculator</h1>
            <div className=" mx-auto bg-black rounded-lg mt-20 p-5 w-2/5">
                <div className=" h-40 w-64 bg-black text-end text-white text-7xl">
                    20
                </div>
                <table className="space-y-2 mx-auto mt-5">
                    <tr className="flex space-x-2">
                        <td className="text-xl font-medium ">
                            <button className="rounded-full bg-gray-300 w-14 h-14">
                                AC
                            </button>
                        </td>
                        <td className="text-xl font-medium">
                            <button className="rounded-full bg-gray-300 w-14 h-14">
                                C
                            </button>
                        </td>
                        <td className="text-xl font-medium">
                            <button className="rounded-full bg-gray-300 w-14 h-14">
                                %
                            </button>
                        </td>
                        <td className="text-xl font-medium text-white">
                            <button className="rounded-full w-14 h-full bg-orange-400">
                                ÷
                            </button>
                        </td>
                    </tr>
                    <tr className="flex space-x-2">
                        <td className="text-xl font-medium text-white">
                            <button className="rounded-full bg-gray-800 w-14 h-14">
                                7
                            </button>
                        </td>
                        <td className="text-xl font-medium text-white">
                            <button className="rounded-full bg-gray-800 w-14 h-14">
                                8
                            </button>
                        </td>
                        <td className="text-xl font-medium text-white">
                            <button className="rounded-full bg-gray-800 w-14 h-14">
                                9
                            </button>
                        </td>
                        <td className="text-xl font-medium text-white">
                            <button className="rounded-full w-14 h-14 bg-orange-400">
                                x
                            </button>
                        </td>
                    </tr>
                    <tr className="flex space-x-2">
                        <td className="text-xl font-medium text-white">
                            <button className="rounded-full bg-gray-800 w-14 h-14">
                                4
                            </button>
                        </td>
                        <td className="text-xl font-medium text-white">
                            <button className="rounded-full bg-gray-800 w-14 h-14">
                                5
                            </button>
                        </td>
                        <td className="text-xl font-medium text-white">
                            <button className="rounded-full bg-gray-800 w-14 h-14">
                                6
                            </button>
                        </td>
                        <td className="text-xl font-medium text-white">
                            <button className="rounded-full w-14 h-14 bg-orange-400">
                                -
                            </button>
                        </td>
                    </tr>
                    <tr className="flex space-x-2">
                        <td className="text-xl font-medium text-white">
                            <button className="rounded-full bg-gray-800 w-14 h-14">
                                1
                            </button>
                        </td>
                        <td className="text-xl font-medium text-white">
                            <button className="rounded-full bg-gray-800 w-14 h-14">
                                2
                            </button>
                        </td>
                        <td className="text-xl font-medium text-white">
                            <button className="rounded-full bg-gray-800 w-14 h-14">
                                3
                            </button>
                        </td>
                        <td className="text-xl font-medium text-white">
                            <button className="rounded-full w-14 h-14 bg-orange-400">
                                +
                            </button>
                        </td>
                    </tr>
                    <tr className="flex space-x-2">
                        <td className="text-xl font-medium text-white">
                            <button className="rounded-full bg-gray-800 w-14 h-14">
                                0
                            </button>
                        </td>
                        <td className="text-xl font-medium text-white">
                            <button className="rounded-full bg-gray-800 w-14 h-14">
                                0
                            </button>
                        </td>
                        <td className="text-xl font-medium text-white">
                            <button className="rounded-full bg-gray-800 w-14 h-14">
                                ,
                            </button>
                        </td>
                        <td className="text-xl font-medium text-white">
                            <button className="rounded-full w-14 h-14 bg-orange-400">
                                =
                            </button>
                        </td>
                    </tr>
                </table>
            </div>
        </>
    );
}

export default App;
