import React from "react";
import Carding from "../Cards";
import b1 from "../../assets/Images/b1.jpg";
import b2 from "../../assets/Images/b2.jpg";
import b3 from "../../assets/Images/b3.jpg";
import b4 from "../../assets/Images/b4.jpg";
import b5 from "../../assets/Images/b5.jpg";
import b6 from "../../assets/Images/b6.jpg";
function Blog() {
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-evenly">
          <div className="col-md-3 col-11">
            <Carding cardTitle="The Best Repair Service" image={b1} />
          </div>
          <div className="col-md-3 col-11">
            <Carding cardTitle="When Quality Is Important" image={b2} />
          </div>
          <div className="col-md-3 col-11">
            <Carding cardTitle="For All Your DIY Needs" image={b3} />
          </div>
        </div>
        <div className="row justify-content-evenly mb-10">
          <div className="col-md-3 col-11">
            <Carding cardTitle="The Home Repair Experts" image={b4} />
          </div>
          <div className="col-md-3 col-11">
            <Carding cardTitle="Repair Is Our Passion" image={b5} />
          </div>
          <div className="col-md-3 col-11">
            <Carding cardTitle="The Service You Deserve" image={b6} />
          </div>
        </div>
      </div>
    </>
  );
}
export default Blog;
