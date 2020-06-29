import React from 'react';
import '../assets/css/table.css';
/* eslint eqeqeq: 0 */
const DataTable = (props) => {
    /*to replace abbreviation with fullname*/ 
    const contienentName = {'AS' : 'Asia','NA' : "North America",
                            'AF' : "Africa","EU" : "Europe",
                            "SA" : "South America",'AQ' : "Antarctica",
                            "OC" : "Australia/Oceania"
}
    return (
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <td>Attributes</td>
                        <td>Data</td>
                    </tr>
                </thead>

                <tbody>
                <tr>
                        <td>Continent</td>
                        <td>{
                            contienentName[props.continent]
                        }</td>
                    </tr>

                    <tr>
                        <td>
                            Country
                        </td>
                        <td>{props.country_code} | {
                            props.country
                        } </td>

                    </tr>
                    <tr>
                        <td>State </td>
                        <td> {props.region_code} | {
                            props.region
                        } </td>
                    </tr>

                  

                    <tr>
                        <td>City</td>
                        <td>{
                            props.city
                        }</td>
                    </tr>
                    <tr>
                        <td>Postal Code</td>
                        <td>{
                            props.postal
                        }</td>
                    </tr>
                    <tr>
                        <td>Latitude,Longitude</td>
                        <td>
                            <a rel='noopener noreferrer' href={`https://www.google.com/maps?q=${props.lat},${props.lng}`} target="_blank">{props.lat},{props.lng}</a>
                        </td>
                    </tr>
                   

                
                   

                    <tr>
                        <td>Languages</td>
                        <td>{
                            props.languages
                        }</td>
                    </tr>
                    <tr>
                        <td>Timezone</td>
                        <td>{
                            props.timezone
                        }</td>
                    </tr>

                    <tr>
                        <td>UTC Offset</td>
                        <td>{
                            props.uts_offset
                        }</td>
                    </tr>
                    <tr>
                        <td>Currency</td>
                        <td>{
                            props.currency
                        }</td>
                    </tr>

                    <tr>
                        <td>Currency Name</td>
                        <td>{
                            props.currency_name
                        }</td>
                    </tr>
                
                    <tr>
                        <td>Country population</td>
                        <td>{
                            props.country_population
                        }</td>
                    </tr>

                    

                  

                    <tr>
                        <td>Country Calling Code</td>
                        <td>{
                            props.country_calling_code
                        }</td>
                    </tr>
                    
                    <tr>
                        <td>Country Area</td>
                        <td>{
                            props.country_area} Kms</td>
                    </tr>

                    <tr>
                        <td>Country Population</td>
                        <td>{
                            props.country_population
                        }</td>
                    </tr>
                    
                    <tr>
                        <td>Autonomous System Number (ASN)</td>
                        <td>{
                            props.asn
                        }</td>
                    </tr>
                    <tr>
                        <td>European Union </td>
                        
                        <td>{props.in_eu == "" ? "No" : "Yes"} </td>
                    </tr>
                    <tr>
                        <td>Organization</td>
                        <td>{props.org} </td>
                    </tr>
                   

                </tbody>
            </table>
        </div>
    )
}


export default DataTable;
