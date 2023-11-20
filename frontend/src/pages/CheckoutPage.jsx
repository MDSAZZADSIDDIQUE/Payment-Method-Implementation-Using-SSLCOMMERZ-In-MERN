import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      <Button
        variant="contained"
        size="large"
        onClick={() => navigate('/paymentinformation')}
      >
        Checkout
      </Button>
    </div>
  );
};

export default CheckoutPage;
