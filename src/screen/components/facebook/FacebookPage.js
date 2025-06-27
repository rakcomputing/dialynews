import React, { useEffect } from "react";

const FacebookPage = ({ pageUrl, width, height }) => {
  useEffect(() => {
    // Load the Facebook SDK
    if (window.FB) {
      window.FB.XFBML.parse();
    }
  }, []);

  return (
    <div
      className="fb-page"
      data-href={pageUrl}
      data-width={width}
      data-height={height}
      data-tabs="timeline"
      data-small-header="false"
      data-adapt-container-width="true"
      data-hide-cover="false"
      data-show-facepile="true"
    >
      <blockquote cite={pageUrl} className="fb-xfbml-parse-ignore">
        <a href={pageUrl}>Facebook Page</a>
      </blockquote>
    </div>
  );
};

export default FacebookPage;
