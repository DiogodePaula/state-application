import React,{ useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input,ListGroup, ListGroupItemListGroup, ListGroupItem } from 'reactstrap';
import api from '../../api';

const Example = (props) => {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [products, setProducts] = useState([]);
    // const [prod, setProd] = useState('');

    async function handleProduct(){
       await api.post('/products',{name, quantity})
        .then((response) => setProducts([...products, response.data.product]))
        .catch((error) => (console.log(error)));
        setName('');
        setQuantity('');
    }

    useEffect(() => {
        api.get('/products')
        .then((response) => setProducts(response.data.product))
        .catch((error) => console.log(error));
    }, []);

    return (
        <>
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
        <br />
        <Form inline style={{width:"30%", margin:"auto"}}>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Input value={name} type="text" placeholder="Nome" onChange={e => setName(e.target.value)} />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Input value={quantity} type="number" placeholder="Quantidade" onChange={e => setQuantity(e.target.value)} />
        </FormGroup>
        <Button style={{backgroundColor:"orange", fontFamily:"fantasy",color:"black",marginTop:"1em"}}
            onClick={handleProduct}>Cadastrar Product</Button>
        </Form>
        </>
    );
}

export default Example;