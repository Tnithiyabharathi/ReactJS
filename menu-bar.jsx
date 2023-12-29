
import "./menu-bar.css"

export function MenuBar()
{
    return(
       <ul>
        <li>
            <div class="dropdown">
                <a href="#sale">Sale</a>
            </div>
        </li>
        <li><a href="#inventory">Inventory</a></li>
        <li><a href="#customer">Customer</a></li>
        <li><a href="#employee">Employee</a></li>
        <li><a href="#bill">Bill</a></li>
       </ul>
    )
} 