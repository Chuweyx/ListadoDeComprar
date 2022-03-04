
import React from 'react';

const NosotrosPage = (props) => {
    return (
        <section className="holder">
            <div className="historia">
                <h2>Historia</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
            </div>
            <h2>Staff</h2>
            <div className="personas">
                <div className="persona">
                     <img src="images/nosotros1.jpg" width="75" alt="Juan" />
                     <h5>Juan Gomez</h5>
                     <h6>Gerente General</h6>
                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                </div>
            </div>

        </section>
    );
}
export default NosotrosPage;