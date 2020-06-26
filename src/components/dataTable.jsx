import React from 'react';
import '../assets/css/table.css';

const DataTable = (props) => {
    return (
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>Data</td>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>IP</td>
                        <td>{
                            props.ip
                        }</td>
                    </tr>

                    <tr>
                        <td>
                            Country
                        </td>
                        <td> {
                            props.country
                        } </td>

                    </tr>
                    <tr>
                        <td>Lat,longt</td>
                        <td>
                            <a rel='noopener noreferrer' href={`https://www.google.com/maps?q=${props.lat},${props.lng}`} target="_blank">{props.lat},{props.lng}</a>
                        </td>
                    </tr>
                    <tr>
                        <td>City</td>
                        <td>{
                            props.city
                        }</td>
                    </tr>

                
                    <tr>
                        <td>Continent</td>
                        <td>{
                            props.continent
                        }</td>
                    </tr>

                    <tr>
                        <td>Languages</td>
                        <td>{
                            props.accuracy_radius
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
                        <td>Postal</td>
                        <td>{
                            props.postal
                        }</td>
                    </tr>

                    <tr>
                        <td>Timezone</td>
                        <td>{
                            props.timezone
                        }</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
//http://www.geoplugin.net/json.gp?ip=219.100.37.158&base_currency=INR

export default DataTable;
