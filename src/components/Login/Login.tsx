import styles from "./Login.module.scss";
import Form from "react-bootstrap/Form";

const Login = () => {
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
            <Form>
              <div className={`d-sm-none ${styles.brand}`}>Quang Long</div>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email address or phone number"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Form>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
            <span className="text-center">
              <a href="#" className={styles.forgotPassword}>
                {" "}
                Forgot your password?
              </a>
            </span>
            <hr />
            <button className="btn btn-success">Create New Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
