import React from 'react'
import { TOTAL_SCREEN } from '../utilities/commonUtils'
export default function portfoliContainer() {

    const mapAllScreens = () => {
        return (
            TOTAL_SCREEN.map((screen) => (
                (screen.component) ? <screen.component screenName={screen.screen_name} key={screen.screen_name} id={screen.screen_name} /> : <div id={screen.screen_name}></div>
            ))
        )
    }
    return (
        <div className='portfoli-container'>
            {mapAllScreens()}
        </div>
    )
}
