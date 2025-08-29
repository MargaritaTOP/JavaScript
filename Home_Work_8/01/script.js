
let newWindow = null;


function showMessage(message, isError = false) {
    $('#output')
        .css('color', isError ? 'red' : '#e0e0e0')
        .text(message)
        .removeClass('show')
        .addClass('show');
}


function openWindow() {

    if (newWindow && !newWindow.closed) {
        showMessage('Окно уже открыто!', true);
        return;
    }


    newWindow = window.open(
        'https://itstep.org',
        '_blank',
        'width=640,height=480'
    );


    if (newWindow) {
        showMessage('Окно успешно открыто с сайтом IT Step.');
    } else {
        showMessage('Не удалось открыть окно. Проверьте настройки браузера.', true);
    }
}


function closeWindow() {
    if (newWindow && !newWindow.closed) {
        newWindow.close();
        showMessage('Окно закрыто.');
        newWindow = null;
    } else {
        showMessage('Нет открытого окна для закрытия.', true);
    }
}


$(document).ready(function() {
    $(document).on('keypress', function(e) {
        if (e.which === 13) {
            const focused = $(':focus');
            if (focused.is('button')) {
                focused.click();
            } else {
                $('button:first').click();
            }
        }
    });
});