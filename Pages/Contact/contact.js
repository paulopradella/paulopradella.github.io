function sendMail(){
    var params ={
        name: document.getElementById("name").value,
        lastName: document.getElementById("lastname").value, 
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "service_cisfp62";
    const templateID = "template_h6gj48f";

    emailjs.send(serviceID,templateID,params).then((res) =>{
            document.getElementById("name").value = "";
            document.getElementById("lastName").value = "";
            document.getElementById("email").value = "";
            document.getElementById("subject").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Mensagem enviada com sucesso!")
        }
    )
    .catch((err)=> console.log(err))
}