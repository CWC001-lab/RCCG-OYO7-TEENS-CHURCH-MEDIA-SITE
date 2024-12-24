/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import "./Home.css"
import data from '../../context/data'
import Sidebar from '../sidebar/Sidebar'

const Home = () => {
    return (
        <>
            <main className='Container'>
                <div className='MainDialogBox'>
                    {data.map((item, index) => (
                        <div 
                            className={`ImageContainer ${item.isPortrait ? 'portrait' : 'landscape'} ${getGridAreaClass(index)}`} 
                            key={index}
                        >
                            <img src={item.image} alt={`Image ${index + 1}`} />
                            <div className='Overlay'>
                                <p>{item.description1}</p>
                                <p>{item.description2}</p>
                                <button onClick={() => downloadImage(item.image)}>Download</button>
                            </div>
                        </div>
                    ))}
                </div>

                <Sidebar />
            </main>
        </>
    )
}

const getGridAreaClass = (index) => {
    const gridClasses = [
        'one', 'two',                     // First row: 60%, 30%
        'three', 'four', 'five',          // Second row: 20%, 50%, 20%
        'six', 'seven',                   // Third row: 45%, 45%
        'eight', 'nine', 'ten',           // Fourth row: 30%, 30%, 30%
        'eleven', 'twelve', 'thirteen',   // Fifth row: 20%, 50%, 20%
        'fourteen', 'fifteen'             // Sixth row: 60%, 30%
    ];
    return gridClasses[index] || '';
}

const downloadImage = (url) => {
    const link = document.createElement('a')
    link.href = url
    link.download = url.split('/').pop()
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
}

export default Home