import { toast } from 'react-toastify';

const BASE_URL = 'https://nodejs-signup-signin-apis.up.railway.app/api/v1';

const toastError = (err) => {
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
  const toastSuccess = (msg) => {
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


export {
    BASE_URL,
    toastError,
    toastSuccess
}