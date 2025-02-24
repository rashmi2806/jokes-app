
import './button.css';

function Button(props){
  console.log(props?.jokesApiRes,"props");
  
    return (
      <div >
        <button className="button" onClick={props.jokesApiRes}>Click to generate a joke</button>
      </div>
    )
}

export default Button;