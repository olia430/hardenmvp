import { Component } from 'react'
import harden from '../images/harden.png'
import xiaomi from '../images/xiaomi.png'
import '../styles/app.css'
import '../styles/app.scss'

class Index extends Component {
    constructor(props){
        super(props)
        this.state={
            team: 'houston rockets'
        }
    }
    render(){
        return (
        <div>
            <div>harden is a {this.state.team}'s player! </div>
            <div>< img src={harden} /> </div>
            <div>< img src={xiaomi} /> </div>
            <div class="top"></div>
            <a href="./">nim</a>
            <div class="text">fds;fsdflffgfgdfg</div>
            <div class="nav">
                 <li>ni</li>
                 <li>wo</li>
                 <li>ta</li>
                 <li><a href="./">点我</a></li>
            </div>
            <button></button>
        </div>
        )
    }
}
export default Index
