import { dataServices } from '../../const/data-services';

export const SectionServices = () => {

    return (
        <>
            <div className="container section-title" data-aos="fade-up">
                <span className="subtitle">Servicios</span>
                <h2>Nuestros servicios de asesoria</h2>
                <p>Soluciones practicas para tus tramites y proyectos</p>
            </div>

            <div className="container" data-aos="fade-up" data-aos-delay="100">

                <div className="row gy-5">

                    {dataServices.seccion_superior.map((item: any) => (

                        <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
                            <div className="service-item">
                                <div className='image-bg'>
                                    <div className="service-icon">
                                        <i className="bi bi-graph-up-arrow"></i>
                                    </div>
                                    <h3>{item.titulo}</h3>
                                </div>
                                <div className='pad-des'>
                                    <p>{item.descripcion}</p>
                                    <span className="client-service"> <i className="bi bi-check-lg"> </i>
                                        {item.servicios[0]}</span>
                                    <span className="client-service"><i className="bi bi-check-lg"> </i>{item.servicios[1]}</span>
                                    <span className="client-service"><i className="bi bi-check-lg"> </i>{item.servicios[2]}</span>
                                    <span className="client-service"><i className="bi bi-check-lg"> </i>{item.servicios[3]}</span>
                                    <span className="client-service"> <i className="bi bi-check-lg"> </i> {item.servicios[4]}</span>
                                    <span className="client-service"><i className="bi bi-check-lg"> </i> {item.servicios[5]}</span>


                                    <a href="https://wa.me/51988844406?text=Hola%2C%20quisiera%20consultar%20sobre%20esta%20%C3%A1rea." className="service-link" target="_blank">
                                        Consultar sobre esta area <i className="bi bi-arrow-right"></i>
                                    </a>
                                </div>

                            </div>
                        </div>
                    )

                    )}

                </div>

                <div className="row gy-5 mt-2">


                    {dataServices.seccion_inferior.map((item: any) => (

                        <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200" key={item.index}>
                            <div className="service-item">

                                <div className='image-bg'>
                                    <div className="service-icon">
                                        <i className="bi bi-graph-up-arrow"></i>
                                    </div>
                                    <h3>{item.titulo}</h3>
                                </div>
                                <div className='pad-des'>
                                    <p>{item.descripcion}</p>
                                    <span className="client-service">{item.subtitulo}</span>

                                    {
                                        item.servicios.map((i: any, index: number) => (
                                            <span className="client-service detail-icon" key={index}>
                                                <i className={`bi bi-${index + 1}-circle-fill`}> </i>
                                                {i.texto}</span>
                                        ))
                                    }

                                    <a href="https://wa.me/51988844406?text=Hola%2C%20quisiera%20consultar%20sobre%20esta%20%C3%A1rea." className="service-link" target="_blank">
                                        Consultar sobre esta area <i className="bi bi-arrow-right"></i>
                                    </a>
                                </div>

                            </div>
                        </div>
                    )

                    )}

                </div>

            </div>
        </>
    )
}