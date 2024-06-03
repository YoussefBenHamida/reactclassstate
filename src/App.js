import './App.css';
import React from 'react';
import Timer from './Timer';


class App extends React.Component {

  constructor(){
    super()
    this.state = {
      person : 
      {fullName : "Mariem",
      Bio : "J'aime la nature et la mode ",
      imgSrc :"https://th.bing.com/th/id/R.b0a97b43a3f11a974156241ece81f316?rik=fBfGMS%2bLvF0G2w&pid=ImgRaw&r=0" ,
      profession:"Ingénieur méchanique"
    },
    Show:false,
  }}

handelShow =()=>{
  this.setState({Show : ! this.state.Show}) 
}



  render()
  {
    return (
      <>

      <button onClick={this.handelShow}>{this.state.Show ? "Hide person" : "Show person"}</button> 
      <div className='Profil'>
      <h4>{this.state.Show && this.state.person.fullName}</h4>
      <h4>{ this.state.Show && this.state.person.Bio}</h4>
      <img src={this.state.Show && this.state.person.imgSrc} />
      </div>
      {this.state.Show && <Timer/> } 

      </>
    )
  }

}
export default App

