import { ClipboardPlusIcon, Users2Icon } from "lucide-react";
import React from "react";
import { GiHealing } from "react-icons/gi";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { RiMentalHealthLine } from "react-icons/ri";

import "../styles/pages/equipe.css";

const equipeData = [
  {
    id: "coordenacao",
    titulo: "Coordenação (1)",
    icone: <MdOutlineHealthAndSafety />,
    profissionais: [
      {
        id: 1,
        nome: "Rosemeri Oliveira Barañano",
        cargo: "Coordenadora e Fisioterapeuta Geral",
        foto: "./images/avatar.jpeg"
      },
    ],
  },

  {
    id: "fisioterapia",
    titulo: "Equipe de Fisioterapia (9)",
    icone: <GiHealing />,
    profissionais: [
      {
        id: 2,
        nome: "Adriano François da Rosa Girason",
        cargo: "Fisioterapeuta",
        foto: "./images/avatar.jpeg"
      },
      {
        id: 3,
        nome: "Alessanda Moreira Ferreira",
        cargo: "Fisioterapeuta",
        foto: "./images/avatar.jpeg"
      },
      {
        id: 4,
        nome: "Danuza Teixeira Corrêa",
        cargo: "Fisioterapeuta",
        foto: "./images/avatar.jpeg"
      },
      {
        id: 5,
        nome: "Ionara Zavarese Hoffmeister",
        cargo: "Fisioterapeuta",
        foto: "./images/avatar.jpeg"
      },
      {
        id: 6,
        nome: "Joana da Rocha Bittencourt",
        cargo: "Fisioterapeuta",
        foto: "./images/avatar.jpeg"
      },
      {
        id: 7,
        nome: "Mara Cristina Crosta dos Reis",
        cargo: "Fisioterapeuta",
        foto: "./images/avatar.jpeg"
      },
      {
        id: 8,
        nome: "Marcia Minuzzi Stochero",
        cargo: "Fisioterapeuta",
        foto: "./images/avatar.jpeg"
      },
      {
        id: 9,
        nome: "Tais Silva Ramos Mouchet",
        cargo: "Fisioterapeuta",
        foto: "./images/avatar.jpeg"
      },
      {
        id: 10,
        nome: "Tael Centeno Krolow",
        cargo: "Fisioterapeuta",
        foto: "./images/avatar.jpeg"
      },
    ],
    
  },

  {
    id: "ortopedia",
    titulo: "Equipe de Ortodopedia (2)",
    icone: <GiHealing />,
    profissionais: [
      {
        id: 11,
        nome: "Alexandre Codevilla Teixeira",
        cargo: "Médico Ortodopedista e Traumatologista",
        foto: "./images/avatar.jpeg"
      },
      {
        id: 12,
        nome: "Carlito Mendonça de Menezes",
        cargo: "Técnico de Ortopedia",
        foto: "./images/avatar.jpeg"
      },
    ],
  },
  {
    id: "enfermagem",
    titulo: "Equipe de Enfermagem (1)",
    icone: <ClipboardPlusIcon />,
    profissionais: [
      {
        id: 13,
        nome: "Fernanda Reiznautt de Lima Gonçalves Monteiro",
        cargo: "Enfermeira",
        foto: "./images/avatar.jpeg"
      },
    ]
  },
  {
    id: "terapia",
    titulo: "Equipe de Terapia (1)",
    icone: <RiMentalHealthLine />,
    profissionais: [
      {
        id: 14,
        nome: "Andryelen Haas Gallina",
        cargo: "Terapeuta Ocupacional",
        foto: "./images/avatar.jpeg"
      },
    ],
  },
  {
    id: "psicologia",
    titulo: "Equipe de Psicologia (1)",
    icone: <ClipboardPlusIcon />,
    profissionais: [ 
      {
        id: 15,
        nome: "Mônica Ester da Silva Mendes",
        cargo: "Psicólogo Clínico",
        foto: "./images/avatar.jpeg"
      },
    ],
  },
  {
    id: "fonoaudiologia",
    titulo: "Equipe de Fonoaudiologia (1)",
    icone: <ClipboardPlusIcon />,
    profissionais: [
      {
        id: 16,
        nome: "Rosana Britto Maria",
        cargo: "Fonoaudiologo Geral",
        foto: "./images/avatar.jpeg"
      },
    ],
  },
  {
    id: "apoio-administrativa",
    titulo: "Equipe de Apoio e Administrativa (8)",
    icone: <Users2Icon />,
    profissionais: [
       {
        id: 17,
        nome: "Isabel Cristina Martins Domingues de Souza",
        cargo: "Assistente Social",
        foto: "./images/avatar.jpeg"
      },
      {
        id: 18,
        nome: "Alice Bramardi Valiera",
        cargo: "Assistente Administrativo",
        foto: "./images/avatar.jpeg"
      },
      {
        id: 19,
        nome: "Luciana Rivero Martinez",
        cargo: "Assistente Administrativo",
        foto: "./images/avatar.jpeg"
      },
      {
        id: 20,
        nome: "Ana Carolina de Oliveira Proença",
        cargo: "Recepcionista, Em Geral",
        foto: "./images/avatar.jpeg"
      },
      {
        id: 21,
        nome: "Bianca Rosa da Luz",
        cargo: "Recepcionista, Em Geral",
        foto: "./images/avatar.jpeg"
      },
      {
        id: 22,
        nome: "Isadora Moraes Marques",
        cargo: "Recepcionista, Em Geral",
        foto: "./images/avatar.jpeg"
      },
      {
        id: 23,
        nome: "Lisiane Berdet Jardim",
        cargo: "Recepcionista, Em Geral",
        foto: "./images/avatar.jpeg"
      },
      {
        id: 24,
        nome: "Marcia Ferrer Geleski",
        cargo: "Recepcionista, Em Geral",
        foto: "./images/avatar.jpeg"
      }
  ],
}
]

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
              target="_blank" rel="noopener noreferrer"
            >
              aqui
            </a>.</p>

          {equipeData.map((equipe) => (
            <section key={equipe.id}>
              <h3 className="cargo-titulo">
                {equipe.icone} {equipe.titulo}
              </h3>

              <div className="equipe-cards">
                {equipe.profissionais.map((profissional) => (
                  <div className="equipe-card" key={profissional.id}>
                    <img src={profissional.foto} alt={`Foto de ${profissional.nome}`} />
                    <div className="equipe-info">
                      <h3>{profissional.nome}</h3>
                      <p>{profissional.cargo}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </>
  )};
export default Equipe;
