import { useDispatch } from "react-redux";
import { loginThunk } from "reduxStore/auth/operation";
import { Section, Container } from "components";

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;

    dispatch(
      loginThunk({
        email: email.value,
        password: password.value,
      })
    );
  };
  return (
    <Section>
      <Container>
        <form onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="email" />
          <input type="password" name="password" placeholder="password" />
          <button type="submit">Login</button>
        </form>
      </Container>
    </Section>
  );
};
export default LoginPage;
