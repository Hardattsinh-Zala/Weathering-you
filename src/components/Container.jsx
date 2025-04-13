import { useState } from "react"
import FormPropsTextFields from "./FormPropsTextFields"
import Table from "./Table"
import { getData } from '../logic/api'
import BasicTable from "./Table";
import "../index.css";

export default function () {
    const [city, getCity] = useState("");

    function getValue(event) {
        event.preventDefault();
        getCity(event.target.value);
    }

    return (
        <div className="container">
            <FormPropsTextFields getValue={getValue} />
            <br />
            {city != "" && (
                <BasicTable city={city}></BasicTable>
            )}
        </div>
    )
}