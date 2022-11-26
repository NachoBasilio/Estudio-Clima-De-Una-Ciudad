import React from 'react'

export default function weatherMainInfo({weather}) {

    return (
        <>
            <div>{weather?.location.name}</div>
            <div>{weather?.location.country}</div>
            <div>
                <div>
                    <img src="" alt="" />
                </div>
            </div>
        </>
    )
}
