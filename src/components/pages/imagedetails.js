import React from 'react';
import {useParams} from "react-router-dom";


export const ImageDetails = () => {
	let {id} = useParams();

	return (<> <div style={{width:'20rem', height:'10rem', background:'red',}}> sdl;j</div>
		<div> {id} </div>
		</>);
}