import { Button, Form, Input } from "antd";
import ReactTypingEffect from "react-typing-effect";
import "./App.css";

function App() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="App">
      <section className="image" style={{ height: "100vh" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <div className="header" style={{ textAlign: "center" }}>
            <h1 style={{ color: "white" }}>RealInvesting Group</h1>
          </div>
          <br></br>
          <div className="welcome" style={{ textAlign: "center" }}>
            <p
              style={{ color: "white", fontSize: "50px", fontWeight: "bolder" }}
            >
              Welcome
            </p>
          </div>
          <br></br>
          <div>
            <div
              className="signupform"
              style={{ textAlign: "center", color: "white" }}
            >
              <ReactTypingEffect
                text={"#1 Choice for Investors"}
                cursorRenderer={(cursor) => <h1>{cursor}</h1>}
                displayTextRenderer={(text, i) => {
                  return (
                    <h1>
                      {text.split("").map((char, i) => {
                        const key = `${i}`;
                        return (
                          <span
                            key={key}
                            style={i === 0 ? { color: "green" } : {}}
                          >
                            {char}
                          </span>
                        );
                      })}
                    </h1>
                  );
                }}
              ></ReactTypingEffect>
              <h2>
                Join our 100's of investors for Toronto & Calgary's Exclusive
                Pre-construction Projects
              </h2>
              <h3>Enter Your Email Address!</h3>

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
                    style={{ minWidth: "375px" }}
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
                      <Input size="large" />
                    </Form.Item>
                    <Form.Item>
                      <Button
                        type="primary"
                        htmlType="submit"
                        style={{
                          width: "375px",
                          color: "white",
                          backgroundColor: "green",
                          fontSize: "20px",
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
