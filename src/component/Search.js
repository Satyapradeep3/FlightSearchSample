import React, {Component} from 'react';
import { responseJSON } from '../flight-data';


class Search extends Component {
    constructor() {
        super();
        this.state = {
          flightData: responseJSON,
          origin: '',
          arrival:'',
          selectedFlgihts:[]
        }
      }
 originChange = (event) => {
        console.log('working',event.target.value);
        this.setState({ origin:event.target.value})
    }
    arrivalChange = (event) => {
        console.log('working',event.target.value)
        this.setState({ arrival:event.target.value});
    }
    
    searchFlightHanlder =() => {
        const { origin,arrival, flightData} = this.state;
        let selectedFlights = flightData.filter((item)=> {
            return (item.origin == origin && item.destination == arrival );
        });
        this.setState({selectedFlights})
        }
    render(){
        const { selectedFlights} = this.state;
        const getTableData = selectedFlights && selectedFlights.map((item, idx) => {
            let gridRow = <tr key={idx}>
              <td>{item.flightNo}</td>
                <td>Air India</td>
                <td>{item.time.depart} - {item.time.arrive}</td>
                <td>2 Hrs</td>
                <td>Non Sop</td>
                <td>Rs. {item.amount}</td>
                <td>-</td>
                    
            </tr>
            return (<React.Fragment>{gridRow}</React.Fragment>)
          })
        return(
            <div> 
                <select className='main' onChange={(e) =>this.originChange(e)}>
                    <option>  select </option>
                    <option>  kolkata </option>
                    <option> Hyderabad </option>
                    <option> Delhi </option>
                    <option> Pune </option>
                    <option> Goa </option>
                    <option> Leh </option>
                </select>
                <select className='main' onChange={(e) =>this.arrivalChange(e)}>
                <option>  select </option>
                    <option> mumbai </option>
                    <option> Bengaluru </option>
                    <option> Chennai </option>
                    <option> Srinagar </option>
                    <option> Vizag </option>
                </select>
                <input type="date" className='date-picker' placeholder="Departure Date" />
                <input type="date" className='date-picker' placeholder="Return Date" />  
                <input type="button" className='search-btn' value="Search" onClick={this.searchFlightHanlder}/> 

                <hr/> 
                {selectedFlights && 
                <table border='1' align='center'> 
                    <tr>
                       <th>Flight No</th>
                       <th>Flight Name</th>
                       <th>Depature and Arrival Time</th>
                       <th>Duration</th>
                       <th>No of Stops</th>
                       <th>Price</th>
                       <th>Total no of Results</th>
                    </tr>
                    {getTableData}
                </table>
                }
            </div>
        )
    }
}

export default Search;