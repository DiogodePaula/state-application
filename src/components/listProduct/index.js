import React, {useState, useEffect} from 'react';
import api from '../../api';

import { ListGroup, ListGroupItem } from 'reactstrap';

const Lista = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        api.get('/products')
        .then((response) => setProducts(response.data.product))
        .catch((error) => console.log(error));
    }, []);

    return (
        <div style={{width:"30%", margin:"auto"}}>
            <h3  style={{fontFamily:"fantasy", marginLeft:"1.5em", marginTop:"1em"}}>Lista de Produtos</h3>
                <ListGroup style={{border:"3px solid black"}}>
                    <ListGroupItem active tag="a" href="#" action style={{ backgroundColor:"white"}}>
                        <ul style={{backgroundColor:"black",borderRadius:"10px", padding:"15px 20px",margin:"0.5em",fontFamily:"fantasy"}}>
                            {products.map((product) => (
                                <li style={{boxShadow:"1px 1px 2px white"}} key={product.uid}>{product.name} = quantidade - {product.quantity}</li>
                            ))}
                        </ul>
                    </ListGroupItem>
                </ListGroup>
        </div>
    );
};

export default Lista;

    

    

    {/* return (
        <div style={{}}>
            <h2></h2>
            <div>
                <ul>
                    {brands.map((brand) => (
                        <li key={brand.uid}>{brand.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}; */}