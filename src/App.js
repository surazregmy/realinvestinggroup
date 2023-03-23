import { Button, Col, Form, Input, Row, Image } from "antd";
import "./App.css";
import Airplane from "../src/images/airplane.png";
import Cruise from "../src/images/cruise.png";
import Red from "../src/images/red.png";

function App() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="App">
      <section className="image" style={{ minHeight: "100vh" }}>
        <div className="container" style={{ textAlign: "center" }}>
          {/* <div className="header" style={{ textAlign: "center" }}>
            <h1 style={{ color: "white" }}>RealInvesting Group</h1>
          </div> */}
          <div className="welcome" style={{ textAlign: "center" }}>
            <p
              style={{ color: "white", fontSize: "40px", fontWeight: "bolder" }}
            >
              WELCOME!
            </p>
          </div>
          <div>
            <hp
              style={{
                color: "green",
                fontSize: "50px",
                fontWeight: "bolder",
              }}
            >
              Real Estate Wealth Starts Here.
            </hp>
          </div>

          <div
            className="Real Estate Wealth Starts Here"
            style={{ textAlign: "center" }}
          >
            <p
              style={{ color: "white", fontSize: "50px", fontWeight: "bolder" }}
            >
              #1 Choice for Investors
            </p>
          </div>

          <div>
            <div
              className="signupform"
              style={{ textAlign: "center", color: "white" }}
            >
              <h2 style={{ lineHeight: "1.5" }}>
                Sign Up Now to Receive Free and Exclusive Access to
                Pre-Construction Projects <br></br> in Toronto and Calgary,
                along with Special Incentives <br></br>for you and your Family
                to Enjoy!
              </h2>
              <div className="icon" style={{ textAlign: "center" }}>
                <Row
                  gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
                  justify="space-around"
                >
                  <Col className="gutter-row">
                    <div>
                      <Image
                        preview={false}
                        height={60}
                        width={60}
                        src={Airplane}
                      ></Image>
                      <h3>
                        Complimentary Vacations <br></br> to Europe, Asia, and
                        Africa
                      </h3>
                    </div>
                  </Col>
                  <Col className="gutter-row">
                    <Image
                      preview={false}
                      height={60}
                      width={60}
                      src={Cruise}
                    ></Image>
                    <h3>Caribbean Cruises</h3>
                  </Col>
                  <Col className="gutter-row">
                    <div style={{ borderRadius: "50%" }}>
                      <Image
                        preview={false}
                        height={60}
                        width={60}
                        src={Red}
                      ></Image>
                    </div>
                    <h3> Annual Appreciation Events</h3>
                  </Col>
                </Row>
              </div>
              <div className="joinform">
                <div className="formcenter center-screen">
                  <Form
                    name="basic"
                    initialValues={{
                      remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    style={{ minWidth: "350px" }}
                  >
                    <Form.Item
                      name="username"
                      rules={[
                        {
                          required: true,
                          message: "Please input your email!",
                        },
                      ]}
                    >
                      <Input
                        size="large"
                        placeholder=" Enter Your Email Address!"
                      />
                    </Form.Item>
                    <Form.Item>
                      <Button
                        type="primary"
                        htmlType="submit"
                        style={{
                          width: "350px",
                          color: "white",
                          backgroundColor: "green",
                          fontWeight: "bolder",
                        }}
                        size="large"
                      >
                        Subscribe Now
                      </Button>
                    </Form.Item>
                    <p style={{ color: "white" }}>
                      *Unsubscribe anytime - Always free to join!
                    </p>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
