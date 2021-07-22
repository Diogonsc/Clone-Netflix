import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className="rede-sociais">
                <a href="https://github.com/Diogonsc"><i class="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/diogo-nascimento-02199879/"><i class="fab fa-linkedin-in"></i></a>
                <a href="https://diogonsc.github.io/Diogo_Nascimento/"><i class="fas fa-at"></i></a>
            </div>
            <div>
                Dados pegos no site <a href='https://www.themoviedb.org/'><span>Themoviedb.ogr</span></a>
            </div>
            
        </footer>
    )
}

export default Footer
