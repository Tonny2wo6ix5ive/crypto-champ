import React, { useEffect, useState } from "react";
import axios, {Axios} from "axios";
import { useParams } from "react-router-dom";

export default function Currency(){

    let id = useParams();
    const [coinDetails, setCoinDetails] = useState({
        Name: "",
        price_usd: "",
        price_btc:"",
        volume24:0
    });

    useEffect(()=>{
        axios.get(`https://api.coinlore.net/api/ticker/?id=${id}`).then((response)=>{
            setCoinDetails({
                Name: response.data[0].name,
                price_usd: response.data[0].price_usd,
                price_btc:response.data[0].price_btc,
                volume24:response.data[0].volume24        
            })
            console.log(response.data[0]);
        })
    },[])

    return(
        <div></div>
    )
}