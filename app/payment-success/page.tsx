
export default function Paymentsuccess({
    searchParams: { amount },

}: {
    searchParams: {amount: string}
}) {
    return (
        <main className="max-w-6x1 mx-auto p-10 text-center border m-10 rounded-md bg-gradient-to-tr from-red-500 to-purple-500">
            <div className="mb-10">
                <h1 className="text-4x1 font-extrabold mb-2">Thank you</h1>
                <h2 className="text-2x1"> You succesfully sent</h2>
                <div className="bg-white p-2 rounded-md text-purple-500 mt-5 text-4xl font-bold">
                    ${amount}  
                </div>
            </div>
        </main>
    )
}