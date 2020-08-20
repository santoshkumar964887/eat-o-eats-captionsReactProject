import React from "react";
import "./Style.scss";
export default class Developer1 extends React.Component {
  render() {
    return (
      <>
        <div className="col-md-12">
          <h2>Developer Team</h2>
          <h4>
            here you find developers of this project with some talented and
            ambitious vision.. <br></br>
            we build a solution that makes easy the food ordering ..{" "}
          </h4>
        </div>

        <div className="Main">
          <div className="card">
            <div className="image">
              <img src="https://www.w3schools.com/images/picture.jpg"></img>
            </div>
            <div class="card-body text-center">
              <table class="card-text">
                <tr><th><span>Name: </span></th><th>Santosh Kumar Singh</th></tr>
                <tr><th><span>Contact No.: </span></th><th>9648874883</th></tr>
                <tr><th><span>Email Id: </span></th><th> santoshkumar964887@gmail.com</th></tr>
                <tr><th><span>LinkedIn Profile: </span></th><th>linkedin.com/in/santosh-kumar/</th></tr>
              </table>
            </div>
          </div>

          <div className="card">
            <div className="image">
              <img src="https://www.w3schools.com/images/picture.jpg"></img>
            </div>
            <div class="card-body text-center">
              <table class="card-text">
                <tr><th><span>Name: </span></th><th>Swaminathan V.B</th></tr>
                <tr><th><span>Contact No.: </span></th><th>9790553988</th></tr>
                <tr><th><span>Email Id: </span></th><th> sayeeiyer@gmail.com</th></tr>
                <tr><th><span>LinkedIn Profile: </span></th><th>linkedin.com/swaminathanvb/</th></tr>
              </table>
            </div>
            
          </div>

          <div className="card">
            <div className="image">
              <img src="https://www.w3schools.com/images/picture.jpg"></img>
            </div>
            <div class="card-body text-center">
              <table class="card-text">
                <tr><th><span>Name: </span></th><th>Pratiksha Madane</th></tr>
                <tr><th><span>Contact No.: </span></th><th> 8379022112</th></tr>
                <tr><th><span>Email Id: </span></th><th> pratikshaymadane@gmail.com</th></tr>
                <tr><th><span>LinkedIn Profile: </span></th><th> linkedin.com/in/pratiksha-madane/</th></tr>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
}
