import React from "react";
import ReactDOM from "react-dom";
import Fields from './field'

ReactDOM.render(
    <Fields label={'Contador'} initialValue={10}/>
, document.getElementById('app'))