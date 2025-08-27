// Текст для анализа
const text = `Вот дом,

Который построил Джек.

А это пшеница,

Которая в тёмном чулане хранится

В доме,

Который построил Джек.

А это весёлая птица-синица,

Которая часто ворует пшеницу,

Которая в тёмном чулане хранится

В доме,

Который построил Джек.

Вот кот,

Который пугает и ловит синицу,

Которая часто ворует пшеницу,

Которая в тёмном чулане хранится

В доме,

Который построил Джек.

Вот пёс без хвоста,

Который за шиворот треплет кота,

Который пугает и ловит синицу,

Которая часто ворует пшеницу,

Которая в тёмном чулане хранится

В доме,

Который построил Джек.

А это корова безрогая,

Лягнувшая старого пса без хвоста,

Который за шиворот треплет кота,

Который пугает и ловит синицу,

Которая часто ворует пшеницу,

Которая в тёмном чулане хранится

В доме,

Который построил Джек.

А это старушка, седая и строгая,

Которая доит корову безрогую,

Лягнувшую старого пса без хвоста,

Который за шиворот треплет кота,

Который пугает и ловит синицу,

Которая часто ворует пшеницу,

Которая в тёмном чулане хранится

В доме,

Который построил Джек.

А это ленивый и толстый пастух,

Который бранится с коровницей строгою,

Которая доит корову безрогую,

Лягнувшую старого пса без хвоста,

Который за шиворот треплет кота,

Который пугает и ловит синицу,

Которая часто ворует пшеницу,

Которая в тёмном чулане хранится

В доме,

Который построил Джек.

Вот два петуха,

Которые будят того пастуха,

Который бранится с коровницей строгою,

Которая доит корову безрогую,

Лягнувшую старого пса без хвоста,

Который за шиворот треплет кота,

Который пугает и ловит синицу,

Которая часто ворует пшеницу,

Которая в тёмном чулане хранится

В доме,

Который построил Джек`;


let wordFrequency = new Map();
let sortedWords = [];
let currentSort = { column: 'count', direction: 'desc' };
let wordCharts = [];


document.addEventListener('DOMContentLoaded', () => {
    // Инициализация элементов управления
    document.getElementById('analyzeButton').addEventListener('click', analyzeText);
    document.getElementById('resetButton').addEventListener('click', resetAnalysis);


    document.querySelectorAll('.sortable').forEach(header => {
        header.addEventListener('click', () => {
            sortTable(header.dataset.sort);
        });
    });


    document.getElementById('scrollLeft').addEventListener('click', () => {
        document.querySelector('.chart-wrapper').scrollBy({ left: -300, behavior: 'smooth' });
    });

    document.getElementById('scrollRight').addEventListener('click', () => {
        document.querySelector('.chart-wrapper').scrollBy({ left: 300, behavior: 'smooth' });
    });


    document.getElementById('text').textContent = text;


    initScrollThumb();
});


function analyzeText() {
    // Создаём массив слов из текста
    const words = text
        .replace(/[,.\n]/g, ' ')
        .toLowerCase()
        .split(/\s+/)
        .filter(word => word.length > 0);


    document.getElementById('wordCount').textContent = words.length;

    // Подсчитываем частоту слов
    wordFrequency = new Map();
    words.forEach(word => {
        wordFrequency.set(word, (wordFrequency.get(word) || 0) + 1);
    });


    document.getElementById('uniqueWords').textContent = wordFrequency.size;

    // Сортируем слова
    sortWords();


    const mostFrequent = sortedWords.length > 0 ? sortedWords[0][0] : '-';
    document.getElementById('mostFrequent').textContent = mostFrequent;


    renderTable();


    createCharts();
}


function sortWords() {
    sortedWords = Array.from(wordFrequency.entries());

    if (currentSort.column === 'word') {
        sortedWords.sort((a, b) => {
            return currentSort.direction === 'asc'
                ? a[0].localeCompare(b[0])
                : b[0].localeCompare(a[0]);
        });
    } else {
        sortedWords.sort((a, b) => {
            return currentSort.direction === 'desc'
                ? b[1] - a[1]
                : a[1] - b[1];
        });
    }
}


function renderTable() {
    const tableBody = document.getElementById('frequencyTable');
    tableBody.innerHTML = '';


    document.querySelectorAll('.sortable').forEach(header => {
        header.classList.remove('sorted-asc', 'sorted-desc');
        if (header.dataset.sort === currentSort.column) {
            header.classList.add(`sorted-${currentSort.direction}`);
        }
    });


    const totalWords = Array.from(wordFrequency.values()).reduce((sum, count) => sum + count, 0);


    sortedWords.forEach(([word, count]) => {
        const percentage = ((count / totalWords) * 100).toFixed(2);
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${word}</td>
            <td>${count}</td>
            <td>${percentage}%</td>
        `;
        tableBody.appendChild(row);
    });
}


function sortTable(column) {
    if (currentSort.column === column) {

        currentSort.direction = currentSort.direction === 'asc' ? 'desc' : 'asc';
    } else {

        currentSort.column = column;
        currentSort.direction = column === 'count' ? 'desc' : 'asc';
    }


    sortWords();
    renderTable();
}


function createCharts() {
    const chartWrapper = document.getElementById('chartWrapper');
    chartWrapper.innerHTML = '';
    wordCharts = [];


    sortedWords.forEach(([word, count], index) => {
        const chartItem = document.createElement('div');
        chartItem.className = 'chart-item';

        const canvas = document.createElement('canvas');
        chartItem.appendChild(canvas);
        chartWrapper.appendChild(chartItem);


        const ctx = canvas.getContext('2d');
        const chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: [word],
                datasets: [{
                    label: `Частота: ${count}`,
                    data: [count],
                    backgroundColor: getColorForIndex(index),
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                indexAxis: 'y',
                scales: {
                    x: {
                        beginAtZero: true,
                        ticks: {
                            color: '#e0e0e0',
                            font: {
                                size: 12
                            }
                        },
                        grid: {
                            color: '#555'
                        }
                    },
                    y: {
                        ticks: {
                            color: '#e0e0e0',
                            font: {
                                size: 14,
                                weight: 'bold'
                            }
                        },
                        grid: {
                            color: '#555'
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    title: {
                        display: true,
                        text: word,
                        color: '#e0e0e0',
                        font: {
                            size: 16,
                            weight: 'bold'
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `Частота: ${context.raw}`;
                            }
                        }
                    }
                }
            }
        });

        wordCharts.push(chart);
    });


    updateScrollThumb();
}


function getColorForIndex(index) {
    const colors = [
        'rgba(74, 144, 226, 0.7)',
        'rgba(166, 227, 161, 0.7)',
        'rgba(249, 226, 175, 0.7)',
        'rgba(137, 180, 250, 0.7)',
        'rgba(180, 190, 254, 0.7)',
        'rgba(203, 166, 247, 0.7)',
        'rgba(243, 139, 168, 0.7)',
        'rgba(250, 179, 135, 0.7)',
        'rgba(245, 194, 231, 0.7)',
        'rgba(148, 226, 213, 0.7)'
    ];
    return colors[index % colors.length];
}


function initScrollThumb() {
    const scrollTrack = document.querySelector('.scroll-track');
    const scrollThumb = document.getElementById('scrollThumb');

    scrollTrack.addEventListener('click', (e) => {
        const trackRect = scrollTrack.getBoundingClientRect();
        const clickPosition = e.clientX - trackRect.left;
        const thumbWidth = scrollThumb.offsetWidth;
        const scrollPosition = (clickPosition - thumbWidth / 2) / (trackRect.width - thumbWidth);

        const chartWrapper = document.querySelector('.chart-wrapper');
        const maxScroll = chartWrapper.scrollWidth - chartWrapper.clientWidth;
        chartWrapper.scrollLeft = scrollPosition * maxScroll;
    });


    document.querySelector('.chart-wrapper').addEventListener('scroll', updateScrollThumb);
}


function updateScrollThumb() {
    const chartWrapper = document.querySelector('.chart-wrapper');
    const scrollThumb = document.getElementById('scrollThumb');
    const scrollTrack = document.querySelector('.scroll-track');

    if (chartWrapper.scrollWidth > chartWrapper.clientWidth) {
        const scrollPercentage = chartWrapper.clientWidth / chartWrapper.scrollWidth;
        const thumbWidth = Math.max(scrollTrack.clientWidth * scrollPercentage, 30);

        scrollThumb.style.width = `${thumbWidth}px`;

        const scrollPosition = chartWrapper.scrollLeft / (chartWrapper.scrollWidth - chartWrapper.clientWidth);
        const thumbPosition = scrollPosition * (scrollTrack.clientWidth - thumbWidth);

        scrollThumb.style.left = `${thumbPosition}px`;
    } else {
        scrollThumb.style.width = '100%';
        scrollThumb.style.left = '0';
    }
}


function resetAnalysis() {
    document.getElementById('wordCount').textContent = '0';
    document.getElementById('uniqueWords').textContent = '0';
    document.getElementById('mostFrequent').textContent = '-';
    document.getElementById('frequencyTable').innerHTML = '';
    document.getElementById('chartWrapper').innerHTML = '';


    wordCharts.forEach(chart => chart.destroy());
    wordCharts = [];


    currentSort = { column: 'count', direction: 'desc' };
    document.querySelectorAll('.sortable').forEach(header => {
        header.classList.remove('sorted-asc', 'sorted-desc');
        if (header.dataset.sort === 'count') {
            header.classList.add('sorted-desc');
        }
    });


    const scrollThumb = document.getElementById('scrollThumb');
    scrollThumb.style.width = '100%';
    scrollThumb.style.left = '0';
}