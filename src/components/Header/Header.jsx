import './header.css'
import bg from '../../assets/images/bg.jpg'
import bg2 from '../../assets/images/bg2.jpg'
import bg3 from '../../assets/images/bg3.jpg'
import arrowleft from '../../assets/images/arrow-left.png'
import arrowright from '../../assets/images/arrow-right.svg'
import {useState} from "react"


function Header() {

    const [currentBg, setCurrentBg] = useState(bg)
    const bgArray = [bg, bg2, bg3]

    const changeBackground = (arg) => {
        let index = bgArray.indexOf(currentBg)
        if (arg == 'back') {
            index = (index - 1 + bgArray.length) % bgArray.length
        } else if (arg == 'next') {
            index = (index + 1) % bgArray.length
        }
        setCurrentBg(bgArray[index])
    }

    return (
        <>
            <header className="header">
                <img src={currentBg} alt="" className="header__bg"/>
                <div className="header__content">
                    <h1 className="header__content-title">Kembang Flower Mantap</h1>
                    <div className="header__content-descr">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</div>
                    <div className="header__content-btns">
                        <a href="#!" onClick={() => changeBackground('back')} className="header__content-btn">
                            <div className="header__content-btn-top">
                                <img src={arrowleft} alt=""/>
                                Previous
                            </div>
                            <p className="header__content-btn-bottom">Kaktus Plant</p>
                        </a>
                        <a href="#!" onClick={() => changeBackground('next')} className="header__content-btn">
                            <div className="header__content-btn-top">
                                Next
                                <img src={arrowright} alt=""/>
                            </div>
                            <p className="header__content-btn-bottom">Rahasia Plant</p>
                        </a>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header