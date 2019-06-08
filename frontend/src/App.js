import React from 'react';
import Map from './components/Map';
import Header from './components/Header';
import Form from './components/Form';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      z: 7,
      lat: 51.6605982,
      lon: 39.2005858,
      city: '',
      type: ''
    };
  }
  onFormSubmit = async (e) => {
    e.preventDefault();
    const {city} = this.state;
    const res = await fetch(`https://nominatim.openstreetmap.org/search?city=${city}&format=json&accept-language=ru`);
    const coords = await res.json();
    const {lat, lon} = coords[0];
    this.setState(() => ({lat, lon}));
  }
  onInputChange = (e) => {
    e.persist();
    this.setState({[e.target.name]:e.target.value});
  }
  render() {
    const {city, z, lat, lon, type} = this.state;
    return (
      <div className="App">
        <Header />
        <div className="flex">
          <Map z={z} lat={lat} lon={lon}>
            <Form onSubmit={this.onFormSubmit} onChange={this.onInputChange} city={city} type={type}/>
          </Map>
        </div>
        <style jsx>{`
          `}</style>
      </div>
    );
  }
}