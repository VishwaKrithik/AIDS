import { useState, useEffect } from "react";
import GunList from "./GunList";
import useFetch from "./useFetch";

const Body = () => {
    
    const {data: masterGuns, isPending, error} = useFetch("http://localhost:8000/masterGuns");

    return ( 
        <div className="body">
            { error && <div className="body-error">{ error }</div> }
            { isPending && <div className="body-pending">Loading da data...</div>}
            { masterGuns && (
            <>
                <GunList masterGuns={ masterGuns }  title="All Guns" />
                <GunList masterGuns={ masterGuns.filter((gun) => gun.class === "SMG")}  title="SMG" />
                <GunList masterGuns={ masterGuns.filter((gun) => gun.class === "Sniper")}  title="Sniper" />
                <GunList masterGuns={ masterGuns.filter((gun) => gun.class === "Shotgun")}  title="Shotgun" />
                <GunList masterGuns={ masterGuns.filter((gun) => gun.class === "Marksman")}  title="Marksman" />
            </>
            )
            }
        </div>
    );
}
 
export default Body;