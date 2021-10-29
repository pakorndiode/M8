import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {DropdownButton,Dropdown} from 'react-bootstrap'
import styled from 'styled-components'

function Filter({className}) {

    const [nationality,setNationality] = useState([])
    const [nationality2, setNationality2] = useState([])

    useEffect(()=>{
        axios.get(`http://localhost:5000/filterNationality`).then((res)=>{
            setNationality(res.data)
        })

    },[])

    nationality.forEach((data) => {
        if (!nationality2.includes(data.nationality)) {
            console.log('nationality2', data.nationality2);
            nationality2.push(data.nationality)
        }
        console.log('ss;', nationality2);
    });

    function sendWord(word){
        axios.get(`http://localhost:5000/filter/Nationality/${word}`)
    }

    return (
        <div className={className}>
            <div className="menuANDfilter box">
                <label className='menu col-6'> Menu </label>
                <div className="col-4 d-flex justify-content-end ">
                    <div className="dropdown text-end p-4">
                        <a href="#" className="d-block link-dark text-decoration-none" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className='bx bx-filter-alt'>nationality</i>
                        </a>
                        <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1" >
                            {nationality2.map((data,index)=>{
                                return(
                                    <li><a className="dropdown-item" href="/" key={index} onClick={()=>{sendWord(data)}}>{data}</a></li>
                                )})
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default styled(Filter)`
    margin:3% 8% 0px 8%;
    .box{
        display:flex;
        align-items:center;
        justify-content:space-between;
    }
    .filter{
        font-size:50px;
        background:none;
        outline:none;
        margin-right:4%;
    }
    .menu{
        font-size:40px;
        font-family:Arial, sans-serif;
        margin:1% 0% 1% 5%;
    };
    .bx{
        font-size:18px;
    }
`
