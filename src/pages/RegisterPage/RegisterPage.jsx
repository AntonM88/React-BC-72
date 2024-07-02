import { useDispatch } from "react-redux";
import { Container, Section } from "components";
import { registerThunk } from "reduxStore/auth/operation";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = e.target.elements;

    dispatch(
      registerThunk({
        name: name.value,
        email: email.value,
        password: password.value,
      })
    );
  };
  return (
    <Section>
      <Container>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="name" />
          <input type="email" name="email" placeholder="email" />
          <input type="password" name="password" placeholder="password" />
          <button type="submit">Register</button>
        </form>
      </Container>
    </Section>
  );
};
export default RegisterPage;
