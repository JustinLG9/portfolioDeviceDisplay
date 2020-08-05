import React from "react";

export default function Footer() {
  return (
    <div
      className="jumbotron row justify-content-center align-items-center footer-container"
      style={{ margin: "50px 0 0 0", padding: "25px 10px" }}
    >
      <div className="col-12">
        <p>
          Website screenshots powered by{" "}
          <a
            href="https://www.thum.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            Thum.io API
          </a>
        </p>
      </div>
      <div className="col-12">
        <p>
          Have questions or feedback?{" "}
          <a
            href={"mailto:justinlgargano@yahoo.com"}
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact me
          </a>
        </p>
      </div>
      <div className="col-12">
        <p>
          © Copyright 2020, All Rights Reserved | Developed by Justin Gargano
        </p>
      </div>
    </div>
  );
}