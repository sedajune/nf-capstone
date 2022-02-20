import { TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import StyledMapContainer from "./styled.js";
import React from "react";

const Map = () => {
	return (
		<>
			<StyledMapContainer zoomControl center={{ lat: 51.220915, lng: 10.357579 }} zoom={[12]}>
				<TileLayer
					url="https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic2VkYTIyIiwiYSI6ImNrenY4d2p0bjI3OTIyd3Blcmo3Zzljd3gifQ.ZSzuvi1Ftahgy8OrhPRBWA"
					zoomControl={false}
				/>
			</StyledMapContainer>
		</>
	);
};

export default Map;
