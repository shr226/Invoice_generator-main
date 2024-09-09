import React from 'react'

function Table({ list, total }) {
    return (
        <>
            <table width="100%" className='mb-10'>
                <thead >
                    <tr className='bg-gray-100 p-1 '>
                        <td className='font-bold'>Item description</td>
                        <td className='font-bold'>Quantity</td>
                        <td className='font-bold'>Price</td>
                        <td className='font-bold'>Amount</td>
                    </tr>
                </thead>
                {list.map(({ id, description, quantity, price, amount }) => (
                    <React.Fragment key={id}>
                        <tbody>
                            <tr>
                                <td>{description}</td>
                                <td>{quantity}</td>
                                <td>{price}</td>
                                <td>{amount}</td>
                            </tr>
                        </tbody>
                    </React.Fragment>
                ))

                }
            </table>
            <div className="mt-6 text-right">
                <h2 className="text-3xl font-semibold text-black">
                    Total: <span className="font-bold">{total.toLocaleString()}</span>
                </h2>
            </div>

        </>
    )
}

export default Table
