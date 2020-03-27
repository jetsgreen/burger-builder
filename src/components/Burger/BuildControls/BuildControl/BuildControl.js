import React from "react"
import "./BuildControl.css"

const BuildControl = (props) => {
    return(
        <div>
              <div className="BuildControl">
                <div className="Label">{props.label}</div>
                <button className="Less" onClick={props.delete} 
                disabled={props.disabled}>Less</button>
                <button className="More" onClick={props.added}>More</button>
            </div>
        </div>
    )
}

export default BuildControl