import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import LoadingScreen from 'react-loading-screen';
import logo from './assets/logo/react.gif';

export const Provinsi = () => {

    const [data, setData]   = useState([]);
    const [loading, setLoading]   = useState(true);

    useEffect(() => {
        const url = "https://api.kawalcorona.com/indonesia/provinsi";
        axios.get(url)
            .then(res => {
                setLoading(false);
                setData(res.data);
            })
            .catch(err => {
                setLoading(false);
            });
        document.title = 'Provinsi';
    });

    if(loading)
    {
        return (
            // <div>
            //     <br/>
            //     <h2>LOADING . . .</h2>
            // </div>
            <LoadingScreen
                loading={true}
                bgColor='#f1f1f1'
                spinnerColor='#9ee5f8'
                textColor='#676767'
                logoSrc= {logo}
                text='L O A D I N G'
            >
            </LoadingScreen>
        )
    }

    return (
        <div>
            <br/>
            <h2>PROVINSI</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>NO.</th>
                        <th>PROVINSI</th>
                        <th>MENINGGAL</th>
                        <th>POSITIV</th>
                        <th>SEMBUH</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, i) => (
                        <tr key={ i }>
                            <td>{ i+1 }</td>
                            <td>{ item.attributes.Provinsi }</td>
                            <td key={ item.FID }>{ item.attributes.Kasus_Meni }</td>
                            <td key={ item.FID }>{ item.attributes.Kasus_Posi }</td>
                            <td key={ item.FID }>{ item.attributes.Kasus_Semb }</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}