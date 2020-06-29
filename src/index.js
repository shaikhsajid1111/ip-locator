import React from 'react';
import ReactDom from 'react-dom';
import DataTable from './components/dataTable'
import Footer from './components/footer';
import './assets/css/index.css';

/*main app component*/ 
class App extends React.Component {
  constructor(props) {
    super(props);
    /*state of the component*/ 
    this.state = {
      data: {},         /**to store data from API fetch */
      query: ''       /**to store query */
    };
    this.submitHandle = this.submitHandle.bind(this);
    this.queryUpdate = this.queryUpdate.bind(this)
  }
  
  /**to check if the input IP address is valid IP address */
  ValidateIPaddress(ipaddress) {  
    if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress)) {  
      return (true);  
    }  
    return (false);
      
  } 
  /*detect user by default IP adrress*/ 
  componentDidMount() {
    /*fetch data about the user's IP address*/ 
    fetch(`https://ipapi.co/json/`)
      .then(response => response.json())
      .then(data => {
        /**set the state with that data */
        this.setState({ data : data })
      },(error) => {
        /**if error occurs */
        console.log(error)
      })
  
    }

  submitHandle(event) {
  
    event.preventDefault()      /**stop refreshing onSubmit */ 
    if(this.ValidateIPaddress(this.state.query)){

    
      fetch(`https://ipapi.co/${this.state.query}/json/`)
        .then(response => response.json())
        .then(data => {
          this.setState({data : data})
        },(error) =>{
          console.log(error)
        });
      console.log(this.state.data)
    }
    else{
      alert("Invalid IP")
    }
  }
  queryUpdate(eve) {
    this.setState({
      
      query: eve.target.value.replace(/^\s+|\s+$/g, "")/**replace extra spaces from the string */
    })
  }


  render() {


    return (
      
      <>
     
        <form onSubmit={this.submitHandle}>
          <input
            type="search"
            placeholder="Enter IP address"
            className = "ip_address_input"
            onChange={this.queryUpdate}
            title = "Enter IP address"
            required
          />
          <input className="submit_button" type="submit" value="Search" />
        </form>
    
    <h2 className="IP">Detected : {this.state.data.ip}</h2>

        <DataTable 
        className = "data"
          
          country = {this.state.data.country_name}
          country_code = {this.state.data.country_code}
          continent = {this.state.data.continent_code}
          lat = {this.state.data.latitude}
          lng = {this.state.data.longitude}
          accuracy_radius = {this.state.data.languages}
          currency = {this.state.data.currency}
          city = {this.state.data.city}
          region = {this.state.data.region}
          region_code = {this.state.data.region_code}
          in_eu = {this.state.data.in_eu}
          postal = {this.state.data.postal}
          timezone = {this.state.data.timezone}
          uts_offset = {this.state.data.utc_offset}
          country_calling_code = {this.state.data.country_calling_code}
          country_area = {this.state.data.country_area}
          country_population = {this.state.data.country_population}
          asn = {this.state.data.asn}
          org = {this.state.data.org}
          currency_name = {this.state.data.currency_name}
          country_capital = {this.state.data.country_capital}
          country_tld = {this.state.data.country_tld}
        />

      <Footer/>
      </>
    )
  }
}


ReactDom.render(<App />, document.getElementById('root'))

