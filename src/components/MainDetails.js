import React from 'react'

function MainDetails({name,address}) {
    return (
        <>
            <section className="flex items-end flex-col justify-end">
                <h2 className="text-xl font-bold md:text-4xl mb-1 uppercase">{name}</h2>
                <p>{address}</p>
            </section>
        </>
    )
}

export default MainDetails
