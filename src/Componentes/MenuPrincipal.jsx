import React from "react";
import { Link } from "react-router-dom";

export const MenuPrincipal = () => {
  return (
    <>
      <div className="menu">
        <header>
          <h1>
            Bienvenido a la pagina de navegación para tus Practicas
            Profesionales!
          </h1>
        </header>
        <Link to="/registrarPracticas">
          <button>Registrar Practicas</button>
        </Link>
        <Link to="/consultarPracticas" target="_blank">
          <button>Consultar Practicas</button>
        </Link>
        <h2>Objetivo de la página</h2>
        <p>
          La aplicación de seguimiento de prácticas profesionales tiene como
          objetivo brindar a los estudiantes una herramienta efectiva para
          realizar un seguimiento de sus prácticas en entornos profesionales.
          Proporciona una plataforma centralizada donde los estudiantes pueden
          registrar, organizar y acceder fácilmente a la información relacionada
          con sus prácticas.
        </p>
        <h2>Cómo puede ayudar a los estudiantes</h2>
        <p>
          Nuestra aplicación ayuda a los estudiantes a maximizar su experiencia
          de prácticas profesionales al ofrecer las siguientes ventajas:
        </p>
        <ul>
          <li>
            Registro y almacenamiento de datos: Los estudiantes pueden ingresar
            y guardar los detalles esenciales de sus prácticas, como información
            de la empresa, supervisor, tareas y fechas.
          </li>
          <li>
            Seguimiento de progreso: Los estudiantes pueden realizar un
            seguimiento del progreso de sus prácticas y registrar las horas
            dedicadas a cada tarea, lo que les permite evaluar y comunicar de
            manera efectiva su experiencia.
          </li>
          <li>
            Consulta y búsqueda: Nuestra aplicación proporciona una función de
            consulta y búsqueda que permite a los estudiantes acceder
            rápidamente a la información de prácticas anteriores y encontrar
            detalles específicos cuando sea necesario.
          </li>
        </ul>
        <h2>Cómo usar la aplicación</h2>
        <p>
          Usar nuestra aplicación de seguimiento de prácticas es sencillo y
          fácil. Aquí te explicamos cómo empezar:
        </p>
        <ol>
          <li>
            Agrega tus prácticas: Completa los detalles de cada práctica,
            incluyendo datos de la empresa, supervisor, tareas y fechas de
            realización.
          </li>
          <li>
            Realiza un seguimiento del progreso: Registra las horas dedicadas a
            cada tarea y realiza un seguimiento de tu progreso en cada práctica.
          </li>
          <li>
            Consulta y busca información: Utiliza la función de búsqueda para
            encontrar prácticas anteriores o detalles específicos cuando lo
            necesites.
          </li>
        </ol>
        <p>
          ¡Comienza a maximizar tu experiencia de prácticas profesionales con
          nuestra aplicación de seguimiento! Mantén un registro completo de tus
          prácticas para un futuro exitoso en tu carrera profesional.
        </p>
        <footer>
          <p>
            Trabajo realizado por los estudiantes José Guzmán, Oscar Vergara y
            Santiago Santafé, estudiantes de Ingeniería Informática de la
            Universidad de la Sabana, presentado como parcial final para la
            materia de Programación de Nuevas Tecnologías, bajo la dirección del
            profesor Daniel Saavedra.
          </p>
        </footer>
      </div>
    </>
  );
};
