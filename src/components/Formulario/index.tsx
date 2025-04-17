import React from 'react';
import "./styles.css";

interface FormularioProps {
  values: { nome: string; area: string; localizacao: string };
  onChange: React.Dispatch<React.SetStateAction<{ nome: string; area: string; localizacao: string }>>;
  onSubmit: () => void;
}

const Formulario: React.FC<FormularioProps> = ({ values, onChange, onSubmit }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    onChange((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className='form-container'>
      <form className='form'>
        <div className="form-group">
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={values.nome}
            onChange={handleInputChange}
            placeholder='Digite seu nome...'
            className='input-desktop'
          />
        </div>

        <div className="form-group">
          <label htmlFor="area">Área de Interesse</label>
          <select
            id="area"
            name="area"
            value={values.area}
            onChange={handleInputChange}
            className='input-desktop'
          >
            <option value="">Selecione uma área</option>
            <option value="Direito">Direito</option>
            <option value="Tecnologia">Tecnologia</option>
            <option value="Medicina">Medicina</option>
            <option value="Educação">Educação</option>
            <option value="Engenharia">Engenharia</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="localizacao">Localização</label>
          <select
            id="localizacao"
            name="localizacao"
            value={values.localizacao}
            onChange={handleInputChange}
            className='input-desktop'
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
      </form>

      <button className="form-btn" type="button" onClick={onSubmit}>
        Buscar Conexões
      </button>
    </section>
  );
};

export default Formulario;
