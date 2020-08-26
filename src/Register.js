import React from 'react';
import { Segment, Header, Form, Button, Container, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

function Register() {
   return (
     <Grid centered style={{height: '100vh'}} verticalAlign='middle'>
       <Grid.Column width='3'>
       <Segment compact>
             <Header textAlign='center'>Selamat Datang</Header>
             <Form>
               <Form.Field style={{width: 220}}>
                 <label>Email</label>
                 <input placeholder='masukkan email'></input>
               </Form.Field>
               <Form.Field style={{width: 220}}>
                 <label>Password</label>
                 <input placeholder='masukkan password' type='password'></input>
               </Form.Field>
             </Form>
         <Container style={{height: 16, width: 0}}></Container>
         <Button style={{width: 220}} color='green' as={Link} to='/home'>Daftar</Button>
       </Segment>
       </Grid.Column>
     </Grid>
   );
 }

 export default Register;