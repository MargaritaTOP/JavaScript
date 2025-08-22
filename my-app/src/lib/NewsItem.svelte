<script lang="ts">
    import type { NewsPost } from './types';

    const { post, index } = $props<{ post: NewsPost; index: number }>();

    let likes = $state(post.likes);
    let isLiked = $state(false);

    // Инициализация isLiked на клиенте
    $effect(() => {
        if (typeof window !== 'undefined') {
            isLiked = localStorage.getItem(`liked_${post.id}`) === 'true';
            localStorage.setItem(`liked_${post.id}`, isLiked.toString());
        }
    });

    function toggleLike() {
        isLiked = !isLiked;
        likes = isLiked ? likes + 1 : likes - 1;
    }

    function share() {
        alert('Поделиться новостью');
    }
</script>

<div class="news-item" data-category={post.category} style="--delay: {index % 10};">
    <div class="news-image">
        <img src={post.image} alt={post.title} />
        <span class="news-category">{post.category}</span>
    </div>
    <div class="news-content">
        <div class="news-date">
            <i class="far fa-calendar-alt"></i> {post.date}
        </div>
        <h3 class="news-title">{post.title}</h3>
        <p class="news-excerpt">{post.body}</p>
        <div class="news-footer">
            <div class="news-author">
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80" class="author-avatar" alt="Автор" />
                <span>{post.author}</span>
            </div>
            <div class="news-actions">
                <button class="like-btn" class:liked={isLiked} onclick={toggleLike}>
                    <i class={isLiked ? 'fas fa-heart' : 'far fa-heart'}></i> {likes}
                </button>
                <button class="share-btn" onclick={share}>
                    <i class="far fa-share-square"></i> {post.shares}
                </button>
            </div>
        </div>
    </div>
</div>

<style>
    .news-item {
        background: #2d2d2d;
        border-radius: 15px;
        overflow: hidden;
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
        transition: all 0.4s ease;
        opacity: 0;
        transform: translateY(20px);
        animation: fadeInUp 0.6s ease forwards;
        animation-delay: calc(var(--delay) * 0.1s);
    }

    .news-item:hover {
        transform: translateY(-10px);
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
    }

    .news-image {
        height: 200px;
        overflow: hidden;
        position: relative;
    }

    .news-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s ease;
    }

    .news-item:hover .news-image img {
        transform: scale(1.05);
    }

    .news-category {
        position: absolute;
        top: 15px;
        right: 15px;
        background: #c0392b;
        color: white;
        padding: 5px 12px;
        border-radius: 20px;
        font-size: 0.8rem;
        font-weight: 600;
    }

    .news-content {
        padding: 25px;
    }

    .news-date {
        color: #bdc3c7;
        font-size: 0.85rem;
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        gap: 5px;
    }

    .news-title {
        font-size: 1.3rem;
        margin-bottom: 15px;
        color: #e0e0e0;
        line-height: 1.4;
    }

    .news-excerpt {
        color: #bdc3c7;
        margin-bottom: 20px;
        line-height: 1.6;
    }

    .news-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-top: 1px solid #333;
        padding-top: 15px;
    }

    .news-author {
        display: flex;
        align-items: center;
        gap: 10px;
        color: #bdc3c7;
        font-size: 0.9rem;
    }

    .author-avatar {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        object-fit: cover;
    }

    .news-actions {
        display: flex;
        gap: 15px;
    }

    .news-actions button {
        background: none;
        border: none;
        color: #bdc3c7;
        cursor: pointer;
        transition: color 0.3s ease;
        font-size: 0.9rem;
        display: flex;
        align-items: center;
        gap: 5px;
    }

    .news-actions button:hover {
        color: #2874a6;
    }

    .like-btn.liked {
        color: #c0392b;
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
</style>