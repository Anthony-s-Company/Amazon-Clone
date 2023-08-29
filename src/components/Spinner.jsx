/* eslint-disable react/prop-types */
import { Triangle } from  'react-loader-spinner';

export default function Spinner({loading}) {
  
  return (
    <div className='d-flex justify-content-center pt-5'>
      <Triangle
        height="100"
        width="100"
        color="#000000"
        ariaLabel="triangle-loading"
        wrapperClassName="spinner_container"
        visible={loading}
      />
  </div>
  );
}