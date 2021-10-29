import React from 'react'
import styled from 'styled-components'
import logo from '../Logo AGO.png'

function Footer({className}) {
    return (
        <div className={`row mx-0 ${className}`}>
            <div className="col-2">
            </div>
            <div className='logo col-lg-8 col-sm-12 col-md-12 d-flex justify-content-center'> 
                <img src={logo} />
                <label className='avo'>Avo</label>
                <label>since 2021</label>
           </div>
           <div className="group col-lg-2 col-sm-12 d-flex justify-content-center">
               <div className="fwy">
                    <div className="facebook d-flex">
                        <i class='bx bxl-facebook-circle' color='#0a7ad0' type='logo' />
                        facebook
                    </div>
                    <div className="twitter d-flex">
                        <i class='bx bxl-twitter twitter' type='logo' color='#008fff'></i>
                        twitter
                    </div>
                    <div className="youtube d-flex">
                        <i class='bx bxl-youtube' ></i>
                        YouTube
                    </div>
                </div>
           </div>
        </div>
    )
}

export default styled(Footer)`
    background-color:rgba(87, 204, 153, 1);
    display:flex;
    justify-content:center;
    padding:20px 0px 10px 0px;
    width: 100%;
    font-size:10px;
    .avo{
        font-size:28px;
        color:white;
    };
    .group{
        font-size:16px;
        cursor: pointer;
        
    };
    .facebook{
        padding-bottom:2px;
        color: white;
    };
    .twitter{
        padding-bottom:2px;
        color:white;
    };
    .youtube{
        color:white;
    };
    .bxl-facebook-circle{
        font-size:15px;
        padding-right:5px;
        color: #0a7ad0;
    }
    .bxl-twitter{
        font-size:15px;
        padding-right:5px;
        color: #0a7ad0;
    }
    .bxl-youtube{
        font-size:15px;
        padding-right:5px;
        color: #ff0000;
    }
`