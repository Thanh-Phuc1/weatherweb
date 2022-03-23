import React, {useState} from 'react'

const axios = require('axios');
const APIKEY = "228cb3fb449d4f6aa15142118222303";
const URL = "http://api.weatherapi.com/v1";
export default function Weather() {
    let [weather, setWeather] = useState();
    const [address, setAddress] = useState();
    async function getWeather() {
        try {
            const response = await axios.get(`${URL}/current.json?key=${APIKEY}&q=${address}`);
            console.log(response?.data);
            setWeather(response?.data)
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div style={{ margin: 100 } } >
            <h1>
                Tra Cứu Thời Tiết 
            </h1>
            <br></br>
            <input type="text" placeholder="Nhập địa điểm" value={address} onChange={e => setAddress(e.target.value)} />
            <button onClick={getWeather} >Tra cứu</button>
            {weather && <ul>
                <li><label>Thời tiết tại</label> :{weather?.location?.name} - {weather?.location?.country} </li>
                <li><label>Thời gian cập nhật</label> :{weather?.location?.localtime} </li>
                <li><label>Nhiệt độ ( độ C )</label> :{weather?.current?.temp_c} </li>
                <li><label>Nhiệt độ ( độ F )</label> :{weather?.current?.temp_f} </li>
                <li><a href="https://www.weatherapi.com/" title="Free Weather API">
                    <img src={`${weather?.current?.condition?.icon}`} alt="Weather data by WeatherAPI.com" border="0" /> </a></li>
            </ul>}
        </div>
    )
}




