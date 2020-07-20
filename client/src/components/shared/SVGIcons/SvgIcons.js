import React from 'react'

//This renders the svg files we recieved from the UX/UI team
//it uses a switch method to find the appropriate viewbox and
//path. This code was built of a tutorial that can be found
// here: https://blog.lftechnology.com/using-svg-icons-components-in-react-44fbe8e5f91
//for an example of how to render an icon from this component
//please see components/shared/ProfilePic/ProfilePic.js - JackieJane

const getViewBox = name => {
  switch (name) {
    case 'camera':
      return "0 0 20 17";
    default:
      return "0 0 32 32";
  }
};

const getPath = (name, props) => {
  switch (name) {
    case 'camera':
      return (
        <path
          {...props}
          d="M2.85303 16.6602H17.147C18.8818 16.6602 19.7534 15.7969 19.7534 14.0869V5.396C19.7534 3.68604 18.8818 2.83105 17.147 2.83105H15.2129C14.5654 2.83105 14.3579 2.69824 13.9927 2.2832L13.3203 1.53613C12.9053 1.07959 12.4819 0.830566 11.627 0.830566H8.31494C7.45996 0.830566 7.03662 1.07959 6.62158 1.53613L5.95752 2.2832C5.59229 2.68994 5.38477 2.83105 4.7373 2.83105H2.85303C1.11816 2.83105 0.246582 3.68604 0.246582 5.396V14.0869C0.246582 15.7969 1.11816 16.6602 2.85303 16.6602ZM10 14.0039C7.49316 14.0039 5.47607 11.9868 5.47607 9.46338C5.47607 6.93994 7.49316 4.92285 10 4.92285C12.5151 4.92285 14.5322 6.93994 14.5322 9.46338C14.5322 11.9868 12.5151 14.0039 10 14.0039ZM15.9683 7.43799C15.4038 7.43799 14.939 6.98145 14.939 6.41699C14.939 5.84424 15.4038 5.3877 15.9683 5.3877C16.5327 5.3877 16.9976 5.84424 16.9976 6.41699C16.9976 6.98145 16.5327 7.43799 15.9683 7.43799ZM10 12.7422C11.8096 12.7422 13.2788 11.2812 13.2788 9.46338C13.2788 7.64551 11.8096 6.18457 10 6.18457C8.19043 6.18457 6.72949 7.64551 6.72949 9.46338C6.72949 11.2812 8.19873 12.7422 10 12.7422Z"
        />
      );
    default:
      return <path />;
  }
};

const SVGIcon = ({
  name = "",
  style = {},
  fill = "#000",
  viewBox = "",
  width = "100%",
  className = "",
  height = "100%"
}) => (
    <svg
      width={width}
      style={style}
      height={height}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox || getViewBox(name)}
      xmlnsXlink="http://www.w3.org/1999/xlink">
      {getPath(name, { fill })}
    </svg>
  );

export default SVGIcon;