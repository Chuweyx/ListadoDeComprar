
import React from 'react';

const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="homeimg">
                <img src="images/img01.jpg" alt="avion" />
            </div>
            <div className="columnas">
                <div className="bienvenidos left">
                    <h2>Bienvenidos</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries </p>
                </div>
                    <div className="testimonios right">
                      <h2>Testimonios</h2>
                    <div className="testimonio">
                        <span className="cita">Simplemente Exelente</span>
                        <span className="autor">Juan Perez</span>
                    </div>
                </div>
            </div>
        </main>
    );
}
export default HomePage;