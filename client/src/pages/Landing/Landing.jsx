//pages/Landing/Landing.jsx


import "./landing.css"

import { Link } from "react-router-dom"

const Landing = () => {

    

    return (
        <div className='landing'>
            <div className="header">
            </div>
            <div className="upper-layer">
                <h1>Bienvenido a <span className='brand-name'>FitnessApp</span></h1>
                <Link to={'/home'}>
                    <button className='btn-get-started'>Comenzar!</button>
                </Link>
            </div>

        </div>
    )
}

export default Landing
