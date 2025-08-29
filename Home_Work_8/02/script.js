function showMessage(message, isError = false) {
    $('#output')
        .css('color', isError ? 'red' : '#e0e0e0')
        .html(message)
        .removeClass('show')
        .addClass('show');
}


function displayLanguages() {

    const languages = navigator.languages || [navigator.language];
    const preferredLanguage = navigator.language || 'en-US'; // Значение по умолчанию


    if (!languages || languages.length === 0) {
        showMessage('Не удалось определить языки системы.', true);
        return;
    }


    const languageList = languages
        .map(lang => {
            if (lang === preferredLanguage) {
                return `<strong class="preferred">${lang}</strong>`;
            }
            return lang;
        })
        .join('\n');


    showMessage(`Установленные языки системы:\n${languageList}`);
}

$(document).ready(function() {
    displayLanguages();
});