import React from 'react';

import Body from './components/body/body';
import List from './components/listBrands';
// import List2 from './components/listProduct';
import Form from './components/addProduct';


export default () => {
    return(
        <div style={{backgroundColor:"black", color:"white"}}>
            <Body />
            <br />
            <List />
            {/* <List2 /> */}
            <br />
            <Form />
            <br /><br /><br />
        </div>
    )
}