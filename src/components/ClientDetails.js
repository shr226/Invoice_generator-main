import React from 'react'

function ClientDetails({clientName,ClientAddress}) {
    return (
        <>
            <section className="mt-10">
                <h2 className="text-2xl  font-bold  mb-1 uppercase">{clientName}</h2>
                <p>{ClientAddress}</p>
            </section>
        </>
    )
}

export default ClientDetails
