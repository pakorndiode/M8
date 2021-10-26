import React from "react"
import styled from 'styled-components'
import {} from 'react-bootstrap'

function Form ({className}){
    return(
        <div className={`row mx-0 ${className}`}>
            <div className="form col-7 ">
                <label className="name"> name </label>
                <input type="text" id="name" name="name" placeholder="ข้าวมันไก่" />
            </div>
            <div className="form col-5 ">
                <label className="form"> nationality </label>
                <input type="text" id="nationality" name="nationality" placeholder="ไทย" />
            </div>
            <div className="form col-12 ">
                <label className="form"> Type of foods </label>
                <input type="text" id="Type" name="Type" placeholder="ของคาว/ของหวาน/อาหารว่าง" />
            </div>
            <div className="form col-12 ">
                <label className="form"> description </label>
                <textarea placeholder="ช้าวมันไก่มีความนิยมส่วนมากใน......"></textarea>
            </div>
            <div className="form col-6 ">
                <label className="name"> Calorie</label>
                <input type="text" id="calorie" name="calorie" placeholder="300" />
            </div>
            <div className="form col-6 ">
                <label className="form"> Price </label>
                <input type="text" id="price" name="price" placeholder="50" />
            </div>
        </div>
    )
}

export default styled(Form)`
    font-family:Arial, sans-serif;
    font-weight:lighter;
    padding:50px;
    margin-bottom:8.5%;
    .form{
        font-size:25px;
        font-weight:0;
    };
    input[type=text]{
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    font-size:18px;
    };
    textarea{
        width:100%;
        font-size:18px;
        padding:10px;
        border: 1px solid #ccc;
    }

`