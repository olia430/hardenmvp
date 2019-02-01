import { Component } from 'react'

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
                harden is a {this.state.team}'s player!
            </div>
        )
	}
}
export default Index