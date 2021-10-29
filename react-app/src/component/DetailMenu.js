import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {Card,Button} from 'react-bootstrap'
import styled from 'styled-components'

function DetailMenu({className}) {

    const [detailFood,setDetailFood] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:5000/Home").then((res)=>{
            console.log("DATA MENU",res.data);
            setDetailFood(res.data)
        })
    },[])

    return (
        <div className={className}>
           <label className='menu'> Menu </label>
                <div className="row d-flex justify-content-start">
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
                                        <Button variant="primary" className='Btn'>+</Button>
                                </Card>
                            )})
                    }
                </div>
           </div>
    )
}

export default styled(DetailMenu)`
    padding:3% 8% 0px 8%;
    margin-bottom:5%;
    margin-left:5%;
    .menu{
        padding-left:5%;
        font-size:40px;
        font-family:Arial, sans-serif;
        margin:1% 0% 1% 0%;
    };
    .detail{
        color: rgba(92, 89, 89, 1);
        font-size:14px;
        font-weight:lighter;
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

    @media only screen and (max-width: 841px) {
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
        .img{
            height:100px;
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
