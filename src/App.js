import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends React.Component{
  constructor(props){
  super(props);
  this.state={
    students:[],
  }
}
  render(){
    const students=['Evelyn','Glenn', 'Kourtney', 'Dawson', 'Maggie', 'Kyle'];
    return (
    <div>
{students.map((student)=>{
  console.log(student);
  return(
    <div>
      <ul class="list-group col-2 offset-3">
        <li class ="list-group-item text-center">{student}</li>
      </ul>
      
    </div>
  )

})}
    </div>
    );
  }
}
export default App;

