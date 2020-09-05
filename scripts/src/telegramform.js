$(document).ready(function() {
  $(".feedback_form").submit(function() {
    var formID = $(this).attr('id');
    var formNm = $('#' + formID);
    var message = $(formNm).find(".form_message");
    var formTitle = $(formNm).find(".form_title");
    var formAgreementBlock = $(formNm).find(".agreement_block");
    $.ajax({
      type: "POST",
      url: './scripts/php/send-message-to-telegram.php',
      data: formNm.serialize(),
      success: function(data) {
        // Вывод сообщения об успешной отправке
        message.html(data);
        formTitle.css("display", "block");
        formAgreementBlock.css("display", "flex");
        setTimeout(function() {
          formAgreementBlock.css("display", "none");
          formTitle.css("display", "none");
          message.html('');
          $('input').not(':input[type=submit], :input[type=hidden]').val('');
        }, 3000);
      },
      error: function(jqXHR, text, error) {
        // Вывод сообщения об ошибке отправки
        message.html(error);
        formTitle.css("display", "block");
        formAgreementBlock.css("display", "flex");
        setTimeout(function() {
          formAgreementBlock.css("display", "none");
          formTitle.css("display", "none");
          message.html('');
          $('input').not(':input[type=submit], :input[type=hidden]').val('');
        }, 3000);
      }
    });
    return false;
  });
  $(".popup_form").submit(function() {
    var formID = $(this).attr('id');
    var formNm = $('#' + formID);
    var message = $(formNm).find(".form_message");
    var formTitle = $(formNm).find(".form_title");
    var formAgreementBlock = $(formNm).find(".agreement_block");

    console.log(formNm.serialize());

    $.ajax({
      type: "POST",
      url: './scripts/php/send-message-to-telegram.php',
      data: formNm.serialize(),
      success: function(data) {
        // Вывод сообщения об успешной отправке
        message.html(data);
        formTitle.css("display", "block");
        formAgreementBlock.css("display", "flex");
        setTimeout(function() {
          formAgreementBlock.css("display", "none");
          formTitle.css("display", "none");
          message.html('');
          $('input').not(':input[type=submit], :input[type=hidden]').val('');
        }, 3000);
      },
      error: function(jqXHR, text, error) {
        // Вывод сообщения об ошибке отправки
        message.html(error);
        formTitle.css("display", "block");
        formAgreementBlock.css("display", "flex");
        setTimeout(function() {
          formAgreementBlock.css("display", "none");
          formTitle.css("display", "none");
          message.html('');
          $('input').not(':input[type=submit], :input[type=hidden]').val('');
        }, 3000);
      }
    });
    return false;
  });
  $(".popup_request_contact_form").submit(function() {
    var formID = $(this).attr('id');
    var formNm = $('#' + formID);
    var message = $(formNm).find(".form_message");
    var formTitle = $(formNm).find(".form_title");
    var formAgreementBlock = $(formNm).find(".agreement_block");

    var images_urls = [
      "https://static.tildacdn.com/tild6261-3932-4534-b437-383862626364/002_1.jpg",
      "https://static.tildacdn.com/tild3464-6237-4630-b139-373530363932/004_1.jpg",
      "https://static.tildacdn.com/tild3036-3761-4337-b266-343065633630/005_1.jpg",
      "https://static.tildacdn.com/tild6339-3066-4363-a564-643064373265/012_1.jpg",
      "https://static.tildacdn.com/tild6234-3666-4438-a533-393763633238/009_1.jpg",
      "https://static.tildacdn.com/tild3365-6535-4334-b164-356334326634/003_1.jpg",
      "https://static.tildacdn.com/tild6335-6439-4737-b866-383130653133/001_1.jpg",
      "https://static.tildacdn.com/tild3937-6538-4831-b332-353662313437/007_1.jpg",
      "https://static.tildacdn.com/tild3964-6233-4337-a265-383634613438/006_1.jpg",
      "https://static.tildacdn.com/tild3539-6435-4034-a338-306138323564/011_1.jpg",
      "https://static.tildacdn.com/tild3833-6165-4333-b963-333136333033/008_1.jpg",
      "https://static.tildacdn.com/tild6566-3766-4139-b235-326330316539/010_1.jpg"
    ];

    var message_text = " \nФасады МДФ в пластике:";

    var input_data = "";

    switch (images_array[0]) {
      case 1:
        message_text = message_text + images_urls[0];
        break;
      case 2:
        message_text = message_text + images_urls[1];
        break;
      case 3:
        message_text = message_text + images_urls[2];
        break;
    }

    message_text = message_text + " \nФасады МДФ в плёнке:";

    switch (images_array[1]) {
      case 1:
        message_text = message_text + images_urls[3];
        break;
      case 2:
        message_text = message_text + images_urls[4];
        break;
      case 3:
        message_text = message_text + images_urls[5];
        break;
    }

    message_text = message_text + " \nФасады МДФ в матовой эмали:";

    switch (images_array[2]) {
      case 1:
        message_text = message_text + images_urls[6];
        break;
      case 2:
        message_text = message_text + images_urls[7];
        break;
      case 3:
        message_text = message_text + images_urls[8];
        break;
    }

    message_text = message_text + " \nФасады МДФ в глянцевой эмали:";

    switch (images_array[3]) {
      case 1:
        message_text = message_text + images_urls[9];
        break;
      case 2:
        message_text = message_text + images_urls[10];
        break;
      case 3:
        message_text = message_text + images_urls[11];
        break;
    }

    message_text = message_text + " \n ";

    console.log(message_text);

    input_data = formNm.serialize() + " \nСсылки на кухни:" + message_text;

    console.log(input_data);

    console.log(typeof(formNm.serialize()));


    $.ajax({
      type: "POST",
      url: './scripts/php/send-message-to-telegram.php',
      data: input_data,
      success: function(data) {
        // Вывод сообщения об успешной отправке
        message.html(data);
        formTitle.css("display", "block");
        formAgreementBlock.css("display", "flex");
        setTimeout(function() {
          formAgreementBlock.css("display", "none");
          formTitle.css("display", "none");
          message.html('');
          $('input').not(':input[type=submit], :input[type=hidden]').val('');
        }, 3000);
      },
      error: function(jqXHR, text, error) {
        // Вывод сообщения об ошибке отправки
        message.html(error);
        formTitle.css("display", "block");
        formAgreementBlock.css("display", "flex");
        setTimeout(function() {
          formAgreementBlock.css("display", "none");
          formTitle.css("display", "none");
          message.html('');
          $('input').not(':input[type=submit], :input[type=hidden]').val('');
        }, 3000);
      }
    });
    return false;
  });
  $(".fixed_callback_form").submit(function() {
    var formID = $(this).attr('id');
    var formNm = $('#' + formID);
    var message = $(formNm).find(".fixed_form_message");
    var formTitle = $(formNm).find(".form_title");
    var formAgreementBlock = $(formNm).find(".agreement_block");

    console.log(formNm.serialize());

    $.ajax({
      type: "POST",
      url: './scripts/php/send-message-to-telegram.php',
      data: formNm.serialize(),
      success: function(data) {
        // Вывод сообщения об успешной отправке
        message.html(data);
        formTitle.css("display", "block");
        formAgreementBlock.css("display", "flex");
        setTimeout(function() {
          formAgreementBlock.css("display", "none");
          formTitle.css("display", "none");
          message.html('');
          $('input').not(':input[type=submit], :input[type=hidden]').val('');
        }, 3000);
      },
      error: function(jqXHR, text, error) {
        // Вывод сообщения об ошибке отправки
        message.html(error);
        formTitle.css("display", "block");
        formAgreementBlock.css("display", "flex");
        setTimeout(function() {
          formAgreementBlock.css("display", "none");
          formTitle.css("display", "none");
          message.html('');
          $('input').not(':input[type=submit], :input[type=hidden]').val('');
        }, 3000);
      }
    });
    return false;
  });
});