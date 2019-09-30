import React, { Component } from "react";
import Header from "./components/header";
import Headline from "./components/headline";
import SharedButton from "./components/button";
import ListItem from "./components/listItem";
import { connect } from "react-redux";
import { fetchPostAction } from "./actions/index";
import "./app.scss";

const tempArr = [
  {
    fname: "Yash",
    lname: "Mehrotra",
    email: "ym@gmail.com",
    age: 20,
    onlineStatus: true
  },
  {
    fname: "YashMeh",
    lname: "Last",
    email: "ym2@gmail.com",
    age: 22,
    onlineStatus: false
  }
];
class App extends Component {
  fetch = () => {
    this.props.fetchPostAction();
    this.exampleMethod_updatesState();
  };
  state = { hideBtn: false };

  exampleMethod_updatesState = () => {
    this.setState({
      hideBtn: !this.state.hideBtn
    });
  };
  render() {
    const configButton = {
      buttonText: "Get Posts",
      emitEvent: this.fetch
    };
    const { posts } = this.props;
    return (
      <div data-test="AppComponent">
        <Header />
        <section className="main">
          <Headline
            tempArr={tempArr}
            header="Posts"
            desc="Click the button to render posts"
          />
          {!this.state.hideBtn && <SharedButton {...configButton} />}
          {posts.length > 0 && (
            <div>
              {posts.map((post, index) => {
                const { title, body } = post;
                const configListItem = {
                  title,
                  desc: body
                };
                return <ListItem key={index} {...configListItem} />;
              })}
            </div>
          )}
        </section>
      </div>
    );
  }
}
const MapStateToProp = state => {
  return {
    posts: state.posts
  };
};

export default connect(
  MapStateToProp,
  { fetchPostAction }
)(App);
