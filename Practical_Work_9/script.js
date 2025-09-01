
function showMessage(message, isError = false) {
    console.log('showMessage:', message, 'isError:', isError);
    $('#output')
        .css('color', isError ? 'red' : '#e0e0e0')
        .val(message)
        .removeClass('show')
        .addClass('show');
    console.log('=== Данные о программировании ===');
    console.log(message);
    console.log('=======================');
}


function handleFormSubmit() {
    try {

        const name = $('#name').val().trim();
        if (!name) {
            showMessage('Пожалуйста, введите имя.', true);
            return;
        }


        const selectedLanguage = $('input[name="language"]:checked').val();
        if (!selectedLanguage) {
            showMessage('Пожалуйста, выберите язык программирования.', true);
            return;
        }

        const resultText = `Имя: ${name}\nЯзык программирования: ${selectedLanguage}`;


        showMessage(resultText);
    } catch (e) {
        console.error('Error in handleFormSubmit:', e);
        showMessage('Ошибка при обработке формы: ' + e.message, true);
    }
}


$(document).ready(function() {

    $('#langForm').on('submit', function(e) {
        e.preventDefault();
        handleFormSubmit();
    });


    $(document).on('keypress', function(e) {
        if (e.which === 13) {
            const focused = $(':focus');
            if (focused.is('button')) {
                focused.click();
            } else if (focused.is('input')) {
                $('#langForm').submit();
            } else {
                $('button').click();
            }
        }
    });
});