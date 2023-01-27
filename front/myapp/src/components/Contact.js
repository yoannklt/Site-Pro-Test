function Contactee (){
    return(
        <section class="mb-4">
            <h2 class="h1-responsive font-weight-bolder text-center my-4 ">CONTACTEZ NOUS</h2>
            <div class="row formes">
                <div class="col-md-9 mb-md-0 mb-5">
                    <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="row prenom">
                                    <div class="md-form mb-1">
                                        <input type="text" id="name" name="name" class="form-control" placeholder="Votre nom"/>
                                    </div>
                                    <div class="md-form mb-1">
                                        <input type="text" id="subject" name="subject" class="form-control" placeholder="Votre prénom"/>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4">
                                <div class="md-form mb-0">
                                    <input type="text" id="email" name="email" class="form-control" placeholder="Votre email"/>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="md-form">
                                    <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea" placeholder="Votre projet"></textarea>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div class="text-center text-md-left">
                        <a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
                    </div>
                    <div class="status"></div>
                </div>
            </div>
        </section>
    );
}
export default Contactee;