
function showMessage(message, isError = false) {
    console.log('showMessage:', message, 'isError:', isError);
    $('#output')
        .css('color', isError ? 'red' : '#e0e0e0')
        .text(message)
        .removeClass('show')
        .addClass('show');
}


function showHistoryLength() {
    try {
        const historyLength = window.history.length;
        console.log('History length:', historyLength);
        if (typeof historyLength === 'number' && historyLength >= 0) {
            showMessage(`Количество записей в истории браузера: ${historyLength}`);
        } else {
            showMessage('Не удалось получить количество записей в истории.', true);
        }
    } catch (e) {
        console.error('Error in showHistoryLength:', e);
        showMessage('Ошибка при получении истории: ' + e.message, true);
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