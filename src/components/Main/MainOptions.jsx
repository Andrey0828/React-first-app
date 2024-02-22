import './main.css'

function MainOptions() {

    const mainOptionsItems = [
        { logo: '', title: 'Fast Delivery', descr: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard" },
        { logo: '', title: 'Great Customer Service', descr: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard " },
        { logo: '', title: 'Original Plants', descr: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard " },
        { logo: '', title: 'Affordable Price', descr: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard " }
    ]

    return (
        <>
            <section className="options">
                <div className="container options__content">
                    {
                        mainOptionsItems.map((item, i) => (
                            <div className="options__item" key={i}>
                                <h2 className="options__item-title">{item.title}</h2>
                                <p className="options__item-descr">{item.descr}</p>
                            </div>
                        ))
                    }
                </div>
            </section>
        </>
    )

}

export default MainOptions