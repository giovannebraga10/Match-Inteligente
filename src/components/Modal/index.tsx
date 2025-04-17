import React from 'react';
import './styles.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  values: { nome: string; area: string; localizacao: string };
  onChange: React.Dispatch<React.SetStateAction<{ nome: string; area: string; localizacao: string }>>;
  onSubmit: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, values, onChange, onSubmit }) => {
  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    onChange(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <h2>Buscar conexões</h2>
        <form onSubmit={(e) => { e.preventDefault(); onSubmit(); onClose(); }}>
          <div className="form-group-mobile">
            <label htmlFor="nome" className='label-mobile'>Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder='Digite seu nome...'
              className='input-mobile'
              value={values.nome}
              onChange={handleChange}
            />
          </div>

          <div className="form-group-mobile">
            <label htmlFor="area" className='label-mobile'>Área de Interesse</label>
            <select
              id="area"
              name="area"
              className="input-mobile"
              value={values.area}
              onChange={handleChange}
            >
              <option value="">Selecione uma área</option>
              <option value="Direito">Direito</option>
              <option value="Tecnologia">Tecnologia</option>
              <option value="Medicina">Medicina</option>
              <option value="Educação">Educação</option>
              <option value="Engenharia">Engenharia</option>
            </select>
          </div>

          <div className="form-group-mobile">
            <label htmlFor="localizacao" className='label-mobile'>Localização</label>
            <select
              id="localizacao"
              name="localizacao"
              className="input-mobile"
              value={values.localizacao}
              onChange={handleChange}
            >
              <option value="">Selecione um estado</option>
              <option value="SP">SP</option>
              <option value="MG">MG</option>
              <option value="RJ">RJ</option>
              <option value="SC">SC</option>
              <option value="RS">RS</option>
              <option value="BA">BA</option>
            </select>
          </div>

          <button className="form-btn-mobile" type="submit">
            Buscar Conexões
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
