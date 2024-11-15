import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function EighthForm() {
  const tgToken = import.meta.env.VITE_TG_TOKEN;
  const tgChatId = import.meta.env.VITE_TG_CHATID;

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
  });

  const [error, setError] = useState(''); // Для хранения ошибки

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'phone') {
      // Ограничиваем только цифры и максимальную длину до 9 символов
      const numericValue = value.replace(/\D/g, '').slice(0, 9);
      setFormData({ ...formData, [name]: numericValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Проверяем, что номер телефона состоит ровно из 9 цифр
    if (formData.phone.length !== 9) {
      setError('Номер телефона должен содержать ровно 9 цифр');
      return; // Прерываем отправку формы, если номер неверный
    }

    setError(''); // Очищаем ошибку, если номер правильный

    const fullMessage = `Имя: ${formData.firstName}\nФамилия: ${formData.lastName}\nТелефон: ${formData.phone}`;

    try {
      await fetch(`https://api.telegram.org/bot${tgToken}/sendMessage?chat_id=${tgChatId}&text=${encodeURIComponent(fullMessage)}`);
      toast.success("Ваша заявка успешно отправлена. Мы скоро свяжемся с вами.");
      setFormData({ firstName: '', lastName: '', phone: '' });
    } catch (error) {
      toast.error("Ошибка при отправке. Попробуйте позже.");
      console.error("Ошибка при отправке сообщения:", error);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-[#1B2838] to-[#2A3F54] p-6">
      <div className="max-w-4xl w-full bg-gray-800 bg-opacity-80 shadow-lg rounded-xl p-8 md:p-12 transform transition duration-700 hover:scale-105 border border-gray-700">
        
        <h2 className="text-4xl font-semibold text-center text-white mb-10 tracking-wider">
          Связаться с нами
        </h2>

        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8">
          <div className="left flex flex-col space-y-6">
            
            {/* Имя */}
            <div className="relative">
              <input
                type="text"
                name="firstName"
                placeholder="Имя"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:border-blue-400 text-white placeholder-gray-400 transition duration-300"
              />
            </div>

            {/* Фамилия */}
            <div className="relative">
              <input
                type="text"
                name="lastName"
                placeholder="Фамилия"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:border-blue-400 text-white placeholder-gray-400 transition duration-300"
              />
            </div>

            {/* Номер телефона */}
            <div className="relative">
              <input
                type="tel"
                name="phone"
                placeholder="940511494"
                maxLength="9"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-transparent border border-gray-600 rounded-lg focus:outline-none focus:border-blue-400 text-white placeholder-gray-400 transition duration-300"
              />
              {error && <span className="text-red-500 text-sm">{error}</span>} {/* Отображаем ошибку */}
            </div>

            {/* Кнопка отправки */}
            <button
              type="submit"
              className="bg-indigo-500 text-[12px] p480:text-[16px] bg-opacity-20 text-indigo-300 font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-opacity-40 transition duration-300 transform hover:scale-105"
            >
              Отправить
            </button>
          </div>

          {/* Правая часть - Карта */}
          <div className="right bg-gray-700 bg-opacity-60 rounded-lg shadow-lg flex items-center justify-center">

            <iframe 
             className="rounded-lg" 
             width="100%" 
             height="100%" 
            src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d5765.727072376834!2d69.279825!3d41.242401!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDE0JzMyLjYiTiA2OcKwMTYnNDcuNCJF!5e1!3m2!1sru!2s!4v1731646140513!5m2!1sru!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </form>

      </div>
      <ToastContainer />
    </div>
  );
}
