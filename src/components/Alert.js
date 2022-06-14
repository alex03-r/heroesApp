import React, { useRef } from 'react'

export const Alert = ({name, type = 'info'}) => {

    const alertRef = useRef('') 

    let message = ''

    if (type === 'success') {

        message = `The hero ${name} has been added succesfuly`;

    } else if (type === 'danger') {

         message = `The hero ${name} has been deleted succesfuly`;

    }else if(type === 'info'){

        message = `The hero ${name} has been updated succesfuly`;

    }

    return (

        <div ref={alertRef} className={`alert alert-${type} text-center alert-dismissible" role="alert" `}>

            {alertRef.current = message }

        </div>

    )
}
