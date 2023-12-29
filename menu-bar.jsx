
import "./menu-bar.css"

export function MenuBar()
{
    return(
    <div class="dropdown">
        <ul>
            <li><a href="#sale">Sale</a></li>
            <li><a href="#inventory">Inventory</a></li>
            <li><a href="#customer">Customer</a></li>
            <li><a href="#employee">Employee</a></li>
            <li><a href="#bill">Bill</a></li>
        </ul>
        <div class="dropdown-content">
       <h5>Make Sale</h5>
       <h5>Reports</h5>    
        </div>
    </div>  
    )
} 