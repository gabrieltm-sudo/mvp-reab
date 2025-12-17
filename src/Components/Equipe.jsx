import { ClipboardPlusIcon, Users2Icon } from "lucide-react";
import React from "react";
import { GiHealing } from "react-icons/gi";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { RiMentalHealthLine } from "react-icons/ri";

const Equipe = () => {
  return (
    <>
      <section id="principal1">
        <div className="title">
          <h1>Equipe do Serviço de Reabilitação Física de Bagé</h1>
        </div>
      </section>

      <section className="equipe">
        <div className="equipe-container">
          <p>
            <br/>A equipe do Serviço de Reabilitação Física de Bagé conta com 24
            profissionais de diferentes áreas.
          </p>

          <p> Mais informações disponíveis{" "}
            <a href="https://cnes2.datasus.gov.br/Mod_Profissional.asp?VCo_Unidade=4301602261448"
              target="_blank"
            >
              aqui
            </a>.</p>

          <h3 className="cargo-titulo"><MdOutlineHealthAndSafety /> Coordenação (1)</h3>

          <div className="equipe-cards">
            <div className="equipe-card">
              <img src="./images/avatar.jpeg" alt="Foto do Profissional" />
              <div className="equipe-info">
                <h3>Rosemeri Oliveira Barañano</h3>
                <p>Coordenadora e Fisioterapeuta Geral</p>
              </div>
            </div>
          </div>

          <h3 className="cargo-titulo"><GiHealing /> Equipe de Fisioterapia (9)</h3>

          <div className="equipe-cards">
            <div className="equipe-card">
              <img src="./images/avatar.jpeg" alt="Foto do Profissional" />
              <div className="equipe-info">
                <h3>Adriano François da Rosa Girasol</h3>
                <p>Fisioterapeuta</p>
              </div>
            </div>

            <div className="equipe-card">
              <img src="./images/avatar.jpeg" alt="Foto do Profissional" />
              <div className="equipe-info">
                <h3>Alessanda Moreira Ferreira</h3>
                <p>Fisioterapeuta</p>
              </div>
            </div>

            <div className="equipe-card">
              <img src="./images/avatar.jpeg" alt="Foto do Profissional" />
              <div className="equipe-info">
                <h3>Danuza Teixeira Corrêa</h3>
                <p>Fisioterapeuta</p>
              </div>
            </div>

            <div className="equipe-card">
              <img src="./images/avatar.jpeg" alt="Foto do Profissional" />
              <div className="equipe-info">
                <h3>Ionara Zavarese Hoffmeister</h3>
                <p>Fisioterapeuta</p>
              </div>
            </div>

            <div className="equipe-card">
              <img src="./images/avatar.jpeg" alt="Foto do Profissional" />
              <div className="equipe-info">
                <h3>Joana da Rocha Bittencourt</h3>
                <p>Fisioterapeuta</p>
              </div>
            </div>

            <div className="equipe-card">
              <img src="./images/avatar.jpeg" alt="Foto do Profissional" />
              <div className="equipe-info">
                <h3>Mara Cristina Crosta dos Reis</h3>
                <p>Fisioterapeuta</p>
              </div>
            </div>

            <div className="equipe-card">
              <img src="./images/avatar.jpeg" alt="Foto do Profissional" />
              <div className="equipe-info">
                <h3>Marcia Minuzzi Stochero</h3>
                <p>Fisioterapeuta</p>
              </div>
            </div>

            <div className="equipe-card">
              <img src="./images/avatar.jpeg" alt="Foto do Profissional" />
              <div className="equipe-info">
                <h3>Tais Silva Ramos Mouchet</h3>
                <p>Fisioterapeuta</p>
              </div>
            </div>

            <div className="equipe-card">
              <img src="./images/avatar.jpeg" alt="Foto do Profissional" />
              <div className="equipe-info">
                <h3>Tael Centeno Krolow</h3>
                <p>Fisioterapeuta</p>
              </div>
            </div>
          </div>

          <h3 className="cargo-titulo"><GiHealing /> Equipe de Ortodopedia (2)</h3>

          <div className="equipe-cards">
            <div className="equipe-card">
              <img src="./images/avatar.jpeg" alt="Foto do Profissional" />
              <div className="equipe-info">
                <h3>Alexandre Codevilla Teixeira</h3>
                <p>Médico Ortodopedista e Traumatologista</p>
              </div>
            </div>

            <div className="equipe-card">
              <img src="./images/avatar.jpeg" alt="Foto do Profissional" />
              <div className="equipe-info">
                <h3>Carlito Mendonça de Menezes</h3>
                <p>Técnico de Ortopedia</p>
              </div>
            </div>
          </div>

          <h3 className="cargo-titulo"><ClipboardPlusIcon /> Equipe de Enfermagem (1)</h3>

          <div className="equipe-cards">
            <div className="equipe-card">
              <img src="./images/avatar.jpeg" alt="Foto do Profissional" />
              <div className="equipe-info">
                <h3>Fernanda Reiznautt de Lima Gonçalves Monteiro</h3>
                <p>Enfermeira</p>
              </div>
            </div>
          </div>

          <h3 className="cargo-titulo"><RiMentalHealthLine /> Equipe de Terapia (1)</h3>

          <div className="equipe-cards">
            <div className="equipe-card">
              <img src="./images/avatar.jpeg" alt="Foto do Profissional" />
              <div className="equipe-info">
                <h3>Andryelen Haas Gallina</h3>
                <p>Terapeuta Ocupacional</p>
              </div>
            </div>
          </div>

          <h3 className="cargo-titulo"><ClipboardPlusIcon /> Equipe de Psicologia (1)</h3>

          <div className="equipe-cards">
            <div className="equipe-card">
              <img src="./images/avatar.jpeg" alt="Foto do Profissional" />
              <div className="equipe-info">
                <h3>Mônica Ester da Silva Mendes</h3>
                <p>Psicólogo Clínico</p>
              </div>
            </div>
          </div>

          <h3 className="cargo-titulo"><ClipboardPlusIcon /> Equipe de Fonoaudiologia (1)</h3>

          <div className="equipe-cards">
            <div className="equipe-card">
              <img src="./images/avatar.jpeg" alt="Foto do Profissional" />
              <div className="equipe-info">
                <h3>Rosana Britto Maria</h3>
                <p>Fonoaudiologo Geral</p>
              </div>
            </div>
          </div>

          <h3 className="cargo-titulo"> <Users2Icon /> Equipe de Apoio e Administrativa (8)</h3>

          <div className="equipe-cards">
            <div className="equipe-card">
              <img src="./images/avatar.jpeg" alt="Foto do Profissional" />
              <div className="equipe-info">
                <h3>Isabel Cristina Martins Domingues de Souza</h3>
                <p>Assistente Social</p>
              </div>
            </div>

            <div className="equipe-card">
              <img src="./images/avatar.jpeg" alt="Foto do Profissional" />
              <div className="equipe-info">
                <h3>Alice Bramardi Valiera</h3>
                <p>Assistente Administrativo</p>
              </div>
            </div>

            <div className="equipe-card">
              <img src="./images/avatar.jpeg" alt="Foto do Profissional" />
              <div className="equipe-info">
                <h3>Luciana Rivero Martinez</h3>
                <p>Assistente Administrativo</p>
              </div>
            </div>

            <div className="equipe-card">
              <img src="./images/avatar.jpeg" alt="Foto do Profissional" />
              <div className="equipe-info">
                <h3>Ana Carolina de Oliveira Proença</h3>
                <p>Recepcionista, Em Geral</p>
              </div>
            </div>

            <div className="equipe-card">
              <img src="./images/avatar.jpeg" alt="Foto do Profissional" />
              <div className="equipe-info">
                <h3>Bianca Rosa da Luz</h3>
                <p>Recepcionista, Em Geral</p>
              </div>
            </div>

            <div className="equipe-card">
              <img src="./images/avatar.jpeg" alt="Foto do Profissional" />
              <div className="equipe-info">
                <h3>Isadora Moraes Marques</h3>
                <p>Recepcionista, Em Geral</p>
              </div>
            </div>

            <div className="equipe-card">
              <img src="./images/avatar.jpeg" alt="Foto do Profissional" />
              <div className="equipe-info">
                <h3>Lisiane Berdet Jardim</h3>
                <p>Recepcionista, Em Geral</p>
              </div>
            </div>

            <div className="equipe-card">
              <img src="./images/avatar.jpeg" alt="Foto do Profissional" />
              <div className="equipe-info">
                <h3>Marcia Ferrer Geleski</h3>
                <p>Recepcionista, Em Geral</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Equipe;
