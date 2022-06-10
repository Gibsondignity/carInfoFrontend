import style from './style.module.css'

const loginpage = () => {
    return (
      <>
         
        <div>
          <div className="full-width d-flex justify-content-center and align-items-center">
            <form className="form rounded p-4 p-sm-3">
                <div className="mb-3">
                  
                    <label for="emailAddress" className="form-label">Email Address</label>
                    <input type="email" className="form-control" id="emailAddress" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="rememberMe" />
                    <label className="form-check-label" for="rememberMe">Remember Me</label>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
          </div>
        </div>

      </>
    )
  }
  
  export default loginpage;