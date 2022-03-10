import AuthTemplate from '../compnents/auth/AuthTemplate';
import RegisterForm from '../containers/auth/RegisterForm';

const RegisterPage = () => {
  return (
    <AuthTemplate>
      <RegisterForm />
    </AuthTemplate>
  );
};

export default RegisterPage;
