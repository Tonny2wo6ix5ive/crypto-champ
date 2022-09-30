import "../style.css";
import { useEffect, useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Main(){

    let navigate = useNavigate();
    const [coin, setCoin] = useState([]);    

    useEffect(()=>{
       axios.get("https://api.coinlore.net/api/tickers/?start=0&limit=100").then((responce)=>{
        setCoin(responce.data['data']);
       }) 
    },[])

    return(
        <div>
            {coin.map((value)=>{
                return (
                    <div className="data" onClick={()=>{
                        navigate(`/currencies/${value.id}`); 
                    }}>
                        <h2>{value.name}</h2>
                        <span>symbol: {value.symbol}</span>
                        <span>${value.price_usd}</span>
                    </div>
                )
            })}
        </div>
    )
}