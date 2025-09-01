
function showMessage(message, isError = false) {
    console.log('showMessage:', message, 'isError:', isError);
    $('#output')
        .css('color', isError ? 'red' : '#e0e0e0')
        .val(message)
        .removeClass('show')
        .addClass('show');
    console.log('=== Данные о книге ===');
    console.log(message);
    console.log('=======================');
}


function handleFormSubmit() {
    try {

        const bookData = {
            general: {
                title: $('#title').val().trim(),
                author: $('#author').val().trim(),
                genre: $('#genre').val(),
                series: $('#series').val().trim() || 'Не указана'
            },
            personal: {
                color: $('input[name="color"]:checked').val(),
                cover: $('input[name="cover"]:checked').map(function() { return $(this).val(); }).get(),
                format: $('#format').val(),
                pages: parseInt($('#pages').val())
            },
            special: {
                price: parseFloat($('#price').val()),
                year: parseInt($('#year').val()),
                weight: parseInt($('#weight').val()),
                condition: $('#condition').val()
            }
        };


        if (!bookData.general.title) {
            showMessage('Пожалуйста, введите название книги.', true);
            return;
        }
        if (!bookData.general.author) {
            showMessage('Пожалуйста, введите автора.', true);
            return;
        }
        if (!bookData.general.genre) {
            showMessage('Пожалуйста, выберите жанр.', true);
            return;
        }
        if (!bookData.personal.color) {
            showMessage('Пожалуйста, выберите цвет.', true);
            return;
        }
        if (!bookData.personal.format) {
            showMessage('Пожалуйста, выберите формат.', true);
            return;
        }
        if (!bookData.personal.pages || bookData.personal.pages < 1) {
            showMessage('Пожалуйста, введите корректное количество страниц.', true);
            return;
        }
        if (!bookData.special.price || bookData.special.price < 0) {
            showMessage('Пожалуйста, введите корректную цену.', true);
            return;
        }
        if (!bookData.special.year || bookData.special.year < 1800 || bookData.special.year > 2025) {
            showMessage('Пожалуйста, введите корректный год (1800–2025).', true);
            return;
        }
        if (!bookData.special.weight || bookData.special.weight < 0) {
            showMessage('Пожалуйста, введите корректный вес.', true);
            return;
        }
        if (!bookData.special.condition) {
            showMessage('Пожалуйста, выберите состояние.', true);
            return;
        }


        const jsonData = JSON.stringify(bookData, null, 2);


        showMessage(jsonData);


        const blob = new Blob([jsonData], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'book_data.json';
        a.click();
        URL.revokeObjectURL(url);
    } catch (e) {
        console.error('Error in handleFormSubmit:', e);
        showMessage('Ошибка при обработке формы: ' + e.message, true);
    }
}


function handleRestore() {
    try {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.json';
        input.onchange = function(event) {
            const file = event.target.files[0];
            if (!file) {
                showMessage('Файл не выбран.', true);
                return;
            }
            const reader = new FileReader();
            reader.onload = function(e) {
                try {
                    const data = JSON.parse(e.target.result);
                    // Заполняем форму
                    $('#title').val(data.general.title || '');
                    $('#author').val(data.general.author || '');
                    $('#genre').val(data.general.genre || '');
                    $('#series').val(data.general.series || '');
                    $('input[name="color"][value="' + (data.personal.color || '') + '"]').prop('checked', true);
                    $('input[name="cover"]').prop('checked', false);
                    (data.personal.cover || []).forEach(cover => {
                        $('input[name="cover"][value="' + cover + '"]').prop('checked', true);
                    });
                    $('#format').val(data.personal.format || '');
                    $('#pages').val(data.personal.pages || '');
                    $('#price').val(data.special.price || '');
                    $('#year').val(data.special.year || '');
                    $('#weight').val(data.special.weight || '');
                    $('#condition').val(data.special.condition || '');
                    showMessage(JSON.stringify(data, null, 2));
                } catch (err) {
                    showMessage('Ошибка при чтении файла: ' + err.message, true);
                }
            };
            reader.readAsText(file);
        };
        input.click();
    } catch (e) {
        console.error('Error in handleRestore:', e);
        showMessage('Ошибка при восстановлении данных: ' + e.message, true);
    }
}


$(document).ready(function() {

    $('.tab-button').on('click', function() {
        const tabId = $(this).data('tab');
        if (tabId === 'about') {
            window.location.href = 'https://ru.wikipedia.org/wiki/Книга';
            return;
        }
        $('.tab-button').removeClass('active');
        $(this).addClass('active');
        $('.tab-content').removeClass('active');
        $('#' + tabId).addClass('active');
    });


    $('#bookForm').on('submit', function(e) {
        e.preventDefault();
        handleFormSubmit();
    });


    $('#restore').on('click', handleRestore);


    $(document).on('keypress', function(e) {
        if (e.which === 13) {
            const focused = $(':focus');
            if (focused.is('button')) {
                focused.click();
            } else if (focused.is('input') || focused.is('select')) {
                $('#bookForm').submit();
            } else {
                $('button[type="submit"]').click();
            }
        }
    });
});