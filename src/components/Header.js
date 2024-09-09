import React from 'react'

function Header() {

    const handlePrint = () => {
        window.print()
    
      }
    return (
        <>
            <header className="flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-between">

                
                <div>
                    <h1 className="font-bold uppercase tracking-wide text-4xl mb-3">Invoicer</h1>
                </div>

                {/* <div>
                    <ul className="flex flex-row  items-center justify-center flex-wrap">
                        <li>
                            <button onClick={handlePrint} className="bg-gray-500 py-2 px-8 rounded shadow text-white border-2 border-gray-500 font-bold hover:bg-transparent hover:text-gray-500 transition-all duration-300">Print</button>
                        </li>
                        <li className='mx-2'>
                            <button className="bg-green-500 py-2 px-8 rounded shadow text-white border-2 border-green-500 font-bold hover:bg-transparent hover:text-green-500 transition-all duration-300">Download</button>

                        </li>

                        <li>
                            <button className="bg-blue-500 py-2 px-8 rounded shadow text-white border-2 border-blue-500 font-bold hover:bg-transparent hover:text-blue-500 transition-all duration-300">Send</button>

                        </li>

                    </ul>
                </div> */}
            </header>
        </>
    )
}

export default Header
