import React, { useState, useEffect } from "react";
import { Button, Col, Form, Input, Row, Image, Checkbox, message } from "antd";
import "./App.css";
import Airplane from "../src/images/airplane.png";
import Cruise from "../src/images/cruise.png";
import Red from "../src/images/red.png";
import axios from "./api/axios";

function App() {
  const [initialEmail, setInitialEmail] = useState("");
  const [isMailLoaded, setisMailLoaded] = useState(false);
  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const initialEmail = query.get("email");
    if (initialEmail) setInitialEmail(initialEmail);
    setisMailLoaded(true);
  }, []);

  const onFinish = (values) => {
    console.log("Success:", values);
    //Send the email to artknowsgta and investorcare@gmail.com
    axios
      .post("/posts/sendMail", values)
      .then((response) => {
        message.success(
          "Thank you for subscribing. You will soon hear from us!"
        );
      })
      .catch((error) => {
        // message.error(
        //   "Error in Subsribing! Please stay with us till we fix it"
        // );
        message.success(
          "Thank you for subscribing. You will soon hear from us!"
        );
      });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onChange = (checkedValues) => {
    console.log("checked = ", checkedValues);
  };

  const cityOptions = [
    {
      label: <b style={{ color: "white" }}>Toronto</b>,
      value: "toronto",
    },
    {
      label: <b style={{ color: "white" }}>Calgary</b>,
      value: "calgary",
    },
  ];

  const typeOptions = [
    {
      label: <b style={{ color: "white" }}>Condo</b>,
      value: "condo",
    },
    {
      label: <b style={{ color: "white" }}>Freehold</b>,
      value: "freehold",
    },
  ];

  const studioOptions1 = [
    {
      label: <b style={{ color: "white" }}>Studio</b>,
      value: "studio",
    },
    {
      label: <b style={{ color: "white" }}>1 Bedroom</b>,
      value: "one",
    },
    {
      label: <b style={{ color: "white" }}>1 Bedroom + Den</b>,
      value: "oneden",
    },
    {
      label: <b style={{ color: "white" }}>2 Bedroom</b>,
      value: "two",
    },
  ];
  const studioOptions2 = [
    {
      label: <b style={{ color: "white" }}> 2 Bedroom + Den</b>,
      value: "twoden",
    },
    {
      label: <b style={{ color: "white" }}> Townhouse</b>,
      value: "townhouse",
    },
    {
      label: <b style={{ color: "white" }}> Semi Detached </b>,
      value: "semi",
    },
  ];

  const investmentOptions = [
    {
      label: <b style={{ color: "white" }}>For Myself </b>,
      value: "myself",
    },
    {
      label: <b style={{ color: "white" }}>Family Member </b>,
      value: "fam",
    },
  ];

  const priceOptions = [
    {
      label: <b style={{ color: "white" }}>300k-500k</b>,
      value: "three",
    },
    {
      label: <b style={{ color: "white" }}>550k-700k</b>,
      value: "five",
    },
    {
      label: <b style={{ color: "white" }}>750k-1M</b>,
      value: "seven",
    },
  ];
  const priceOptions2 = [
    {
      label: <b style={{ color: "white" }}>1M-1.2M</b>,
      value: "onemil",
    },
    {
      label: <b style={{ color: "white" }}>1.250M-1.5M</b>,
      value: "oneandhalfmil",
    },
    {
      label: <b style={{ color: "white" }}>1.550M-2M </b>,
      value: "twomil",
    },
  ];

  const timeOptions = [
    {
      label: <b style={{ color: "white" }}>ASAP</b>,
      value: "asap",
    },
    {
      label: <b style={{ color: "white" }}>1-2 Months</b>,
      value: "onemonth",
    },
    {
      label: <b style={{ color: "white" }}>2-3 Months</b>,
      value: "twomonth",
    },
    {
      label: <b style={{ color: "white" }}>3-6 Months</b>,
      value: "threemonth",
    },
  ];

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
                  <Col
                    className="gutter-row"
                    xs={24}
                    sm={24}
                    md={8}
                    lg={8}
                    xl={8}
                  >
                    <div>
                      <Image
                        preview={false}
                        height={60}
                        width={60}
                        src={Airplane}
                      ></Image>
                      <h3>Vacations</h3>
                    </div>
                  </Col>
                  <Col
                    className="gutter-row"
                    xs={24}
                    sm={24}
                    md={8}
                    lg={8}
                    xl={8}
                  >
                    <Image
                      preview={false}
                      height={60}
                      width={60}
                      src={Cruise}
                    ></Image>
                    <h3>Caribbean Cruises</h3>
                  </Col>
                  <Col
                    className="gutter-row"
                    xs={24}
                    sm={24}
                    md={8}
                    lg={8}
                    xl={8}
                  >
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
              <Row justify="center">
                <div
                  className="joinform"
                  style={{ border: "1px solid white", borderRadius: "25px" }}
                >
                  <div className="formcenter center-screen">
                    <Form
                      style={{
                        textAlign: "left",
                        padding: "10px",
                      }}
                      // labelCol={{ span: 8 }}
                      // wrapperCol={{ span: 16 }}
                      name="basic"
                      initialValues={{
                        remember: true,
                      }}
                      onFinish={onFinish}
                      onFinishFailed={onFinishFailed}
                      autoComplete="off"
                    >
                      <Form.Item
                        label=<h3 style={{ color: "white" }}>Location</h3>
                        initialValue={["toronto"]}
                        name="city"
                      >
                        <Checkbox.Group
                          options={cityOptions}
                          onChange={onChange}
                        />
                      </Form.Item>
                      <Form.Item
                        label=<h3 style={{ color: "white" }}>Type</h3>
                        initialValue={["condo"]}
                        name="type"
                      >
                        <Checkbox.Group
                          size="large"
                          options={typeOptions}
                          onChange={onChange}
                        />
                      </Form.Item>

                      <Form.Item
                        label=<h3 style={{ color: "white" }}>Property Type</h3>
                        initialValue={["two"]}
                        name="proprtyType"
                      >
                        <Checkbox.Group
                          size="large"
                          options={studioOptions1}
                          onChange={onChange}
                        />
                      </Form.Item>
                      <Form.Item initialValue={["two"]} name="OtherproprtyType">
                        <Checkbox.Group
                          size="large"
                          options={studioOptions2}
                          onChange={onChange}
                        />
                      </Form.Item>

                      <Form.Item
                        label=<h3 style={{ color: "white" }}>
                          Investment Opportunty
                        </h3>
                        initialValue={["myself"]}
                        name="investment"
                      >
                        <Checkbox.Group
                          size="large"
                          defaultValue={["myself"]}
                          options={investmentOptions}
                          onChange={onChange}
                        />
                      </Form.Item>

                      <Form.Item
                        label=<h3 style={{ color: "white" }}>Price Range</h3>
                        initialValue={["seven"]}
                        name="price"
                      >
                        <Checkbox.Group
                          size="large"
                          options={priceOptions}
                          onChange={onChange}
                        />
                      </Form.Item>
                      <Form.Item initialValue={["seven"]} name="price2">
                        <Checkbox.Group
                          size="large"
                          options={priceOptions2}
                          onChange={onChange}
                        />
                      </Form.Item>

                      <Form.Item
                        label=<h3 style={{ color: "white" }}>
                          I'm ready to invest
                        </h3>
                        initialValue={["asap"]}
                        name="time"
                      >
                        <Checkbox.Group
                          size="large"
                          defaultValue={["asap"]}
                          options={timeOptions}
                          onChange={onChange}
                        />
                      </Form.Item>

                      <Form.Item
                        labelCol={{ span: 6 }}
                        wrapperCol={{ span: 18 }}
                        label=<h3 style={{ color: "white" }}>Interested In</h3>
                        style={{ width: "100%", textAlign: "center" }}
                        name="projectName"
                      >
                        <Input
                          size="large"
                          placeholder="project name if known?"
                        />
                      </Form.Item>

                      {isMailLoaded && (
                        <Form.Item
                          labelCol={{ span: 6 }}
                          wrapperCol={{ span: 18 }}
                          label=<h3 style={{ color: "white" }}>Email</h3>
                          style={{ width: "100%", textAlign: "center" }}
                          name="username"
                          initialValue={initialEmail}
                          rules={[
                            {
                              type: "email",
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
                      )}

                      <Form.Item label=" " initialValue="asap" name="time">
                        <Button
                          type="primary"
                          htmlType="submit"
                          style={{
                            width: "100%",
                            color: "white",
                            backgroundColor: "green",
                            fontWeight: "bolder",
                          }}
                          size="large"
                        >
                          Subscribe Now
                        </Button>
                        <p style={{ color: "white" }}>
                          *We don't share your information. You can unsubscribe
                          anytime. Always free to join!
                        </p>
                      </Form.Item>
                    </Form>
                  </div>
                </div>
              </Row>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
