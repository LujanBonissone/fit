import React from 'react';
import "./home.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Chatbot from '../../components/chatbot/ChatBot'; // Ajusta la ruta según sea necesario

const Home = () => {
    return (
        <div className='home'>
            <Navbar />
            <div className="banner">
                <h1>Bienvenido a FitnessApp</h1>
                <p>La Aplicación perfecta para lograr tus metas fitness</p>
            </div>
            <div className="mainContent">
                <section className="infoSection">
                <h1>¿Qué es el Fitness y para qué sirve?</h1>
                <p>
            El fitness se refiere a un estado de salud y bienestar físico. Es la capacidad de realizar
            actividades físicas diarias con vigor y sin fatiga excesiva, y tener energía para disfrutar
            de actividades de ocio y responder a emergencias.
          </p>
          <h4>Mejora la resistencia aeróbica</h4>
          <p>
            El fitness puede aumentar el desarrollo del sistema cardiorrespiratorio y en consecuencia,
            lograr una mayor resistencia aeróbica.
          </p>
          <h4>Fortalece la condición física</h4>
          <p>
            A través de movimientos que requieren mantener una tensión durante cierto tiempo, el fitness
            ayuda a trabajar la fuerza muscular y mejorar la condición física.
          </p>
          <img src="./fitnes.png" alt="Training Tips" />
                </section>
                <section className="infoSection">
                <h2>Beneficios del Fitness</h2>
          <ul>
            Mejora la salud cardiovascular<br></br>
            Aumenta la fuerza y resistencia muscular<br></br>
            Ayuda a mantener un peso saludable<br></br>
            Mejora la salud mental y el estado de ánimo<br></br>
            Reduce el riesgo de enfermedades crónicas
          </ul>
                    <img src="./beneficios.jpg" alt="Training Tips" />
                </section>
                <section className="infoSection" id='ult'>
                    <h2>Nutrición Saludable</h2>
                    <p>Una dieta balanceada es crucial para alcanzar tus metas fitness. Asegúrate de incluir proteínas, carbohidratos y grasas saludables en tu dieta.</p>
                    <img src="./alimentacion.jpg" alt="Healthy Nutrition" />
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
