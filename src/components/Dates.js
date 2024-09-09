import React from 'react';

function Dates({ invoiceNumber, invoiceDate, dueDate }) {
    return (
        <article className="mt-10 mb-14 flex flex-col items-end justify-end">
            <ul >
                <li className='p-1'>
                    <span className="font-bold">Invoice Number:</span> {invoiceNumber}
                </li>
                <li className='bg-gray-100 p-1'>
                    <span className="font-bold">Invoice Date:</span> {invoiceDate}
                </li>
                <li className='p-1'>
                    <span className="font-bold">Due Date:</span> {dueDate}
                </li>
            </ul>
        </article>
    );
}

export default Dates;

