import { useState } from 'react';
import "./styles.css";
import Formulario from '../../components/Formulario';
import { mockUsers } from '../../data/mocks/mockProfiles';
import Card from '../../components/Card';
import Modal from '../../components/Modal';
import { calcularAfinidade } from '../../utils/afinidade';
import { useIsMobile } from '../../hooks/useIsMobile';

function App() {
  const [formValues, setFormValues] = useState({ nome: '', area: '', localizacao: '' });
  const [filtro, setFiltro] = useState({ nome: '', area: '', localizacao: '' });
  const [descartados, setDescartados] = useState<number[]>([]);
  const [conectados, setConectados] = useState<number[]>([]);
  const [modalAberta, setModalAberta] = useState(false);
  const [mostrarTodos, setMostrarTodos] = useState(false);
  const [mostrarNotificacao, setMostrarNotificacao] = useState(false);
  const [usuariosDescartadosAnimacao, setUsuariosDescartadosAnimacao] = useState<number[]>([]);
  const isMobile = useIsMobile();

  const usuariosFiltrados = mockUsers
    .filter(user => calcularAfinidade(user, filtro) >= 60)
    .filter(user => !descartados.includes(user.id) && !usuariosDescartadosAnimacao.includes(user.id));

  const handleDescartar = (id: number) => {
    setUsuariosDescartadosAnimacao(prev => [...prev, id]);
    setTimeout(() => {
      setDescartados(prev => [...prev, id]);
      setUsuariosDescartadosAnimacao(prev => prev.filter(uid => uid !== id));
    }, 1000); 
  };

  const handleConectar = (id: number) => {
    setConectados(prev =>
      prev.includes(id) ? prev.filter(uid => uid !== id) : [...prev, id]
    );

    setMostrarNotificacao(true);
    setTimeout(() => setMostrarNotificacao(false), 3000);
  };

  const usuariosParaExibir = mostrarTodos ? usuariosFiltrados : usuariosFiltrados.slice(0, 3);

  return (
    <div>
      <main className="container">
        <h1 className="main-title">Mini MVP de Match Inteligente</h1>

        <Formulario
          values={formValues}
          onChange={setFormValues}
          onSubmit={() => {
            setFiltro(formValues);
            setFormValues({ nome: '', area: '', localizacao: '' });
            setMostrarTodos(false);
          }}
        />

        <button className='btn-criar-conexoes' onClick={() => setModalAberta(true)}>
          Buscar Conexões
        </button>

        <Modal
          isOpen={modalAberta}
          onClose={() => setModalAberta(false)}
          values={formValues}
          onChange={setFormValues}
          onSubmit={() => {
            setFiltro(formValues);
            setFormValues({ nome: '', area: '', localizacao: '' });
            setMostrarTodos(false);
          }}
        />

        {usuariosFiltrados.length === 0 ? (
          <p className="mensagem-sem-conexao">Nenhuma conexão encontrada com os critérios informados.</p>
        ) : (
          <section
            className={
              isMobile
                ? "card-container"
                : mostrarTodos && usuariosFiltrados.length > 3
                  ? "carousel-container"
                  : "card-container"
            }
          >
            {usuariosParaExibir.map((user) => (
              <div
                className={isMobile ? "" : "card-carousel"}
                key={user.id}
                style={{
                  opacity: usuariosDescartadosAnimacao.includes(user.id) ? 0 : 1,
                  transform: usuariosDescartadosAnimacao.includes(user.id) ? 'translateY(-20px)' : 'translateY(0)',
                  transition: 'opacity 1s ease-out, transform 1s ease-out',
                }}
              >
                <Card>
                  <img src={user.imagem} alt={`Foto de ${user.nome}`} className="user-image" />
                  <h3 className="user-name">{user.nome}</h3>
                  <p className="user-area">{user.areaInteresse}</p>
                  <p className="user-afinidade">
                    Nível de afinidade: <span>{calcularAfinidade(user, filtro)}%</span>
                  </p>
                  <progress value={calcularAfinidade(user, filtro)} max={100} />
                  <div className='btn-container'>
                    {!conectados.includes(user.id) && (
                      <button className='btn btn-descartar' onClick={() => handleDescartar(user.id)}>
                        Descartar
                      </button>
                    )}
                    <button
                      className={`btn btn-conectar ${conectados.includes(user.id) ? 'conectado' : ''}`}
                      onClick={() => handleConectar(user.id)}
                    >
                      {conectados.includes(user.id) ? 'Solicitação Enviada' : 'Conectar'}
                    </button>
                  </div>
                </Card>
              </div>
            ))}
          </section>
        )}

        {!mostrarTodos && usuariosFiltrados.length > 3 && (
          <button
            className='btn-mostrar-mais'
            onClick={() => setMostrarTodos(true)}
          >
            Mostrar mais
          </button>
        )}

        {mostrarNotificacao && (
          <div className="notificacao">
            <p>Solicitação enviada!</p>
            <div className="progress-bar"></div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
