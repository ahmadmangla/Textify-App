import React from 'react'

const Alert = (props) => {
    return (
        <div style={{ height: "30px" }}>
            {props.alert && <div className="alert alert-primary alert-dismissible fade show" role="alert">
                <strong>{props.alert.type}</strong> : {props.alert.message}
            </div>}
        </div>
    )

}

export default Alert