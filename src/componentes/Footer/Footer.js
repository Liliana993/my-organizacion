import "./Footer.css"

const Footer = () => {
    return <footer className="footer" style={{backgroundImage: "url(/img/Rectangle.png)"}}>
        
    <div className="redes">
        <a href="https://www.facebook.com/liliana.escobar.7169">
        <img src="/img/facebook.png" alt="Facebook" />
        </a>
        <a href="https://www.twitter.com.ar">
            <img src="/img/twitter.png" alt="twiter" />
        </a>
        <a href="https://instagram.com/liliana.escobar.7169">
            <img src="/img/instagram.png" alt="Instagram" />
        </a>
    </div>
    <img src="/img/Logo.png" alt="my-org" />
    <strong>Desarrollado por Liliana Escobar</strong>
    </footer>
}

export default Footer