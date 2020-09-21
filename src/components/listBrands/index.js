import React, {useState, useEffect} from 'react';
import api from '../../api';

import { ListGroup, ListGroupItem } from 'reactstrap';

const Lista = (props) => {
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        api.get('/brands')
        .then((response) => setBrands(response.data.brands))
        .catch((error) => console.log(error));
    }, []);

    return (
        <div style={{width:"30%", margin:"auto"}}>
            <h3  style={{fontFamily:"fantasy", marginLeft:"1.5em"}}>Lista de Marcas </h3>
                <ListGroup style={{border:"3px solid black"}}>
                    <ListGroupItem active tag="a" href="#" action style={{ backgroundColor:"white"}}>
                        <ul style={{backgroundColor:"black",borderRadius:"10px", padding:"15px 20px",margin:"0.5em",fontFamily:"fantasy"}}>
                            {brands.map((brand) => (
                                <li style={{boxShadow:"1px 1px 2px white"}} key={brand.uid}>{brand.name}</li>
                            ))}
                        </ul></ListGroupItem>
                </ListGroup>
        </div>
    );
};

export default Lista;