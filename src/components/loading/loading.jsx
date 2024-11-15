import './loading.css';
import logo from '/src/assets/images/logo-print.png'
export default function Loading() {
  
  return (
    <div className='loading-container'>
      <div className='loading'>
        <div className='logo flex justify-center items-center'>
          <img className='rounded-md ' src={logo} alt="" />
        </div>
        <div className='line'></div>
      </div>
    </div>
  );
}
