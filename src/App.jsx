import { useState } from 'react'
import {
  perfil,
  experiencia,
  formacao,
  certificacoes,
  stacks,
  projetos,
  contatos,
} from './data'
import './App.css'

function Secao({ titulo, children }) {
  return (
    <section className="secao">
      <h2>{titulo}</h2>
      {children}
    </section>
  )
}

function Stacks() {
  const categorias = ['Todas', ...new Set(stacks.map((s) => s.categoria))]
  const [filtro, setFiltro] = useState('Todas')
  const visiveis = stacks.filter((s) => filtro === 'Todas' || s.categoria === filtro)

  return (
    <>
      <div className="filtros">
        {categorias.map((c) => (
          <button
            key={c}
            className={c === filtro ? 'ativo' : ''}
            onClick={() => setFiltro(c)}
          >
            {c}
          </button>
        ))}
      </div>
      <ul className="stacks">
        {visiveis.map((s) => (
          <li key={s.nome}>{s.nome}</li>
        ))}
      </ul>
    </>
  )
}

export default function App() {
  return (
    <>
      <main className="container">
        <header className="topo">
          <img className="foto" src={perfil.foto} alt={perfil.nome} />
          <div>
            <h1>{perfil.nome}</h1>
            <p>{perfil.idade} anos</p>
            <p className="cargo">{perfil.cargo}</p>
          </div>
        </header>

        <Secao titulo="Sobre">
          <p>{perfil.sobre}</p>
        </Secao>

        <Secao titulo="Formação">
          <div className="card">
            <strong>{formacao.curso}</strong>
            <span>{formacao.instituicao}</span>
            <span className="muted">{formacao.status}</span>
          </div>
        </Secao>

        <Secao titulo="Experiência">
          {experiencia.map((e) => (
            <div className="card" key={e.empresa}>
              <strong>
                {e.cargo} — {e.empresa}
              </strong>
              <span>{e.descricao}</span>
            </div>
          ))}
        </Secao>

        <Secao titulo="Stacks">
          <Stacks />
        </Secao>

        <Secao titulo="Projetos da faculdade">
          <div className="grid">
            {projetos.map((p) => (
              <article className="card" key={p.titulo}>
                <strong>{p.titulo}</strong>
                <span>{p.descricao}</span>
                <ul className="tags">
                  {p.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Secao>

        <Secao titulo="Certificações">
          <div className="certs">
            {certificacoes.map((c) => (
              <img key={c.img} src={c.img} alt={c.alt} />
            ))}
          </div>
        </Secao>

        <Secao titulo="Contatos">
          <div className="contatos">
            {contatos.map((c) => (
              <a key={c.href} href={c.href} target="_blank" rel="noreferrer">
                <img src={c.icone} alt={c.alt} />
                {c.nome}
              </a>
            ))}
          </div>
        </Secao>
      </main>

      <footer className="footer">
        <p>Desenvolvido por {perfil.nome}</p>
      </footer>
    </>
  )
}
