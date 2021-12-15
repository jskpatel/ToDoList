import React from 'react'

function BgColorChange({ setBgColor }) {

    const myStyle = {
        display: 'inline-block',
        height: '20px',
        width: '25%',
        fontSize: '0',
        cursor: 'pointer'
    }

    return (
        <>
            <span className='bg_floralwhite' style={myStyle} onClick={() => setBgColor('bg_floralwhite')}>Yellow</span>
            <span className='bg_orange' style={myStyle} onClick={() => setBgColor('bg_orange')}>Yellow</span>
            <span className='bg_blue' style={myStyle} onClick={() => setBgColor('bg_blue')}>Blue</span>
            <span className='bg_gray' style={myStyle} onClick={() => setBgColor('bg_gray')}>Yellow</span>
            <span className='bg_red' style={myStyle} onClick={() => setBgColor('bg_red')}>Red</span>
            <span className='bg_purple' style={myStyle} onClick={() => setBgColor('bg_purple')}>Yellow</span>
            <span className='bg_green' style={myStyle} onClick={() => setBgColor('bg_green')}>Green</span>
            <span className='bg_yellow' style={myStyle} onClick={() => setBgColor('bg_yellow')}>Yellow</span>
        </>
    )
}

export default BgColorChange
