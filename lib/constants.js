import { toast } from 'react-toastify';

export const BASE_URL = 'https://nodejs-signup-signin-apis.up.railway.app/api/v1';
// export const BASE_URL = 'http://localhost:3001/api/v1';

export const toastError = (err) => {
    toast.error(err, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
}
export const toastSuccess = (msg) => {
  toast.success(msg, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}

export const capitalize = (input) => {  
  return input.toLowerCase().split(' ').map(s => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');  
} 
