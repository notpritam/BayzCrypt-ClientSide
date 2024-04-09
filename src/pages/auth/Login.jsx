import React from "react";
import styles from "./auth.module.scss";
import Card from "../../components/card/Card";
import { BiLogIn } from "react-icons/bi";
import { useState } from "react";
import PasswordInput from "../../components/passwordInput/PasswordInput";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";


const Login = () => {

  const google = () => {
    alert('Currently not available, make use of the other options below')
  }

  const [err, setErr] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/usersPage")
    } catch (err) {
      setErr('Invalid login parameters');
    }
  };

  return (
    <div className={`container ${styles.auth}` }>
      <Card>
        <div className={styles.form}>
          <div className="--flex-center">
            <BiLogIn size={35} color="#999" />
          </div>
          <h2>Login</h2>
          <div className="--flex-center">
            <button onClick={google} className="--btn --btn-google">Login with Google</button>
          </div>
          <br />
          <p className="--text-center --fw-bold">or</p>

            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" required name="email"/>
                <PasswordInput placeholder="Password" name="password"/>
                <button type="submit" className="--btn --btn-primary --btn-block">Login</button>
                {err && <div style={{marginTop: '5px', color: "red", marginBottom: '5px', fontSize: '15px'}}>{err}</div>}
            </form>
            <Link to='/forgot'>Forgot password</Link>
            <span style={{display: 'flex', marginTop: '15px'}}>
              <p> &nbsp;Don't have an Account? &nbsp;</p> 
              <h3 style={{marginTop: '-10px'}}><Link to='/register'>Register</Link></h3>
            </span>
        </div>
      </Card>
    </div>
  );
};

export default Login;
