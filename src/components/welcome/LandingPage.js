import React from "react";
import AppBar from "material-ui/AppBar";
import Paper from "material-ui/Paper";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiFramework from "material-ui/styles/MuiThemeProvider";
import FlatButton from "material-ui/FlatButton";
import Icon from "material-ui/svg-icons/action/fingerprint";
import RaisedButton from "material-ui/RaisedButton";
import Divider from "material-ui/Divider";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";

const landingImage = require("../../images/welcome.png");

let theme = getMuiTheme({
  appBar: {
    color: "#D3D3D3",
    padding: "30px"
  }
});

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
  }

  appBar() {
    return (
      <AppBar title="SHUFFLEBOX" showMenuIconButton={false}>
        <div>
          <FlatButton label="Home" />
          <FlatButton label="About" />
          <FlatButton label="FAQ" />
        </div>
      </AppBar>
    );
  }

  welcomeBody() {
    return (
      <Card
        style={{
          height: "91vh",
          overflow: "hidden"
        }}
      >
        <CardText
          style={{
            height: "90vh",
            width: "100%",
            margin: "0 0",
            padding: "0 0"
          }}
        >

          <div
            style={{
              height: "100%",
              width: "100%",
              display: "flex",
              verticalAlign: "bottom"
            }}
          >
            <div
              style={{
                paddingTop: "20%",
                height: "100%",
                width: "70%"
              }}
            >
              <span style={{ height: "100%", paddingTop: "70%" }}>
                <span
                  style={{
                    fontSize: "45px",
                    fontWeight: "bold",
                    color: "#464646"
                  }}
                >
                  Good Bye Paper<br /><br />
                  Welcome Shufflebox
                </span>
                <br /> <br />
                <span style={{ fontSize: "20", color: "#a2a2a2" }}>
                  With our new app you will be able to automate
                  <br />
                  {" "}
                  the task of selecting fellows for hangouts,
                  <br />
                  {" "}
                  brownnbag and secret santa.
                </span>
                <br />
                <RaisedButton
                  primary
                  style={{ width: "180px", borderRadius: "20px" }}
                  buttonStyle={{
                    borderRadius: "20px",
                    backgroundColor: "#80bfff"
                  }}
                  backgroundColor="#66a6e9"
                >
                  <strong>Get Started</strong>
                </RaisedButton>
              </span>

            </div>
            <div
              style={{
                content: " ",
                background: "#66a6e9",
                position: "relative",
                top: "0",
                bottom: '0',
                margin: "0 -50px",
                height: "100vh",
                width: "30%"
              }}
            ></div>
            <span
              style={{
                height: "100%",
                width: "30%",
                float: "right"
                //position: "static"
              }}
            >
              <div style={{ width: "100%", whiteSpace: "wrap" }}>
                {/* <span
                  style={{
                    height: "20vh",
                    width: "100%",
                    backgroundColor: "#66a6e9",
                    display: "inline-block"
                  }}
                >
                  <p style={{ fontSize: 0 }}> gjgjgjgj</p>
                </span> */}
                <div
                  style={{
                    height: "100vh", display: "inline-block", backgroundColor: "#66a6e9", content: '',
                    overflow: "hidden",
                    width: "100%",
                    float: 'right',
                    top: 0,
                    left: 0
                  }}
                >
                  <img
                    src={landingImage}
                    alt=""
                    style={{
                      display: "block",
                      marginTop: "50%",
                      marginLeft: "10%",
                      width: "80%", height: "45%"
                    }}
                  />
                </div>
                {/* <span
                  style={{
                    height: "20vh",
                    width: "100%",
                    backgroundColor: "#66a6e9",
                    display: "inline-block",
                    overflow: "hidden"
                  }}
                /> */}
              </div>
            </span>
          </div>
        </CardText>
      </Card >
    );
  }

  render() {
    return (
      <MuiFramework muiTheme={theme}>
        <div>
          {this.appBar()}
          <Divider />
          {this.welcomeBody()}
        </div>
      </MuiFramework>
    );
  }
}

export default LandingPage;
