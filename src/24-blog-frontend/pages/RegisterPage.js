import AuthForm from '../compnents/auth/AuthForm';
import AuthTemplate from '../compnents/auth/AuthTemplate';

const RegisterPage = () => {
  return (
    <AuthTemplate>
      <AuthForm type="register" />
    </AuthTemplate>
  );
};

export default RegisterPage;
