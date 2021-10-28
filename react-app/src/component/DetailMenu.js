import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {} from 'react-bootstrap'
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
           {detailFood.map((data,index)=>{
               return (
                    <div className="card col-12 p-5 my-5" value={data.id} key={index}>
                        <div className="box d-flex col-12 m-0 p-0">
                                <div className='p-0'>
                                    <label className='detailName'>{data.name} </label>
                                    <label className='bath'>{data.price} บาท</label>
                                </div>
                        </div>
                        <div className="box col-12">
                                <label className='detail col-lg-12 col-sm-12 p-0'>
                                    {data.description}
                                </label>
                        </div>
                        <div className="box row col-12">
                        </div>
                        <div className="three d-flex justify-content-end">
                                <label className='types t1'>{data.nametype}</label>
                                <label className='types t2'>{data.nationality}</label>
                                <label className='types t3'>{data.calorie} Cal.</label>
                        </div>
                    </div>
                )}
            )}
           
        </div>
    )
}

export default styled(DetailMenu)`
    padding:3% 8% 0px 8%;
    margin-bottom:5%;
    .menu{
        padding-left:5%;
        font-size:40px;
        font-family:Arial, sans-serif;
        margin:1% 0% 1% 0%;
    };
    .box{

    };
    .titleName{
        font-size:25px;
        font-weight:lighter;
        cursor: pointer;
    };
    .detailName{
        font-size:25px;
        font-weight:lighter;
        cursor: pointer;
    };
    .titleDetail{
        font-size:20px;
        font-weight:lighter;
        cursor: pointer;
    }
    .detail{
        color: rgba(92, 89, 89, 1);
        font-size:20px;
        font-weight:lighter;
        cursor: pointer;
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
    .card:hover{
        background-color:rgba(249, 249, 249, 1);
        cursor: pointer;
    }
    .bath{
        padding-left:20px;
        font-size:20px;
    }

`
