
import game from '../images/game.png'
import ranking from '../images/ranking.png'
import video from '../images/video.png'
import message from '../images/message.png'
import community from '../images/community.png'
import home from '../images/home.png'
import cup from '../images/cup.png'
import talk from '../images/talk.png'
import shoes from '../images/shoes.png'
import more from '../images/more.png'
import '../styles/app.css'
import '../styles/list.css'
import '../styles/app.scss'
import List from './List'
import React, { Component } from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import { Link } from 'react-router-dom' 
import { Route } from 'react-router-dom'
// import { Redirect } from 'react-router-dom'
const navs = [
 {
     img: game,
     title: '比赛'
 },
 {
    img: ranking,
    title: '排行'
 },
 {
    img: video,
    title: '视频'
 },
 {
  img: message,
  title: '流言'
},
{
  img: community,
  title: '社区'
}
]
const footer = [
  {
      img: home,
      title: '首页'
  },
  {
     img: cup,
     title: '比赛'
  },
  {
     img: talk,
     title: '社区'
  },
  {
   img: shoes,
   title: '识货'
 },
 {
   img: more,
   title: '更多'
 }
 ]
const Home = () =>{
    return <h1>Home</h1>
}
const About = () =>{
    return <h1>About</h1>
}
const Topic = ({ match }) => (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  )
const Topics = ({ match }) => (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>
      <Route path={`${match.url}/:topicId`} component={Topic} />
      <Route
        exact
        path={match.url}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  )
const Protected = () =><h3>Protected</h3>
const Login = () =><h3>you need to login.</h3>
// let auth = false;
// const PrivateRoute = ({ component: Component, ...rest }) => {
//     return (
//     <Route {...rest} render={props => (
//         auth ? (
//             <Component {...props}/>
//         ):(
//             <Redirect to={{
//                 pathname: "/login",
//                 state: { ftom: props.location},
//             }}/>
//         )
//     )}/>
//   )
// }
class Index extends Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
      fetch(
        'http://m.yangchongshe.com/peanut/eatIndex/postList'
      )
        .then(res => res.json())
        .then(data => {
          console.log(data)
          this.setState({users: data})
        })
        .catch(e => console.log('错误:', e))
    }
    render(){
        return (
        <div>
            <Router>
                <div>
                    {/* <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/topics">Topics</Link></li>
                        <li><Link to="/protected">Protected</Link></li>
                    </ul> */}
                    <div className="nav_content">
                        {
                            navs.map((data,index)=> (
                                <div key={index} className="nav-item">
                                    <img src={data.img} className="img-item"/>
                                    <div>{data.title}</div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="footer">
                        {
                          footer.map((data,index)=> (
                            <div key={index} className="footer-item">
                                  <img src={data.img}/>
                                  <div>{data.title}</div>
                            </div>
                          ))
                        }
                    </div>                                   
                    {/* <div>
                        <Route exact={true} path="/" component={List}/>
                        <Route path="/about" component={About}/>
                        <Route path="/topics" component={Topics}/>
                        <Route path="/protected" component={Protected}/>
                    </div> */}
                </div>
                <a href="./detail.html?id=', data.id , '">
                  <div className="news-item">
                  <div className="icon img-box" style="background-image: url(', data.imgs[0] , ')"></div>
                  <div className="other-box">
                  <div className="title">{data.description}</div>
                  </div>
                  <div className="review" style="float:left"><img src="./images/review.png"/>16037</div>
                  <button className="other-box1" style="float:right">专题</button>
                  <button className="other-box2" style="float:right">置顶</button>
                  </div>
            </a>
            </Router>
            
        </div>
        
        )
    }
}
// class Index extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {users: []}
//     this.handleClick = this.handleClick.bind(this)
//   }
//   handleClick() {
//     fetch(
//       'https://www.easy-mock.com/mock/59801fd8a1d30433d84f198c/example/user/all'
//     )
//       .then(res => res.json())
//       .then(data => {
//         console.log(data)
//         this.setState({users: data})
//       })
//       .catch(e => console.log('错误:', e))
//   }

//   render() {
//     return (
//       <div>
//         <input type="button" value="点击 http-get 方式获取数据" onClickCapture={this.handleClick} />
//         <ul>
//           {this.state.users &&
//             this.state.users.map((item, index) => (
//               <li key={index.toString()}>{item.name}</li>
//             ))}
//         </ul>
//       </div>
//     )
//   }
// }
export default Index
