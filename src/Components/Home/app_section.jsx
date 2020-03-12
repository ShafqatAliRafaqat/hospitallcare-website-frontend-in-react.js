import React, { Component } from "react";

class AppSection extends Component {

    render () {
        return(
            <>
                <div id="app_section">
            <div className="container">
                <div className="row justify-content-around">
                    <div className="col-md-5">
                        <p><img src="img/app_img.svg" alt="Hospitall Care" className="img-fluid" width="500" height="433" /></p>
                    </div>
                    <div className="col-md-6">
                        <small>Application</small>
                        <h3>Download <strong>Findoctor App</strong> Now!</h3>
                        <p className="lead">Tota omittantur necessitatibus mei ei. Quo paulo perfecto eu, errem percipit ponderum no eos. Has eu mazim sensibus. Ad nonumes dissentiunt qui, ei menandri electram eos. Nam iisque consequuntur cu.</p>
                        <div className="app_buttons wow" data-wow-offset="100">
                            <a href="#0" className="fadeIn"><img src="img/apple_app.png" alt="CareALL" width="150" height="50" data-retina="true"  /></a>
                            <a href="#0" className="fadeIn"><img src="img/google_play_app.png" alt="CareALL" width="150" height="50" data-retina="true" /></a>
                        </div>
                    </div>
                </div>
                {/* <!-- /row --> */}
            </div>
            {/* <!-- /container --> */}
        </div>
        {/* <!-- /app_section --> */}
            </>
        );
    }
}
export default AppSection;