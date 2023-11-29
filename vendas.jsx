// ID NAME ADDRESS PHONENO EMAIL //

import "./vendas.css"

export function Vendas()
{

return(
      <div className="form">
      <h4>Vendas</h4> 
      <form className="information-form">
        <label>ID </label>
        <input name="id" type="text" input="number"  placeholder="Number"></input>
        <br></br>
        <label>FTRST NAME </label>
        <input name="firstname" type="text" input="text"  placeholder="Firstname" ></input>
        <br></br>
        <label>LAST NAME </label>
        <input name="lastname" type="text" input="text" placeholder="Lastname"></input>
        <br></br>
        <label>ADDRESS </label>
        <input name="address" type="" input="number-text" placeholder="Address"></input>
        <br></br>
        <label>PHONE NO </label>
        <input name="phoneno" type="number"input="number" placeholder="Number" ></input>
        <br></br>
        <label>EMAIL </label>
        <input name="email" type="email" input="email" placeholder="email"></input>
      </form>
      </div> 
  

)
}