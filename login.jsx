import "./login.css"

export function Login() {

  return (
    
    <div class="login-box">
    <h2>Login</h2>
    <form class="login">
      <label>Username</label>
      <input type="text" placeholder="Username" name="uname" required></input>
      <br></br>
      <label>Password </label>
      <input type="password" name="pass" id="pass" placeholder="Password" required></input>
      <br></br>
      <input type="button" name="log" id="log" value="Log In" required></input>
                <h5><a href="">Forgot Password</a></h5>
    </form>
    </div>
    
  )
}

