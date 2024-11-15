import React from 'react';
import './error.css';

export default function ErrorPage() {
  return (
    <div className="error-page min-h-screen flex items-center justify-center">
      <div className="error-container p-12 bg-transparet shadow-2xl rounded-lg transform transition-all duration-500 animate-slide-in">
        <h1 className="error-code text-8xl text-zinc-300 font-extrabold mb-4 animate-glow">404</h1>
        <p className="error-message text-xl mb-6 text-zinc-300 animate-fade-in">Упс! Что-то пошло не так.</p>
        <p className="error-description text-lg text-zinc-300 mb-8 animate-fade-in delay-1">
        Возможно, страница, которую вы ищете, была удалена, у нее изменилось название или она временно недоступна.
        </p>
        <button
          onClick={() => window.history.back()}
          className="border-2 rounded-md border-indigo-500 px-4 py-1 text-white transform transition-all duration-300 ease-in-out hover:bg-gradient-to-r from-[#1B2838] to-[#2A3F54] hover:text-white hover:scale-105 hover:shadow-lg"
        >
          Назад
        </button>
      </div>
    </div>
  );
}
