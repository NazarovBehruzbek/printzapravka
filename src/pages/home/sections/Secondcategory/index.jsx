import { useEffect } from 'react';
import Card from './components/card'; // Убедитесь, что путь к компоненту Card правильный
import datafiles from './data/secondcategory'; // Импортируем данные с файлами


export default function Secondcategory() {

  return (
    <div className="secondcategory p480:px-4 py-4 p480:py-16 bg-white">
      <div   data-aos-duration="2000"
             data-aos-offset="0"
            data-aos="fade-right"   className="card-container w-full  p480:p-4 flex  flex-wrap justify-center gap-4">
        {datafiles.map((item, index) => (
          <a href="/mastercall">
          <Card data-aos="fade-right"  
            key={index} 
            title={item.title} 
            text={item.text} 
            img={item.img} 
          />
          </a>
        ))}
      </div>
    </div>
  );
}
