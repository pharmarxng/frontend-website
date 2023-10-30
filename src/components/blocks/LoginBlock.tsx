import Input from '../Input';
import Label from '../Label';

const LoginBlock = () => {
  return (
    <div className="bg-white">
      <div>Log In</div>
      <div>Welcome back!</div>
      <div>
        Enter the email and password you used to create an account to sign in.
      </div>
      <form>
        <Label label="Email*" />
        <Input
          placeholder="Severe Headache"
          name="symptom"
          type="text"
          value={'symptom'}
          changed={() => {}}
          classDef="mt-2"
        />
      </form>
    </div>
  );
};

export default LoginBlock;
