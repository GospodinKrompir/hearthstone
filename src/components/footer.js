import React, { Component } from 'react';
import '../scss/footer.scss';


class Footer extends Component {

    render() {
        return (
            <footer>
                <div className="termsInfo"><div>CONTACT</div><div>TERMS AND CONDITIONS</div><div>BLIZZARD ENTERTAINMENT</div></div>
                <div className="blizzardLogo"></div>
                <div className="socialButtons"><div className="nonflex"><a href="https://www.facebook.com/Hearthstone/" target="_blank" rel="noopener noreferrer"><div className="socialmedia facebook"></div></a><a href="https://www.youtube.com/channel/UCVia_crjzJylRmGq7SHTiaw" target="_blank" rel="noopener noreferrer"><div className="socialmedia youtube"></div></a></div><div className="nonflex"><a href="https://www.instagram.com/playhearthstone/?hl=en" target="_blank" rel="noopener noreferrer"><div className="socialmedia instagram"></div></a><a href="https://twitter.com/PlayHearthstone?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank" rel="noopener noreferrer"><div className="socialmedia twitter"></div></a></div></div>
            </footer>
        )
    }
}

export default Footer;