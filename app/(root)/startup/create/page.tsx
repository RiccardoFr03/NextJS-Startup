import StartupForm from '@/components/StartuoForm'
import React from 'react'

const page = () => {
    return (
        <>
            <section className='pink_container !min-h-[230px]'>
                <h1 className='heading'>Submit Yor Startup</h1>
            </section>
            <StartupForm />
        </>
    )
}

export default page