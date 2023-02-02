function Contactee (){
    return(
        <section className="mb-4">
            <h2 className="h1-responsive font-weight-bolder text-center my-4 ">CONTACTEZ NOUS</h2>
            <div className="row formes">
                <div className="col-md-9 mb-md-0 mb-5">
                    <form id="contact-form" name="contact-form" action="mail.php" method="POST" className="contact-form">
                        <div className="row emailtop">
                            <div className="col-md-6">
                                <div className="row prenom">
                                    <div className="md-form mb-1">
                                        <input type="text" id="name" name="name" className="form-control" placeholder="Votre nom"/>
                                    </div>
                                    <div className="md-form mb-1">
                                        <input type="text" id="subject" name="subject" className="form-control" placeholder="Votre prénom"/>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div className="row emailtop">
                            <div className="col-md-4 contour">
                                <div className="md-form mb-0">
                                    <input type="text" id="email" name="email" className="form-control" placeholder="Votre email"/>
                                </div>
                            </div>
                        </div>
                        <div className="row emailtop">
                            <div className="col-md-12 contour">
                                <div className="md-form">
                                    <textarea type="text" id="message" name="message" rows="7" className="form-control md-textarea" placeholder="Votre projet"></textarea>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="text-center text-md-left">
                    <a className="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Envoyer</a>
                </div>
                <div className="status"></div>
                
            </div>
        </section>
    );
}
export default Contactee;