import React from 'react'
function Navbar() {
    return (
        <div className='fixed top-0 left-0 z-20 w-full bg-gradient-to-r from-[#3d71c4] to-[#20bbd6]'>
            <div className='mx-5 flex p-3 justify-between'>
                <div className=''><a href="https://private-share.vercel.app/"><p className='text-white font-bold text-4xl max-[640px]:text-3xl font-Montserrat'>Private Share</p></a></div>
                <div className='mx-3'><a href='https://github.com/SYN2002/PrivateShare' target="_blank" rel="noreferrer">
                <img src="https://img.icons8.com/ios-glyphs/30/ffffff/github.png"></img>
                </a></div>
            </div>
        </div>

    )
}

export default Navbar