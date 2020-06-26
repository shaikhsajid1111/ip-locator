import React from 'react';
import ReactDom from 'react-dom';
import DataTable from './components/dataTable'
import './assets/css/index.css';
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      query: 'xx.xx.xx.xx'
    };
    this.submitHandle = this.submitHandle.bind(this);
    this.queryUpdate = this.queryUpdate.bind(this)
  }
  
  
  ValidateIPaddress(ipaddress) {  
    if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress)) {  
      return (true);  
    }  
    return (false);
      
  } 

  componentDidMount() {
    fetch(`http://www.geoplugin.net/json.gp?ip=${this.state.query}`)
      .then(response => response.json())
      .then(data => this.setState({ data: data }));
  }

  submitHandle(event) {
    //alert(`Value is ${this.state.query}`)
    event.preventDefault() 
    if(this.ValidateIPaddress(this.state.query)){

    
    fetch(`http://www.geoplugin.net/json.gp?ip=${this.state.query}`)
        .then(response => response.json())
        .then(data => this.setState({ data : data }));
      console.log(this.state.data)
    }
    else{
      alert("Invalid IP")
    }
  }
  queryUpdate(eve) {
    this.setState({
      query: eve.target.value
    })
  }


  render() {


    return (
      
      <>
        <form onSubmit={this.submitHandle}>
          <input
            type="text"
            placeholder="Enter IP address"
            className = "ip_address_input"
            onChange={this.queryUpdate}
            required
          />
          <input className="submit_button" type="submit" />
        </form>



        <DataTable 
        className = "data"
          ip = {this.state.data.geoplugin_request}
          country = {this.state.data.geoplugin_countryName}
          continent = {this.state.data.geoplugin_continentName}
          lat = {this.state.data.geoplugin_latitude}
          lng = {this.state.data.geoplugin_longitude}
          accuracy_radius = {this.state.data.geoplugin_locationAccuracyRadius}

        />
        
      </>
    )
  }
}


ReactDom.render(<App />, document.getElementById('root'))

