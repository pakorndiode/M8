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
                        <box-icon className='facebook-circle' type='logo' color='#0a7ad0' />
                        facebook
                    </div>
                    <div className="twitter d-flex">
                        <box-icon className='twitter' type='logo' color='#008fff' />
                        twitter
                    </div>
                    <div className="youtube d-flex">
                        <box-icon className='youtube' type='logo'color='#ff0000' />
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
    position: relative;
    bottom: 0;
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
    box-icon{
        padding-right:5px;
    }
    
`