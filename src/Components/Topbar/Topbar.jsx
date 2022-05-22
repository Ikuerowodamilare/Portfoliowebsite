import './topbar.scss'
import {Person, Mail} from "@material-ui/icons"


export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className='logo'>Dami.</a>
          <div className="itemContainer">
            <Person className="icon"/>
            <span>+1 (226) 501 8126</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon"/>
            <span>ikuerowoabimbola@outlook.com</span>
          </div>
        </div>
        
          <div className="right">
            this is right
          </div>
      </div>
    </div>  
  )
}
