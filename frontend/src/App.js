import React from 'react';
import Map from './components/Map';
import Header from './components/Header';
import Form from './components/Form';
import LayersControl from './components/LayersControl';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      z: 7,
      lat: 51.6605982,
      lon: 39.2005858,
      city: '',
      type: '',
      curLayer: 'heat'
    };
  }
  onFormSubmit = async (e) => {
    e.preventDefault();
    const {city, type} = this.state;
    const res = await fetch(`https://nominatim.openstreetmap.org/search?city=${city}&format=json&accept-language=ru`);
    const coords = await res.json();
    const {lat, lon} = coords[0];
    this.setState(() => ({lat, lon}));
  }
  onInputChange = (e) => {
    e.persist();
    console.log(e.target);
    this.setState({[e.target.name]:e.target.value});
  }
  onLayerChange = (e) => {
    e.persist();
    console.log(e.target.name);
    this.setState(() => ({curLayer: e.target.name}))
  };
  render() {
    const {city, z, lat, lon, type, curLayer} = this.state;
    return (
      <div className="App">
        <Header />
        <div className="flex">
          <Map z={z} lat={lat} lon={lon} layer={curLayer} type={type}>
            <Form onSubmit={this.onFormSubmit} onChange={this.onInputChange} city={city} type={type}/>
            <LayersControl curLayer={curLayer} onClick={this.onLayerChange}/>
          </Map>
        </div>
        <style jsx>{`
          `}</style>
      </div>
    );
  }
}
//asdasda
