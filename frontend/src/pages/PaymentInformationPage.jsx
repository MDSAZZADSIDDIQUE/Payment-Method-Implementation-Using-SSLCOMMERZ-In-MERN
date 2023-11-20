import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const PaymentInformationPage = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    fetch('http://localhost:3000/init', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((result) => window.location.replace(result.url));
  };

  return (
    <div className="space-y-5">
      <Button variant="contained" size="large" onClick={() => navigate('/')}>
        Back
      </Button>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          {...register('email')}
        />
        <Button variant="contained" size="large" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default PaymentInformationPage;
