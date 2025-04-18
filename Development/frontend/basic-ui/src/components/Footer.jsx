import React from 'react';


const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="col-lg-12">
          <p>Copyright © {new Date().getFullYear()} Villa Agency Co., Ltd. All rights reserved.
            <br />
            Design: <a rel="nofollow" href="https://templatemo.com" >TemplateMo</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;