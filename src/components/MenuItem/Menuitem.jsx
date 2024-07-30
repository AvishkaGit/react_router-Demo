import React from 'react'
import { Link } from "react-router-dom";

function Menuitem(props) {
  return (
    <div>
        <Link to={props.linkurl}>{props.linktext}</Link>
    </div>
  )
}

export default Menuitem