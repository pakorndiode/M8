import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {Card,Button} from 'react-bootstrap'
import styled from 'styled-components'

function DetailMenu({className}) {

    const [detailFood,setDetailFood] = useState([])
    const [nationality,setNationality] = useState([])
    const [nationality2,setNationality2] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:5000/Home").then((res)=>{
            setDetailFood(res.data)
        })
        axios.get(`http://localhost:5000/filterNationality`).then((res) => {
            setNationality(res.data)
        })
    },[])

    function sendWord(word) {
        axios.get(`http://localhost:5000/filter/Nationality/${word}`).then((res)=>{
            setDetailFood(res.data)
        })
    }

    function Home(word) {
        axios.get("http://localhost:5000/Home").then((res) => {
            setDetailFood(res.data)
        })
    }

    nationality.forEach((data) => {
        if (!nationality2.includes(data.nationality)) {
            console.log('nationality2', data.nationality2);
            nationality2.push(data.nationality)
        }
        console.log('ss;', nationality2);
    });

    return (
        <div className={className}>
            <div className="menuANDfilter box">
                <label className='menu col-6'> Menu </label>
                <div className="col-4 d-flex justify-content-end filter">
                    <div className="dropdown text-end">
                        <a href="#" className="d-block link-dark text-decoration-none" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className='bx bx-filter-alt'>nationality</i>
                        </a>
                        <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1" >
                            <li><a className="dropdown-item" onClick={Home}><label>ทั้งหมด</label></a></li>
                            {nationality2.map((data,index)=>{
                                return(
                                    <li><a className="dropdown-item" key={index} onClick={()=>{sendWord(data)}}><label>{data}</label></a></li>
                                )})
                            }
                        </ul>
                    </div>
                </div>
            </div>
                <div className="row col-12 d-flex justify-content-start">
                    {detailFood.map((data,index)=>{
                        return (
                                <Card style={{ width:'30%', height:'50%'}} key={index} className='m-2 col-sm-12'>
                                        <Card.Img variant="top" src={data.image} className='img d-block' />
                                    <Card.Body className='m-0 p-0'>
                                        <Card.Title className=' CardTitle'>
                                            <h3 className='p-0 m-0'>{data.name}</h3>
                                            <label className='bath'>{data.price} บาท </label>
                                        </Card.Title>
                                        <Card.Text className='detail'>
                                           <label> {data.description} </label>                                           
                                       </Card.Text>
                                    </Card.Body>
                                    <div className="d-flex justify-content-end">
                                        <Button variant="primary" className='Btn col-4'>detail</Button>
                                    </div>
                                </Card>
                            )})
                    }
                </div>
           </div>
    )
}

export default styled(DetailMenu)`
    margin:3% 5% 5% 12%;
    li{
        cursor: pointer;
    }
    .box{
        display:flex;
        align-items:center;
        justify-content:start;
    }
    .filter{
        font-size:50px;
        background:none;
        outline:none;
        margin-left:6%;
    }
    .menu{
        font-size:40px;
        font-family:Arial, sans-serif;
        margin:1% 0% 1% 0%;
    };
    .bx{
        font-size:18px;
    }
    .detail{
        color: rgba(92, 89, 89, 1);
        font-size:14px;
        font-weight:lighter;
        height:120px;
        overflow: hidden;
    }
    .types{
        font-size:15px;
        margin:2% 0% 1% 1%;
        padding:0.2% 1% 0.2% 1%;
        border: solid 1px black;
        border-radius:22px;
        cursor: pointer;
        background-color:rgba(249, 249, 249, 1);
    }
    .t1:hover{
        color:white;
        background-color:rgba(128, 186, 255, 1);
    }
    .t2:hover{
        color:white;
        background-color:rgba(163, 184, 33, 1);
    }
    .t3:hover{
        color:white;
        background-color:black;
    }
    .card{
        width:'30%';
        height:'50%';
    }
    .card:hover{
        background-color:rgba(236, 236, 236, 1);
    }
    .bath{
        font-size:20px;
        font-weight:lighter;
    }
    .img{
        display:block;
        height:500px;
        padding-top:2%;
        border-radius:25px
    }
    .btn{
        margin-top:5%;
        margin-bottom:2%;
    }
    .CardTitle {
        display: flex;
        justify-content:space-between;
    }

    @media only screen and (max-width: 768px) {
        .detail{
            display:none;
        }
        .CardTitle{
            display: block;
        }
        .btn{
            padding:0;
        }
        .CardTitle{
            margin:0px;
        }
    }

    @media only screen and (max-width: 1024px) {
        .detail{
            display:none;
        }
        h3{
            font-size:15px;
        }
        .bath{
            font-size:15px;
        }
        .btn{
            padding:0;
        }
        .CardTitle{
            margin:0px;
        }
        .img{
            height:300px;
        }
    }
    @media only screen and (max-width: 1440px) {
        h3{
            font-size:18px;
        }
        .bath{
            font-size:18px;
        }
        .detail{
            font-size:11px;
        }
    }

`
