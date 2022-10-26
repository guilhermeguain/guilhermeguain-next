import React from 'react';

type Props = {
  color?: string;
};

export const Logo = ({ color = '#282933' }: Props) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 495 40"
      enableBackground="new 0 0 495 40"
      xmlSpace="preserve"
    >
      <path
        fill={color}
        d="M31.944,20.169h2.761V34.93c-1.728,1.653-3.822,2.911-6.282,3.774C25.962,39.569,23.361,40,20.62,40
	c-3.906,0-7.427-0.863-10.563-2.591c-3.136-1.727-5.597-4.113-7.38-7.155C0.892,27.211,0,23.794,0,20
	c0-3.794,0.892-7.211,2.676-10.253c1.783-3.042,4.244-5.427,7.38-7.155C13.192,0.864,16.732,0,20.676,0
	c2.892,0,5.549,0.46,7.972,1.38c2.422,0.921,4.497,2.263,6.225,4.028l-1.803,1.916c-1.653-1.652-3.503-2.845-5.549-3.578
	c-2.048-0.732-4.31-1.098-6.789-1.098c-3.381,0-6.433,0.752-9.155,2.253c-2.724,1.503-4.855,3.578-6.394,6.226
	c-1.541,2.648-2.31,5.606-2.31,8.873c0,3.23,0.779,6.169,2.338,8.817c1.559,2.648,3.69,4.732,6.395,6.253
	c2.704,1.521,5.746,2.282,9.127,2.282c4.507,0,8.244-1.201,11.211-3.605V20.169z"
      />
      <path
        fill={color}
        d="M49.887,36.479c-2.31-2.347-3.465-5.737-3.465-10.169V8h2.817v18.197c0,3.719,0.882,6.527,2.647,8.423
	c1.765,1.898,4.301,2.845,7.605,2.845c3.305,0,5.832-0.938,7.578-2.817c1.747-1.878,2.62-4.695,2.62-8.451V8h2.817v18.31
	c0,4.432-1.146,7.822-3.437,10.169C66.779,38.827,63.586,40,59.493,40C55.399,40,52.197,38.827,49.887,36.479z"
      />
      <path fill={color} d="M84.789,8h2.817v31.718h-2.817V8z" />
      <path fill={color} d="M100.225,8h2.817v29.295h18.253v2.423h-21.07V8z" />
      <path
        fill={color}
        d="M128.055,8h2.817v14.423h20.845V8h2.874v31.718h-2.874V24.845h-20.845v14.873h-2.817V8z"
      />
      <path
        fill={color}
        d="M189.632,37.295v2.423H167.21V8h21.746v2.479h-18.93v11.944h16.901v2.422h-16.901v12.45H189.632z"
      />
      <path
        fill={color}
        d="M221.068,39.718l-7.549-10.422c-0.901,0.113-1.841,0.169-2.817,0.169h-8.957v10.253h-2.817V8h11.774
	c4.058,0,7.24,0.949,9.55,2.845c2.31,1.897,3.465,4.535,3.465,7.916c0,2.479-0.648,4.573-1.943,6.281
	c-1.296,1.709-3.146,2.939-5.55,3.69l8,10.986H221.068z M218.223,24.93c1.747-1.446,2.62-3.502,2.62-6.169
	c0-2.667-0.873-4.713-2.62-6.141c-1.747-1.427-4.291-2.141-7.634-2.141h-8.845v16.62h8.845
	C213.932,27.099,216.477,26.376,218.223,24.93z"
      />
      <path
        fill={color}
        d="M266.814,8v31.718h-2.76V13.296l-13.07,22.253h-1.353l-13.07-21.972v26.141h-2.76V8h2.422l14.141,24
	l13.972-24H266.814z"
      />
      <path
        fill={color}
        d="M301.856,37.295v2.423h-22.422V8h21.747v2.479h-18.929v11.944h16.902v2.422h-16.902v12.45H301.856z"
      />
      <path
        fill={color}
        d="M368.185,20.169h2.761V34.93c-1.728,1.653-3.823,2.911-6.282,3.774c-2.46,0.865-5.061,1.296-7.802,1.296
	c-3.908,0-7.429-0.863-10.564-2.591c-3.137-1.727-5.598-4.113-7.38-7.155c-1.784-3.042-2.677-6.459-2.677-10.253
	c0-3.794,0.893-7.211,2.677-10.253c1.782-3.042,4.243-5.427,7.38-7.155C349.433,0.864,352.974,0,356.917,0
	c2.891,0,5.55,0.46,7.971,1.38c2.423,0.921,4.497,2.263,6.226,4.028l-1.803,1.916c-1.652-1.652-3.503-2.845-5.55-3.578
	c-2.046-0.732-4.309-1.098-6.788-1.098c-3.381,0-6.432,0.752-9.154,2.253c-2.724,1.503-4.855,3.578-6.395,6.226
	c-1.541,2.648-2.311,5.606-2.311,8.873c0,3.23,0.78,6.169,2.338,8.817c1.559,2.648,3.689,4.732,6.395,6.253
	c2.705,1.521,5.746,2.282,9.127,2.282c4.508,0,8.245-1.201,11.212-3.605V20.169z"
      />
      <path
        fill={color}
        d="M386.129,36.479c-2.311-2.347-3.466-5.737-3.466-10.169V8h2.817v18.197c0,3.719,0.882,6.527,2.647,8.423
	c1.765,1.898,4.301,2.845,7.606,2.845s5.83-0.938,7.576-2.817c1.747-1.878,2.621-4.695,2.621-8.451V8h2.817v18.31
	c0,4.432-1.146,7.822-3.438,10.169C403.02,38.827,399.826,40,395.733,40C391.639,40,388.438,38.827,386.129,36.479z"
      />
      <path
        fill={color}
        d="M439.508,30.93h-18.424l-4.056,8.789h-2.873L428.858,8h2.816l14.761,31.718h-2.929L439.508,30.93z
	 M438.379,28.563l-8.112-17.69l-8.112,17.69H438.379z"
      />
      <path fill={color} d="M453.028,8h2.816v31.718h-2.816V8z" />
      <path
        fill={color}
        d="M495,8v31.718h-2.367L471.28,12.901v26.817h-2.817V8h2.367l21.295,26.761V8H495z"
      />
    </svg>
  );
};
