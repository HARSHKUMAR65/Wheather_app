import React, { useState } from "react";
import DisplayWeather from "./DisplayWeather";
import "./weather.css";

function Weather() {
    const [weather, setWeather] = useState([]);
    const [form, setForm] = useState({
        city: "",
        country: ","
    });

    const APIKEY = "c15c967a8a51fb38be879ae8c9a4e4e7";

    async function weatherData(e) {
        e.preventDefault();
        if (form.city === "") {
            alert("Add Value");
        } else {
            const data = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&APPID=${APIKEY}`
            )
                .then((res) => res.json())
                .then((data) => data);

            setWeather({ data: data });
        }
    }

    const handlechange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        if (name === "city") {
            setForm({ ...form, city: value });
        }
        if (name === "country") {
            setForm({ ...form, country: value });
        }
    };
    return (
        <div className="weather">
            <span className="title">Weather_aap</span>
            <br />
            <form>
                <input
                    type="text"
                    placeholder="city"
                    name="city"
                    onChange={(e) => handlechange(e)}
                />
                &nbsp; &nbsp; &nbsp;&nbsp;
                <input
                    type="text"
                    placeholder="Country"
                    name="country"
                    onChange={(e) => handlechange(e)}
                />
                <button className="getweather"
                // onClick={(e) => weatherDate(e)}
                >
                    Sumit
                </button>
            </form>
            {weather.data !== undefined ? (
                <div>
                    {/* <DisplayWeather data={weather.data} /> */}
                </div>
            ) : null}
        </div>
    )
}

export default Weather;