import AuthForm from '../compnents/auth/AuthForm';
import AuthTemplate from '../compnents/auth/AuthTemplate';

const LoginPage = () => {
  return (
    <AuthTemplate>
      <AuthForm type="login" />
    </AuthTemplate>
  );
};

export default LoginPage;
