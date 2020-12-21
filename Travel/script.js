var frmValidator = new frmValidator("contactus");
frmValidator.EnableOnpageErrorDisplay();
frmValidator.EnableMsgsTogether();
frmValidator.addValidation("name", "req", "Please provide your Name");

frmValidator.addValidation("email", "req", "Please provide your E-mail Address!");

frmValidator.addValidation("email", "email", "Please provide a valid E-mail Address!!");

frmValidator.addValidation("message", "maxlen=2048", "The message is too long!");
