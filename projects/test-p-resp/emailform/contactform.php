<?PHP
require_once("./include/fgcontactform.php");

$formproc = new FGContactForm();
$formproc->AddRecipient('yarutun@gmail.com'); //<<---Put your email address here
$formproc->SetFormRandomKey('CnRrspl1FyEylUj');


if(isset($_POST['submitted']))
{
   if($formproc->ProcessForm())
   {
        $formproc->RedirectToURL("thank-you.php");
   }
}

?>

<!-- Form Code Start -->
<div id="feed-container">
  <div id="feed-form">
    <button id="feed-close" type="button" class="btn btn-default btn-sm">
      <span class="glyphicon glyphicon-remove"></span>
    </button>


<form id='contactus' action='<?php echo $formproc->GetSelfScript(); ?>' method='post' accept-charset='UTF-8'>

<h1>ОБРАТНАЯ СВЯЗЬ</h1>

<input type='hidden' name='submitted' id='submitted' value='1'/>
<input type='hidden' name='<?php echo $formproc->GetFormIDInputName(); ?>' value='<?php echo $formproc->GetFormIDInputValue(); ?>'/>
<input type='text'  class='spmhidip' name='<?php echo $formproc->GetSpamTrapInputName(); ?>' />

<div class='short_explanation'>* обязательные поля</div>

<div><span class='error'><?php echo $formproc->GetErrorMessage(); ?></span></div>

<div class='feed-container'>
    <label for='name' >Ваше имя*: </label><br/>
    <input type='text' name='name' id='name' value='<?php echo $formproc->SafeDisplay('name') ?>' maxlength="50" /><br/>
    <span id='contactus_name_errorloc' class='error'></span>
</div>

<div class='feed-container'>
    <label for='email' >Email*:</label><br/>
    <input type='text' name='email' id='email' value='<?php echo $formproc->SafeDisplay('email') ?>' maxlength="50" /><br/>
    <span id='contactus_email_errorloc' class='error'></span>
</div>

<div class='feed-container'>
    <label for='phone' >Телефон*:</label><br/>
    <input type='text' name='phone' id='phone' value='<?php echo $formproc->SafeDisplay('phone') ?>' maxlength="15" /><br/>
    <span id='contactus_phone_errorloc' class='error'></span>
</div>

<div class='feed-container'>
    <label for='message' >Сообщение:</label><br/>
    <span id='contactus_message_errorloc' class='error'></span>
    <textarea rows="10" cols="50" name='message' id='message'><?php echo $formproc->SafeDisplay('message') ?></textarea>
</div>

<div class='feed-container' style="text-align: center;">
    <input type='submit' name='Submit' value='ОТПРАВИТЬ' />
</div>

</form>
</div>
</div>
<script type='text/javascript'>
// <![CDATA[

    var frmvalidator  = new Validator("contactus");
    frmvalidator.EnableOnPageErrorDisplay();
    frmvalidator.EnableMsgsTogether();
    frmvalidator.addValidation("name","req","Введите имя");

    frmvalidator.addValidation("email","req","Введите email");

    frmvalidator.addValidation("email","email","Введите корректный email");

    frmvalidator.addValidation("message","maxlen=2048","Сообщение очень длинное!(более 2KB!)");

    frmvalidator.addValidation("phone","req","Введите номер телефона");

// ]]>
</script>

<script>
$(document).ready(function() {
    $('#feed-close').click(function(){
    $('#feed-wrap').html('');
    });
  });
</script>