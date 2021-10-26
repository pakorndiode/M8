import React from 'react';
import styled from 'styled-components';
import {} from 'react-bootstrap'
import logo from '../Logo AGO.png'

function Header({className}) {
    return (
        <div className={ `row m-0 col-12 ${className}`}>
           <div className='logo col-lg-2 col-sm-10 col-md-10 m-0'> 
                <img src={logo} width="60" />
                <label>Avo</label>
           </div>
           <div className='HC col-lg-4 col-sm-12 col-md-12 p-0 row '>
               <div className='col-12 py-2' />
                <div className='col-lg-3 col-sm-12 home m-0 p-0'>
                    <label className='homeVer'>Home</label>
                </div> 
                <div className='col-lg-6 col-sm-12 create m-0 p-0'>
                    <label className='createVer'>Create menu</label>
                </div>
            </div>
            <div className='div col m-0 p-4 d-flex justify-content-end'>
                <div class="dropdown text-end p-4">
                    <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAUBJREFUSEvVlG1RQzEQRU8VAA4qgSoAHBQFgIOiAFAADhgc1AFFAUioA1oF7Vxmlwl5SfZNIT/Ir3aSt+fu3Y8Jnc+kc3zGAs6BO+DUBH0AD8AqEjgGcG/BS7EE0X31RAApfwW2wAJYAhvgGngCjoCLViYRQBacAZcWPFUqyDPwBkhI8UQAqZXK0rtj4NMyOukJkH2CHZRBd4u8yF5Y+e2/H035r4qstLu2qfuqTARKB03//2TQomFt3rfaVJ1xBcxNed4pqoVWhobvxWozgNUAskRDNB0pfw3clCwrAbxzFFtdI6+lVIrTo4xUE91r2nUGHZUD9NG7KQ8XWULzTlMms1RMDtBCU38390vFNh/KW1uEX89ygD9qDk8F4Nb+EJcDfLlpeeWeR/UuLr8csLMo0ZatwQbfHxooyub7/v8D9gzNRRmX6M9FAAAAAElFTkSuQmCC" 
                         width="40px" height="40px" />
                    </a>
                    <ul class="dropdown-menu text-small" aria-labelledby="dropdownUser1">
                        <li><a className="dropdown-item" href="#">Profile</a></li>
                        <li><a className="dropdown-item" href="#">Log out</a></li>
                    </ul>
                </div>
            </div> 
        </div>
    )
}

export default styled(Header)`
    background-color:rgba(87, 204, 153, 1);
    padding:10px 0px 10px 0px;
    font-family: "Able";
    .logo{
        font-size:68px;
        margin-left:30px;
        cursor: pointer;
        display:flex;
        color:white;
    };
    .home{
        font-size:35px;
        display:flex;
        justify-content:center;
    };
    .homeVer:hover{
        font-size:35px;
        color: white;
        cursor: pointer;
    };
    .create{
        font-size:35px;
        display:flex;
        justify-content:center;
    };
    .createVer:hover{
        font-size:35px;
        color:white;
        cursor: pointer;
    };
    .dropdown-item{
        font-size:20px;
    }
`