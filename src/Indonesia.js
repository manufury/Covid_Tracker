import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import LoadingScreen from 'react-loading-screen';
import logo from './assets/logo/react.gif';

export const Indonesia = () => {

    const [data, setData]   = useState({});
    const [loading, setLoading]   = useState(true);

    useEffect(() => {
        const url = "https://api.kawalcorona.com/indonesia";
        axios.get(url)
            .then(res => {
                setData(res.data[0]);
                setLoading(false);
            })
            .catch(err => {
                setLoading(false);
            });
        document.title = 'Indonesia';
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
            <h2>INDONESIA</h2>
            <Table striped bordered hover>
                <tr>
                    <td>Positif</td>
                    <td>{ data.positif }</td>
                </tr>
                <tr>
                    <td>Sembuh</td>
                    <td>{ data.sembuh }</td>
                </tr>
                <tr>
                    <td>Meninggal</td>
                    <td>{ data.meninggal }</td>
                </tr>
                <tr>
                    <td>Dirawat</td>
                    <td>{ data.dirawat }</td>
                </tr>
            </Table>
        </div>
    )
}