/* eslint-disable react/prop-types */
import { Triangle } from  'react-loader-spinner';
import "./Spinner.css";

export default function Spinner({loading}) {
  
  return (
    <div className="overlay">
      <div className='d-flex justify-content-center'>
        <Triangle
          height="120"
          width="120"
          color="#2E2EFF"
          ariaLabel="triangle-loading"
          wrapperClassName="spinner_container"
          visible={loading}
        />
      </div>
    </div>
  );
}


