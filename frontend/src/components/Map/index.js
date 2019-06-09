import React from 'react';
import L from 'leaflet';
import {Map, TileLayer, Polygon, Marker} from 'react-leaflet';
import HeatmapLayer from 'react-leaflet-heatmap-layer';
import data from '../../frontend_html_density-map.json';
import polygons from '../../polygons_walk_area_all_point.json';
import restraunts from '../../polygons.json';
import fastFood from '../../polygons_ff.json';

export default class extends React.Component {
    state = {
        poligon: undefined,
        poligonExternal: undefined,
        markerPosition: undefined,
        restrauntsPosition: undefined
    };
    getCoorda = (e) => {
        const coorda = [e.latlng.lng, e.latlng.lat];
        const keys = Object.keys(polygons).map(item => item.split(' '));
        let s = 400, index;
        keys.forEach((item, i) => {
            const range = Math.sqrt(Math.pow(item[0] - coorda[0], 2) + Math.pow(item[1] - coorda[1], 2));
            if (range < s) {
                s = range;
                index = i;
            }
        });
        const asText = `${keys[index][0]} ${keys[index][1]}`;
        console.log(asText);
        const markerPosition = asText.split(' ').reverse();
        const polygon = polygons[asText][0].map(item => item.reverse());
        const polygonExternal = polygons[asText][1].map(item => item.reverse());
        //console.log(markerPosition);
        this.setState(() => ({markerPosition, polygon, polygonExternal}));
    };
    render() {
        const {lat, lon, z, layer, type} = this.props;
        return (
            <>
                <Map center={L.latLng(lat, lon)} id="map" zoom={z} onClick={this.getCoorda}>
                    <HeatmapLayer
                        max={1}
                        fitBoundsOnLoad
                        fitBoundsOnUpdate
                        points={(layer === 'heat') ? addressPoints : []}
                        longitudeExtractor={m => m[1]}
                        latitudeExtractor={m => m[0]}
                        intensityExtractor={m => parseFloat(m[2])} />
                    {(this.state.markerPosition) && (<><Polygon 
                        positions={this.state.polygon}
                        color={(layer === 'poly') ? '#FF9292' : 'transparent'}/>
                    <Polygon 
                        positions={this.state.polygonExternal}
                        color={(layer === 'poly') ? '#FF3E3E' : 'transparent'}/>
                    <Marker position={this.state.markerPosition} opacity={(layer === 'poly') ? '1' : '0'}/></>)}
                    <TileLayer
                        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {(type == 'Ресторан') && 
                         Object.values(restraunts).map((item, i) => <Polygon 
                            positions={item[0].map(item => item.reverse())}
                            color='#FF9292'
                            key={i}/>)
                    }
                    {(type == 'Ресторан') && 
                        Object.values(restraunts).map((item, i) => <Polygon 
                            positions={item[1].map(item => item.reverse())}
                            color='#FF3E3E'
                            key={i}/>)
                    }
                    {(type == 'Фаст Фуд') && 
                         Object.values(fastFood).map((item, i) => <Polygon 
                            positions={item[0].map(item => item.reverse())}
                            color='#5582AC'
                            key={i}/>)
                    }
                    {(type == 'Фаст Фуд') && 
                        Object.values(fastFood).map((item, i) => <Polygon 
                            positions={item[1].map(item => item.reverse())}
                            color='#2368A7'
                            key={i}/>)
                    }
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

//const polygon = [[39.20437,51.6640107], [39.2042646, 51.664042], [39.203713, 51.6642879], [39.2035959, 51.6644021], [39.2023373, 51.6658309], [39.200897, 51.6675074], [39.2017312, 51.6714293], [39.2062669, 51.671448], [39.2084914, 51.671423], [39.2127692, 51.6712926], [39.2142921, 51.6709301], [39.2150499, 51.6707404], [39.2138653, 51.6678277], [39.2110513, 51.6646819], [39.20437, 51.6640107]];