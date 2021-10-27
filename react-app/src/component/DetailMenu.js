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
                        <div className="box row col-12">
                                <label className='titleName col-lg-1 col-sm-2 p-0'>
                                    Food: 
                                </label>
                                <label className='detailName col-lg-11 col-sm-10 p-0'>
                                    {data.name}
                                </label>
                        </div>
                        <div className="box row col-12">
                                <label className='titleDetail col-lg-1 col-sm-12 p-0'>
                                    Description:
                                </label>
                                <label className='detail col-lg-11 col-sm-12 p-0'>
                                    {data.description}
                                </label>
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

`
