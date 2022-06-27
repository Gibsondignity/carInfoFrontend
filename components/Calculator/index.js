import React, { useState } from 'react';
import {Card, Form, Container, InputGroup, FormControl, Button } from 'react-bootstrap'
import style from './style.module.css'

const Calculator = () => {

    const [netSalary, setSalary] = useState(0);    
    const [rentAmount, setAmount] = useState(0);    
    const [year, setYear] = useState(0);    
  return (
    <div>
        <Container className={style.main}>
            
            <Card className={style.card}>
            <div className={style.cardbody}>
                <div>
                    <Card.Body>
                        
                        <Form.Label htmlFor="basic-url">Net Monthly Salary</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>GH¢</InputGroup.Text>
                            <FormControl aria-label="Amount (to the nearest dollar)" />
                            <InputGroup.Text>.00</InputGroup.Text>
                        </InputGroup>
                        
                        
                        <Form.Label htmlFor="basic-url">Monthly Rent Amount Charged</Form.Label>
                        <Form.Label htmlFor="basic-url"></Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>GH¢</InputGroup.Text>
                            <FormControl aria-label="Amount (to the nearest dollar)" />
                            <InputGroup.Text>.00</InputGroup.Text>
                        </InputGroup>
                        

                        
                        <Form.Group className="mb-3">
                            <Form.Label>Choose Number of Years</Form.Label>
                            <Form.Select >
                            <option>1 Year</option>
                            <option>2 Years</option>
                            <option>3 Years</option>
                            <option>4 Years</option>
                            </Form.Select>
                        </Form.Group>
                        
                        <Button className={style.button} type="submit">CHECK ACCEPTABILITY</Button>
                    </Card.Body>

                </div>

                <div className={style.results}>

                    <p>Results Here: {}</p>
                    <hr/>
                    <p>Reant Period: {}</p>
                    <hr/>
                    <p>Expected Monthly Rent Payment: {}</p>
                    <hr/>
                    <p>Amount Due Before Moving: {}</p>
                </div>
            </div>
            </Card>

        </Container>
    </div>
  )
}


export default Calculator