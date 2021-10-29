import React,{useState} from "react"
import styled from 'styled-components'
import axios from 'axios'
import Swal from 'sweetalert2';
import { useHistory } from "react-router";
import {} from 'react-bootstrap'



function Form ({className}){

    const [name,setName] = useState("ww");
    const [nationality,setNationality] = useState("");
    const [urlImg, setUrlImg] = useState("");
    const [type, setType] = useState(1);
    const [description, setDescription] = useState("");
    const [calorie, setCalorie] = useState("");
    const [price, setPrice] = useState("");

    const history = useHistory();

    function sendData(event){
        
        event.preventDefault();
        
        const textTest = /[a-zA-zก-ฮ ำ ้]$/
        const numTest = /\d$/
        const textNTest = /[a-zA-Zก-ฮ\d]$/
        const imageURLTest = /^(([h])([t])([t])([p])([s])([:])([/])([/]))([a-zA-Z0-9ก-ฮ])/

        if (textTest.test(name) == false) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Sorry name must be letters only!',
                width:400
            })
        } else if (textTest.test(nationality) == false) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Sorry nationality must be letters!'
            })
        } else if (imageURLTest.test(urlImg) == false) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Sorry image must be imagelink address only!'
            })
        } else if (textNTest.test(description) == false) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Sorry description must be letters or numbers!'
            })
            console.log('BUG',textNTest.test(description));
        } else if (numTest.test(calorie) == false) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Sorry calorie must be numbers!'
            })
        } else if (numTest.test(price) == false) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Sorry price must be numbers!'
            })
        }else{Swal.fire(
            'Add Success!',
            `Now ${name} was added to menu!`,
            'success',
            history.push('/Home')
            )
            axios.post("http://localhost:5000/createMenu",{
                name: name,
                nationality: nationality,
                type: type,
                description :description,
                calorie: calorie,
                price: price,
                image:urlImg
            })
        }
    }

    return(
        <form className={`row mx-0 ${className}`}>
            <label className="Createmenu"> Create menu </label>
            <div className="form col-7 ">
                <label className="form"> name </label>
                <input type="text" id="name" name="name" placeholder="ข้าวมันไก่" onChange={(event)=>{setName(event.target.value)}} />
            </div>
            <div className="form col-5 ">
                <label className="form"> nationality </label>
                <input type="text" id="nationality" name="nationality" placeholder="ไทย" onChange={(event)=>{setNationality(event.target.value)}} />
            </div>
            <div className="form col-12 ">
                <label className="form"> Url Image </label>
                <input type="text" id="UrlImage" name="UrlImage" placeholder="http://" onChange={(event)=>{setUrlImg(event.target.value)}} />
            </div>
            <div className="form col-12 ">
                <label className="form"> Type of foods </label>
                <select id="food" name="country" type="text" onClick={(detail)=>{setType(detail.target.value)}}>
                    <option value="1">อาหารคาว</option>
                    <option value="3">อาหารว่าง</option>
                    <option value="2">ของหวาน</option>
                </select>
            </div>
            <div className="form col-12 ">
                <label className="form"> description </label>
                <textarea placeholder="ข้าวมันไก่มีความนิยมส่วนมากใน......" onChange={(event)=>{setDescription(event.target.value)}} />
            </div>
            <div className="form col-6 ">
                <label className="form"> Calorie</label>
                <input type="text" id="calorie" name="calorie" placeholder="300" onChange={(event)=>{setCalorie(event.target.value)}} />
            </div>
            <div className="form col-6 ">
                <label className="form"> Price </label>
                <input type="text" id="price" name="price" placeholder="50" onChange={(event)=>{setPrice(event.target.value)}} />
            </div>
            <div className="col-12 d-flex justify-content-end">
                <input type="submit" value="Submit" className="col-lg-3 col-sm-6" onClick={sendData} />
            </div>
        </form>
    )
}

export default styled(Form)`
    font-size:30px;
    padding:50px;
    margin-bottom:3.5%;
    .Createmenu{
        padding-left:5%;
        font-size:40px;
        font-family:Arial, sans-serif;
    }
    .form{
        font-size:25px;
        font-weight:0;
        font-weight:lighter;
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
    };
    input[type=submit]{
        font-size:23px;
        outline:none;
        background-color:rgba(87, 204, 153, 1);
        color:whitesmoke;
        border: solid 1px rgba(87, 204, 153, 1);
        border-radius:22px;
        padding:0.2%;
        margin: 1.5% 0% 0% 0% ;
    };
    input[type=submit]:hover{
        background-color:rgba(87, 304, 180, 1);
    };
    select[type=text]{
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    font-size:18px;
    };


`