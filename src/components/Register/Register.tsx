import styles from "./Register.module.scss";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
/* import axios from "axios";
 */ import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { FormEvent } from "react";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rePassword, setRePassword] = useState<string>("");
  const isValidateInput = () => {
    if (!email || !phone || !username || !password || !rePassword) {
      toast.error("Please fill in all fields!");
      return false;
    }
    if (password !== rePassword) {
      toast.error("Password and Re-enter Password do not match!");
      return false;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long!");
      return false;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Invalid email format!");
      return false;
    }
    if (!/^\d{10,}$/.test(phone)) {
      toast.error("Invalid phone number format! Must be at least 10 digits.");
      return false;
    }
    return true;
  };
  const handleRegister = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = isValidateInput();
    if (!isValid) {
      return;
    }
    const userData = {
      email,
      phone,
      username,
      password,
    };
    toast.success("Register successfully!");
    console.log("check data:", userData);
  };
  useEffect(() => {
    // Test API
    /* axios
            .get("http://127.0.0.1:8080/api/test-api")
            .then((response) => {
              console.log("API Response:", response.data);
            })
            .catch((error) => {
              console.error("API Error:", error);
            }); */
  }, []);
  return (
    <div className={styles.loginContainer}>
      <div className="container px-3">
        <div className="row px-4">
          <div
            className={`col-12 d-none col-sm-7 d-sm-block ${styles.contentLeft} `}
          >
            <div className={styles.brand}>Quang Long</div>
            <div className={styles.desc}>
              Chào mừng bạn đến với trang web của chúng tôi! Rất vui được đồng
              hành cùng bạn hôm nay
            </div>
          </div>
          <div
            className={`col-sm-5 col-12  d-flex flex-column gap-3 py-3  ${styles.contentRight} `}
          >
            <Form onSubmit={handleRegister}>
              <div className={`d-sm-none ${styles.brand}`}>Quang Long</div>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email address or phone number"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPhone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupUserName">
                <Form.Label>User Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your user name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupRePassword">
                <Form.Label>Re-enter Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Re-enter Password"
                  value={rePassword}
                  onChange={(e) => setRePassword(e.target.value)}
                />
              </Form.Group>
              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: "100%", textAlign: "center", margin: "0 auto" }}
              >
                Register
              </button>
            </Form>
            <span className="text-center">
              <a href="#" className={styles.forgotPassword}>
                {" "}
                Forgot your password?
              </a>
            </span>
            <hr />
            <button
              className="btn btn-success"
              type="button"
              onClick={() => navigate("/login")}
              style={{ width: "80%", textAlign: "center", margin: "0 auto" }}
            >
              <span className={styles.alreadyHaveAccount}>
                Already have an account login
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
