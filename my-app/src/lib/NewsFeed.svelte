<script lang="ts">
    import { onMount } from 'svelte';
    import NewsItem from './NewsItem.svelte';
    import type { NewsPost } from './types';
    import { mockNews } from './data';

    const { data = { initialNews: [] } } = $props<{ data: { initialNews?: NewsPost[] } }>();

    let page = $state(1);
    let currentFilter = $state<'all' | 'technology' | 'science' | 'health' | 'business'>('all');
    let isLoading = $state(false);
    let allNews = $state<NewsPost[]>(data.initialNews || []);
    let filteredNews = $state<NewsPost[]>([]);
    let searchText = $state('');
    let hasMore = $state(true);

    async function loadNews() {
        if (isLoading) return;
        isLoading = true;

        try {
            const start = (page - 1) * 6;
            const end = start + 6;
            const newNews = mockNews.slice(start, end);

            if (newNews.length > 0) {
                allNews = [...allNews, ...newNews];
                hasMore = end < mockNews.length;
            } else {
                hasMore = false;
            }
        } catch (error) {
            alert('Произошла ошибка при загрузке новостей');
        } finally {
            isLoading = false;
        }
        filterNews();
    }

    function filterNews() {
        filteredNews = allNews.filter((post: NewsPost) => {
            const matchesSearch = post.title.toLowerCase().includes(searchText.toLowerCase()) ||
                                 post.body.toLowerCase().includes(searchText.toLowerCase());
            const matchesFilter = currentFilter === 'all' || post.category === currentFilter;
            return matchesSearch && matchesFilter;
        });
    }

    $effect(() => {
        filterNews();
    });

    function handleLoadMore() {
        if (!isLoading) {
            page += 1;
            loadNews();
        }
    }

    function setFilter(filter: 'all' | 'technology' | 'science' | 'health' | 'business') {
        currentFilter = filter;
        page = 1;
        allNews = [];
        loadNews();
    }

    onMount(() => {
        loadNews();
    });
</script>

<div class="container">
    <header>
        <h1>Современная лента новостей</h1>
        <p class="subtitle">Будьте в курсе последних событий</p>
    </header>

    <div class="controls">
        <div class="search-box">
            <i class="fas fa-search"></i>
            <input type="text" placeholder="Поиск новостей..." bind:value={searchText} />
        </div>

        <div class="filter-buttons">
            <button class:active={currentFilter === 'all'} onclick={() => setFilter('all')}>Все</button>
            <button class:active={currentFilter === 'technology'} onclick={() => setFilter('technology')}>Технологии</button>
            <button class:active={currentFilter === 'science'} onclick={() => setFilter('science')}>Наука</button>
            <button class:active={currentFilter === 'health'} onclick={() => setFilter('health')}>Здоровье</button>
            <button class:active={currentFilter === 'business'} onclick={() => setFilter('business')}>Бизнес</button>
        </div>
    </div>

    <div class="news-grid">
        {#each filteredNews as post, index (post.id)}
            <NewsItem {post} {index} />
        {/each}
    </div>

    <div class="loading" class:visible={isLoading}>
        <div class="loading-spinner"></div>
        <p>Загрузка новостей...</p>
    </div>

    <div class="no-results" class:visible={filteredNews.length === 0 && !isLoading}>
        <i class="fas fa-search fa-3x"></i>
        <h3>Новости не найдены</h3>
        <p>Попробуйте изменить параметры поиска или фильтрации</p>
    </div>

    <div class="load-more-container">
        <button id="loadMore" disabled={!hasMore || isLoading} onclick={handleLoadMore}>
            <i class="fas fa-plus"></i> Загрузить еще
        </button>
    </div>

    <footer>
        <p>© 2025 Современная лента новостей. Все права защищены.</p>
    </footer>
</div>

<style>
    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
        background: #1e1e1e;
        color: #e0e0e0;
    }

    header {
        text-align: center;
        margin-bottom: 40px;
        padding: 20px;
        background: rgba(45, 45, 45, 0.9);
        border-radius: 15px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        animation: fadeIn 1s ease;
    }

    h1 {
        color: #e0e0e0;
        margin-bottom: 10px;
        font-size: 2.5rem;
    }

    .subtitle {
        color: #bdc3c7;
        font-size: 1.2rem;
    }

    .controls {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 30px;
        flex-wrap: wrap;
        gap: 15px;
        background: rgba(45, 45, 45, 0.9);
        padding: 20px;
        border-radius: 15px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        animation: slideDown 0.7s ease;
    }

    .search-box {
        position: relative;
        flex: 1;
        max-width: 500px;
    }

    .search-box input {
        width: 100%;
        padding: 12px 20px 12px 45px;
        border: none;
        border-radius: 30px;
        background: #333;
        font-size: 1rem;
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
        transition: all 0.3s ease;
        color: #e0e0e0;
    }

    .search-box input:focus {
        outline: none;
        box-shadow: 0 3px 15px rgba(76, 119, 195, 0.2);
        background: #2d2d2d;
    }

    .search-box i {
        position: absolute;
        left: 15px;
        top: 50%;
        transform: translateY(-50%);
        color: #bdc3c7;
    }

    .filter-buttons {
        display: flex;
        gap: 10px;
    }

    .filter-buttons button {
        padding: 10px 20px;
        border: none;
        border-radius: 30px;
        background: #444;
        color: #e0e0e0;
        cursor: pointer;
        transition: all 0.3s ease;
        font-weight: 500;
    }

    .filter-buttons button:hover {
        background: #2874a6;
        color: white;
        transform: translateY(-2px);
    }

    .filter-buttons button.active {
        background: #1a5276;
        color: white;
    }

    .news-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        gap: 25px;
        margin-bottom: 40px;
    }

    .loading {
        display: none;
        text-align: center;
        margin: 40px 0;
        color: #e0e0e0;
    }

    .loading.visible {
        display: block;
    }

    .loading-spinner {
        width: 50px;
        height: 50px;
        border: 5px solid #444;
        border-top: 5px solid #3498db;
        border-radius: 50%;
        animation: spin 1s linear infinite;
        margin: 0 auto 20px;
    }

    .no-results {
        display: none;
        text-align: center;
        padding: 40px;
        background: #2d2d2d;
        border-radius: 15px;
        grid-column: 1 / -1;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        color: #e0e0e0;
    }

    .no-results.visible {
        display: block;
    }

    .no-results i {
        margin-bottom: 20px;
        color: #7f8c8d;
    }

    .load-more-container {
        text-align: center;
        margin: 30px 0;
    }

    #loadMore {
        padding: 15px 40px;
        background: linear-gradient(135deg, #2874a6 0%, #1a5276 100%);
        color: white;
        border: none;
        border-radius: 30px;
        font-size: 1.1rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        display: inline-flex;
        align-items: center;
        gap: 10px;
    }

    #loadMore:hover:not(:disabled) {
        transform: translateY(-3px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
    }

    #loadMore:disabled {
        background: #7f8c8d;
        cursor: not-allowed;
        transform: none;
        box-shadow: none;
    }

    footer {
        text-align: center;
        margin-top: 50px;
        padding: 20px;
        color: #bdc3c7;
        font-size: 0.9rem;
    }

    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }

    @media (max-width: 768px) {
        .news-grid {
            grid-template-columns: 1fr;
        }

        .controls {
            flex-direction: column;
            align-items: stretch;
        }

        .search-box {
            max-width: 100%;
        }

        .filter-buttons {
            flex-wrap: wrap;
            justify-content: center;
        }
    }
</style>