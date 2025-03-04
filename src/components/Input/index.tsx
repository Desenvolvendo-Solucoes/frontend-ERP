import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

// Definição das props do componente Input
interface InputProps {
  id: string; // Identificador único do input (obrigatório)
  label: string; // Rótulo do input
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'date' | 'url'; // Tipo do input (opcional, padrão é 'text')
  placeholder?: string; // Placeholder do input (opcional)
  value?: string; // Valor do input (opcional)
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // Função chamada quando o valor do input muda (opcional)
  error?: string; // Mensagem de erro (opcional)
  icon?: React.ReactNode; // Ícone opcional para ser exibido à esquerda do input (opcional)
  disabled?: boolean; // Define se o input está desabilitado (opcional, padrão é false)
  required?: boolean; // Define se o input é obrigatório (opcional, padrão é false)
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = 'text',
  placeholder = '',
  value = '',
  onChange,
  error = '',
  icon,
  disabled = false,
  required = false,
}) => {
  // Estado para controlar a visibilidade da senha (usado apenas quando o tipo é 'password')
  const [showPassword, setShowPassword] = useState(false);

  // Função para alternar a visibilidade da senha
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="mb-4">
      {/* Label do input */}
      <label htmlFor={id} className="block text-lg font-nunito text-black mb-2">
        {label}
        
      </label>

      {/* Container do input */}
      <div className="relative">
        {/* Ícone à esquerda do input (se fornecido) */}
        {icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            {icon}
          </div>
        )}

        {/* Input principal */}
        <input
          id={id} // ID do input (deve corresponder ao htmlFor do label)
          type={type === 'password' && showPassword ? 'text' : type} // Alterna entre 'text' e 'password' para mostrar/ocultar a senha
          className={`mt-2 w-full p-4 ${
            icon ? 'pl-10' : 'pl-4' // Adiciona padding à esquerda se houver um ícone
          } pr-12 border-2 border-gray-300 rounded-2xl focus:outline-none focus:border-black transition-colors ${
            disabled ? 'bg-gray-100 cursor-not-allowed' : '' // Estilo para inputs desabilitados
          }`}
          placeholder={placeholder} // Placeholder do input
          value={value} // Valor do input
          onChange={onChange} // Função chamada quando o valor do input muda
          disabled={disabled} // Define se o input está desabilitado
          required={required} // Define se o input é obrigatório
        />

        {/* Botão para mostrar/ocultar a senha (apenas para inputs do tipo 'password') */}
        {type === 'password' && (
          <button
            type="button"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <AiOutlineEyeInvisible size={24} /> : <AiOutlineEye size={24} />}{' '}
            {/* Alterna entre ícones de olho aberto e fechado */}
          </button>
        )}
      </div>

      {/* Exibe a mensagem de erro (se houver) */}
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default Input;