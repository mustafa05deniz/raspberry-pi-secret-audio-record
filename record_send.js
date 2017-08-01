var Sound = require('node-arecord');
 
var sound = new Sound({
 debug: true,   
 destination_folder: '/home/pi/yourfolder',
 filename: 'yourfilename.wav',
 alsa_format: 'dat',
 alsa_device: 'plughw:1,0'
});
 
sound.record();
 
setTimeout(function () {
    sound.stop(); 
}, 10000);
 
sound.on('complete' ,function () {
    console.log('bitti');
});

var nodemailer = require("nodemailer");

var smtpTransport = nodemailer.createTransport("SMTP",{
   service: "Gmail",
   auth: {
       user: "yourmailadress",
       pass: "yourpass"
   }
});
var mail = {
    from: "",
    to: "",
    subject: "mail",
    text: "mail",
    html: "<b>mail</b>",
    attachments: [{
            filename: "yourfilename.wav",
            filePath: "/home/pi/yourfilepath",
            cid: "logo-mail"
        }]
}

smtpTransport.sendMail(mail, function(error, response){
    if(error){
        console.log(error);
    }else{
        console.log("Message sent: " + response.message);
    }

    smtpTransport.close();
});
