$(document).ready(function() {
    let lastScrollTop = 0;

    $(window).scroll(function(event) {
        let st = $(this).scrollTop();
        if (st > lastScrollTop) {
            // Downscroll
            $('.navbar').addClass('hidden');
        } else {
            // Upscroll
            $('.navbar').removeClass('hidden');
        }
        lastScrollTop = st;
    });

    let posts = [
        {
            title: "Kenali Tingkatan Influencers berdasarkan Jumlah Followers",
            date: "5 September 2022",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzLkbchqMj5Rc3Q5L7K9mAqXGZdYl0punQkw&s"
        },
        {
            title: "Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi Influencer",
            date: "6 September 2022",
            image: "https://goodstats.id/img/articles/original/2022/09/26/indonesia-jadi-negara-dengan-pengikut-influencer-medsos-terbanyak-zNlK3QN446.jpg?p=articles-lg"
        },
        {
            title: "Kenali Tingkatan Influencers berdasarkan Jumlah Followers",
            date: "7 September 2022",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzLkbchqMj5Rc3Q5L7K9mAqXGZdYl0punQkw&s"
        },
        {
            title: "Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi Influencer",
            date: "8 September 2022",
            image: "https://goodstats.id/img/articles/original/2022/09/26/indonesia-jadi-negara-dengan-pengikut-influencer-medsos-terbanyak-zNlK3QN446.jpg?p=articles-lg"
        },
        {
            title: "Kenali Tingkatan Influencers berdasarkan Jumlah Followers",
            date: "9 September 2022",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzLkbchqMj5Rc3Q5L7K9mAqXGZdYl0punQkw&s"
        },
        {
            title: "Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi Influencer",
            date: "10 September 2022",
            image: "https://goodstats.id/img/articles/original/2022/09/26/indonesia-jadi-negara-dengan-pengikut-influencer-medsos-terbanyak-zNlK3QN446.jpg?p=articles-lg"
        },
        {
            title: "Kenali Tingkatan Influencers berdasarkan Jumlah Followers",
            date: "11 September 2022",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzLkbchqMj5Rc3Q5L7K9mAqXGZdYl0punQkw&s"
        },
        {
            title: "Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi Influencer",
            date: "12 September 2022",
            image: "https://goodstats.id/img/articles/original/2022/09/26/indonesia-jadi-negara-dengan-pengikut-influencer-medsos-terbanyak-zNlK3QN446.jpg?p=articles-lg"
        },
        {
            title: "Kenali Tingkatan Influencers berdasarkan Jumlah Followers",
            date: "13 September 2022",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzLkbchqMj5Rc3Q5L7K9mAqXGZdYl0punQkw&s"
        },
        {
            title: "Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi Influencer",
            date: "14 September 2022",
            image: "https://goodstats.id/img/articles/original/2022/09/26/indonesia-jadi-negara-dengan-pengikut-influencer-medsos-terbanyak-zNlK3QN446.jpg?p=articles-lg"
        },
        {
            title: "Kenali Tingkatan Influencers berdasarkan Jumlah Followers",
            date: "15 September 2022",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzLkbchqMj5Rc3Q5L7K9mAqXGZdYl0punQkw&s"
        },
        {
            title: "Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi Influencer",
            date: "16 September 2022",
            image: "https://goodstats.id/img/articles/original/2022/09/26/indonesia-jadi-negara-dengan-pengikut-influencer-medsos-terbanyak-zNlK3QN446.jpg?p=articles-lg"
        },
        {
            title: "Kenali Tingkatan Influencers berdasarkan Jumlah Followers",
            date: "17 September 2022",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzLkbchqMj5Rc3Q5L7K9mAqXGZdYl0punQkw&s"
        },
        {
            title: "Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi Influencer",
            date: "18 September 2022",
            image: "https://goodstats.id/img/articles/original/2022/09/26/indonesia-jadi-negara-dengan-pengikut-influencer-medsos-terbanyak-zNlK3QN446.jpg?p=articles-lg"
        },
        {
            title: "Kenali Tingkatan Influencers berdasarkan Jumlah Followers",
            date: "19 September 2022",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzLkbchqMj5Rc3Q5L7K9mAqXGZdYl0punQkw&s"
        },
        {
            title: "Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi Influencer",
            date: "20 September 2022",
            image: "https://goodstats.id/img/articles/original/2022/09/26/indonesia-jadi-negara-dengan-pengikut-influencer-medsos-terbanyak-zNlK3QN446.jpg?p=articles-lg"
        },
        {
            title: "Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi Influencer",
            date: "21 September 2022",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzLkbchqMj5Rc3Q5L7K9mAqXGZdYl0punQkw&s"
        }
    ];

    let state = {
        sort: 'newest',
        showPerPage: 10,
        currentPage: 1,
        totalPosts: 100,
        posts: [],
    };

    function renderPosts() {
        let sortedPosts = [...posts];
        if (state.sort === 'newest') {
            sortedPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
        } else {
            sortedPosts.sort((a, b) => new Date(a.date) - new Date(b.date));
        }

        let start = (state.currentPage - 1) * state.showPerPage;
        let end = Math.min(start + state.showPerPage - 1, state.totalPosts);
        let visiblePosts = sortedPosts.slice(start, end);

        $('#postList').empty();
        visiblePosts.forEach(post => {
            $('#postList').append(`
                <div class="col-md-4">
                    <div class="card mb-4">
                        <img src="${post.image}" class="card-img-top" alt="Image" loading="lazy">
                        <div class="card-body">
                            <h5 class="card-title">${post.title}</h5>
                            <p class="card-text">${post.date}</p>
                        </div>
                    </div>
                </div>
            `);
            $('#showingInfo').text(`Showing ${start}-${end} of ${state.totalPosts}`);
        });
    }

    function renderPagination() {
        let totalPages = Math.ceil(posts.length / state.showPerPage);
        $('#pagination').empty();
        for (let i = 1; i <= totalPages; i++) {
            $('#pagination').append(`
                <li class="page-item ${i === state.currentPage ? 'active' : ''}">
                    <a class="page-link" href="#">${i}</a>
                </li>
            `);
        }
    }

    $('#sort, #showPerPage').change(function() {
        state.sort = $('#sort').val();
        state.showPerPage = parseInt($('#showPerPage').val());
        state.currentPage = 1;
        renderPosts();
        renderPagination();
    });

    $(document).on('click', '.page-link', function(e) {
        e.preventDefault();
        state.currentPage = parseInt($(this).text());
        renderPosts();
        renderPagination();
    });

    renderPosts();
    renderPagination();
});