import React from 'react';
import L from 'leaflet';
import {Map, TileLayer} from 'react-leaflet';
import HeatmapLayer from 'react-leaflet-heatmap-layer';
import data from '../../frontend_html_density-map.json';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.map = {};
    }
    render() {
        const {lat, lon, z} = this.props;
        return (
            <>
                <Map center={L.latLng(lat, lon)} id="map" zoom={z}>
                    <HeatmapLayer
                        max={1}
                        fitBoundsOnLoad
                        fitBoundsOnUpdate
                        points={addressPoints}
                        longitudeExtractor={m => m[1]}
                        latitudeExtractor={m => m[0]}
                        intensityExtractor={m => parseFloat(m[2])} />
                    <TileLayer
                        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {this.props.children}
                </Map>
                <style jsx>{`
                    #map {
                        width: 100vw;
                        height: calc(100vh - 8.4rem);
                        position: relative;
                    }
                `}</style>
            </>
        );
    }
}

const first = data.features.map(item => [item.geometry.coordinates[0][1], item.geometry.coordinates[0][0], item.properties.edge_color.reduce((a, b) => a + b)]);
const second = data.features.map(item => [item.geometry.coordinates[1][1], item.geometry.coordinates[1][0], item.properties.edge_color.reduce((a, b) => a + b)]);
const addressPoints = first.concat(second);
console.log(addressPoints);