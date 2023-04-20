import "./App.css";

function App() {
    return (
        <>
            <h1 className="text-4xl font-bold">Calculator</h1>
            <div className="mt-10 bg-black text-white p-5 text-2xl font-medium w-2/5 mx-auto">
                <div className="flex justify-end items-end mx-24 text-5xl h-28">
                    0
                </div>
                <div className="space-y-2 mt-5">
                    <div className="flex justify-center items-center space-x-2">
                        <div className="rounded-full bg-gray-300 w-14 h-14 flex justify-center items-center text-black">
                            AC
                        </div>
                        <div className="rounded-full bg-gray-300 w-14 h-14 flex justify-center items-center text-black">
                            C
                        </div>
                        <div className="rounded-full bg-gray-300 w-14 h-14 flex justify-center items-center text-black">
                            %
                        </div>
                        <div className="rounded-full bg-orange-400 w-14 h-14 flex justify-center items-center">
                            /
                        </div>
                    </div>
                    <div className="flex justify-center items-center space-x-2">
                        <div className="rounded-full bg-gray-700 w-14 h-14 flex justify-center items-center">
                            7
                        </div>
                        <div className="rounded-full bg-gray-700 w-14 h-14 flex justify-center items-center">
                            8
                        </div>
                        <div className="rounded-full bg-gray-700 w-14 h-14 flex justify-center items-center">
                            9
                        </div>
                        <div className="rounded-full bg-orange-400 w-14 h-14 flex justify-center items-center">
                            x
                        </div>
                    </div>
                    <div className="flex justify-center items-center space-x-2">
                        <div className="rounded-full bg-gray-700 w-14 h-14 flex justify-center items-center">
                            4
                        </div>
                        <div className="rounded-full bg-gray-700 w-14 h-14 flex justify-center items-center">
                            5
                        </div>
                        <div className="rounded-full bg-gray-700 w-14 h-14 flex justify-center items-center">
                            6
                        </div>
                        <div className="rounded-full bg-orange-400 w-14 h-14 flex justify-center items-center">
                            -
                        </div>
                    </div>
                    <div className="flex justify-center items-center space-x-2">
                        <div className="rounded-full bg-gray-700 w-14 h-14 flex justify-center items-center">
                            1
                        </div>
                        <div className="rounded-full bg-gray-700 w-14 h-14 flex justify-center items-center">
                            2
                        </div>
                        <div className="rounded-full bg-gray-700 w-14 h-14 flex justify-center items-center">
                            3
                        </div>
                        <div className="rounded-full bg-orange-400 w-14 h-14 flex justify-center items-center">
                            +
                        </div>
                    </div>
                    <div className="flex justify-center items-center space-x-2">
                        <div className="rounded-full bg-gray-700 w-28 h-14 flex justify-center items-center">
                            0
                        </div>
                        <div className="rounded-full bg-gray-700 w-14 h-14 flex justify-center items-center">
                            .
                        </div>
                        <div className="rounded-full bg-orange-400 w-14 h-14 flex justify-center items-center">
                            =
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
