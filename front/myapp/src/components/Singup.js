import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import { signUp } from '../api/Users';

export function Singup() {

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data)
    //JSON.stringify(data);
    signUp(data);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nom</Form.Label>
        <Form.Control {...register("name")} type="text" placeholder="Entrer Nom" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control {...register("email")} type="email" placeholder="Entrer Email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Mot de passe</Form.Label>
        <Form.Control {...register("email")} type="password" placeholder="Entrer Mot de passe" />
        <Form.Text className="text-muted">
          We'll never share your password with anyone else.
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}


{/* <form onSubmit={handleSubmit(onSubmit)}>
<input {...register("first_name")} placeholder="First name" />
<input {...register("last_name")} placeholder="Last name" />
<input {...register("email")} type="email" placeholder="@" />
<input {...register("password")} type="password" placeholder="mdp" />
<input className="userButton" type="submit" />
</form> */}


