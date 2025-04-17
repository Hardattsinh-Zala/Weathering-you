import { useState } from "react"
import FormPropsTextFields from "./FormPropsTextFields"
import BasicTable from "./Table";
import "../index.css";

export default function () {
    const [city, getCity] = useState("");

    function getValue(event) {
        event.preventDefault();
        getCity(event.target.value);
    }

    return (
        <div className="w-70 flex flex-col items-center rounded-3xl sm:container sm:w-1/2">
            <FormPropsTextFields getValue={getValue} />
            <br />
            {city != "" && (
                <BasicTable city={city}></BasicTable>
            )}
        </div>
    )
}