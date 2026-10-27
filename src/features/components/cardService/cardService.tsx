import { cardsData } from "../../../const/cards.data"
import "./cardService.css"
export const CardService = () => {

  return (
    <>
      <div className="container section-title" data-aos="fade-up">
        <span className="subtitle">Servicios</span>
        <h2>Nuestros servicios de asesoria</h2>
        <p>Soluciones practicas para tus tramites y proyectos</p>
      </div>
      <div className="container">
      
        <div className="cards-grid">
          {cardsData.map((card) => (
            <div className="card" key={card.id}>
              <div className="card-image-container">
                <img
                  className="card-image"
                  src={card.image}
                  alt={card.title}
                  loading="lazy"
                />

                <div
                  className="card-icon"
                  style={{
                    "--gradient-start": card.gradient.start,
                    "--gradient-end": card.gradient.end,
                    "--gradient-angle": `${card.gradient.angle}deg`
                  } as React.CSSProperties}
                >
                  <card.icon size={34} color="#ffffff" />
                </div>

                <h3 className="card-title">{card.title}</h3>
              </div>

              <div className="card-content">
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>


      </div>

    </>
  )
}