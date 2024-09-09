import React from 'react'

function Notes({notes}) {
    return (
        <>
            <section className=" mt-10 mb-5">
                <p className='text-justify lg:w-1/2'>{notes}</p>
            </section>
        </>
    )
}

export default Notes
