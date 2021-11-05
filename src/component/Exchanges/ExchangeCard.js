import  React  from "react";
import './ExchangeCard.css';
import Card from "../Card/Card";
import Details from "../Detail/Detail";
import PropTypes from 'prop-types'


export default function ExchangeCard({Keys}){
    return (
        <Card >
        <Details apiKeys={Keys}/>
        </Card>
    );
}

ExchangeCard.prototype = {
    Keys:PropTypes.arrayOf(PropTypes.string.isRequired)
}