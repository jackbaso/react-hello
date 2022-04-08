import React from "react";

const Welcome = (props) => {
	return (
		<h1>
			Bienvenido {props.name} {props.lastname} a 4GeeksAcademy
		</h1>
	);
};

export default Welcome;
