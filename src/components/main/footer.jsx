import React from "react";
import classNames from "classnames";

class Footer extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    const copyrightGridSizes = classNames("col-md-10 col-sm-8 col-xs-12");
    const iconListGridSizes = classNames("col-md-2 col-sm-4 col-xs-12");

    const copyrightClass = classNames("copyright", "navbar-text", "pull-left", copyrightGridSizes);
    const iconListClass = classNames("media-icons-list", "list-inline", "pull-right",
      iconListGridSizes);

    return (
      <div className="container">
        <div className="row">
          <div className={ copyrightClass }>Copyright © 2018 Zack Honig</div>

          <ul className={ iconListClass }>

            <li><a href="https://www.linkedin.com/in/zackhonig" target="_blank">
              <img className="social-media-icon img-circle" src="/images/icons/linkedin.png"/>
            </a></li>

            <li><a href="https://github.com/zhonig/javascript-react-5-day-weather-forecast" target="_blank">
              <img className="social-media-icon img-circle" src="/images/icons/github.png"/>
            </a></li>

          </ul>
        </div>
      </div>
     );
  }
}

export default Footer;
