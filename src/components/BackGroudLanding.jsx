import React from "react";


const List_icons = [
    'bi-camera-video-fill',
    'bi-cpu-fill',
    'bi-filetype-json',
    'bi-filetype-js',
    'bi-filetype-jsx',
    'bi-bootstrap-fill',
    'bi-chat-left-dots-fill',
    'bi-chat-square-heart-fill',
    'bi-check-circle-fill',
    'bi-cloud-drizzle-fill',
    'bi-cloud-moon-fill',
    'bi-cup-hot-fill',
    'bi-database-fill',
    'bi-device-ssd-fill',
    'bi-envelope-at-fill',
    'bi-exclamation-square-fill',
    'bi-exclamation-diamond-fill',
    'bi-eye-fill',
    'bi-file-earmark-person-fill',
    'bi-file-earmark-code-fill',
    'bi-filetype-html',
    'bi-file-image-fill',
    'bi-filetype-svg',
    'bi-github',
    'bi-google',
    'bi-incognito',
    'bi-linkedin',
    'bi-person-fill',
    'bi-radioactive',
    'bi-rocket-fill',
    'bi-stoplights-fill',
    'bi-stack-overflow',
    'bi-terminal-fill',
    'bi-usb-symbol',
    'bi-virus',
    'bi-wifi',
    'bi-ubuntu',
    'bi-universal-access-circle',
    'bi-unlock-fill',
    'bi-upc-scan',
    'bi-trophy-fill',
    'bi-trash-fill',
    'bi-tornado',
    'bi-stickies-fill',

]



const RowLanding = () =>{


    return(
<>
        {
        List_icons.map( (idx,elem) =>{
            return(
                
                <i key={idx} className={`bi ${ List_icons[Math.floor( Math.random() * List_icons.length)]}`}></i>

            )
        })
        
        }

</> 
    )
}


const BackGroudLanding = () =>{
    return(
        <div className="back-landing-animated">
            
            <RowLanding></RowLanding>
            <RowLanding></RowLanding>
            <RowLanding></RowLanding>
            <RowLanding></RowLanding>
            <RowLanding></RowLanding>
            <RowLanding></RowLanding>
            <RowLanding></RowLanding>
            <RowLanding></RowLanding>
            <RowLanding></RowLanding>
            <RowLanding></RowLanding>
            <RowLanding></RowLanding>
            <RowLanding></RowLanding>
            <RowLanding></RowLanding>
            <RowLanding></RowLanding>
            <RowLanding></RowLanding>           


        </div>
    )   
}

export default BackGroudLanding;