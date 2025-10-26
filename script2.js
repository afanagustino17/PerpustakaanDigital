// Background Animation
function createParticles() {
    const bgAnimation = document.getElementById('bg-animation');
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('bg-particle');
        
        // Random position
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        
        // Random size
        const size = Math.random() * 3 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random animation delay
        const delay = Math.random() * 15;
        particle.style.animationDelay = `${delay}s`;
        
        bgAnimation.appendChild(particle);
    }
}

// Multiple Typing Text Animation
function initTypingAnimation() {
    const typingElement = document.getElementById('typing-text');
    const texts = [
        "Selamat Datang di Perpustakaan Digital",
        "SMK Negeri Rengel", 
        "Akses Buku Digital Terbaru",
        "Belajar Lebih Menyenangkan"
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    let deletingSpeed = 50;
    let pauseTime = 1500;
    
    function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            // Deleting text
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = deletingSpeed;
        } else {
            // Typing text
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }
        
        // Check if we've finished typing a text
        if (!isDeleting && charIndex === currentText.length) {
            // Pause at the end
            isDeleting = true;
            typingSpeed = pauseTime;
        } else if (isDeleting && charIndex === 0) {
            // Move to next text
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typingSpeed = 500;
        }
        
        setTimeout(type, typingSpeed);
    }
    
    // Start the typing animation
    setTimeout(type, 1000);
}

// Data buku
const books = [
    {
        id: 1,
        title: "Blockchain Revolution",
        author: "Don and Alex Tapscott",
        category: "Teknologi",
        class: "11 & 12",
        description: "Buku yang menjelaskan bagaimana teknologi blockchain akan sangat penting di tahun-tahun yang akan mendatang",
        pages: 147,
        year: 2016,
        cover: "image/block.png",
        readLink: "https://cdn.bookey.app/files/pdf/book/en/blockchain-revolution-by-don-tapscott.pdf",
    },
    {
        id: 2,
        title: "The Psychology of Money",
        author: "Morgan Housel",
        category: "Pengembangan Diri",
        class: "10, 11, 12",
        description: "Buku yang menjelaskan tentang psikologi dalam pengelolaan uang dan investasi.",
        pages: 256,
        year: 2020,
        cover: "image/cover.png",
        readLink: "https://en.z-library.sk/book/29358009/64db39/the-psychology-of-money.html?dsource=mostpopular",
        format: "PDF"
    },
    {
        id: 3,
        title: "Akutansi Keuangan Dasar",
        author: "Sri Rusiyati, SE, MM",
        category: "Matematika",
        class: " 10, 11",
        description: "membantu mahasiswa dalam mempelajari, memahami serta dapat menyelesaikan masalah yang berhubungan Akuntansi Keuangan Dasar berbasis SAK ETAP.",
        pages: 167,
        year: 2016,
        cover: "image/akutansi.png",
        readLink: "https://repository.bsi.ac.id/repo/files/353319/download/Buku-Ajar-0/?pAkuntansi-Keuangan-Dasar.pdf",
        format: "PDF"
    },
    {
        id: 4,
        title: "Informatika ",
        author: "Bima Laksana Putra",
        category: "Teknologi",
        class: "10",
        description: "Sebagai dokumen hidup, buku ini tentu dapat diperbaiki dan disesuaikan dengan kebutuhan dan perkembangan keilmuan dan teknologi.",
        pages: 256,
        year: 2023,
        cover: "image/infor.png",
        readLink: "https://static.buku.kemdikbud.go.id/content/pdf/bukuteks/kurikulum21/Smk-Informatika-BG-KLS-X.pdf",
        format: "PDF"
    },
    {
        id: 5,
        title: "Matematika",
        author: "Mariana Magdalena Rdjawane",
        category: "Matematika",
        class: "11",
        description: "Sebagian besar pembelajaran matematika dalam buku ini diupayakan menarik perhatian dan minat siswa sehingga tidak merasa sedang belajar matematika.",
        pages: 152,
        year: 2021,
        cover: "image/wkwk.png",
        readLink: "https://buku.kemendikdasmen.go.id/katalog/matematika-untuk-smasmk-kelas-xi",
        format: "PDF"
    },
    {
        id: 6,
        title: "Atomic Habits",
        author: "James Clear",
        category: "Pengembangan Diri",
        class: "10, 11, 12",
        description: "saya membagikan rencana selangkah demi selangkah untuk membangun kebiasaan yang lebih baik-bukan untuk beberapa hari atau minggu, tapi seumur hidup.",
        pages: 356,
        year: 2018,
        cover: "image/wk.jpg",
        readLink: "file:///C:/Users/N3N0C/Downloads/Atomic%20Habits%20-Bahasa%20Indonesia-%20-%20eBookWave%20(1).pdf",
        format: "PDF"
    },
    {
        id: 7,
        title: "PPKN",
        author: "Yusnawan Lubis dan Mohamad Sodeli",
        category: "Sejarah",
        class: "12",
        description: "Melalui pembelajaran PPKn, siswa dipersiapkan untuk dapat berperan sebagai warga negara yang efektif dan bertanggung jawab.",
        pages: 152,
        year: 2018,
        cover: "image/PPKN (1).jpg",
        readLink: "https://static.buku.kemdikbud.go.id/content/pdf/bukuteks/k13/bukusiswa/Kelas%20XII%20PPKN%20BS%20press.pdf",
        format: "PDF"
    },
    {
        id: 8,
        title: "Seni Budaya",
        author: "Zackaria Soetedja, Dewi Suryati",
        category: "Seni",
        class: "10",
        description: " Semua materi di atas ditulis dan disusun secara sederhana namun sistematis sesuai dengan tingkat kebutuhan dan kompetensi peserta didik pada jenjang SMA kelas X.",
        pages: 202,
        year: 2017,
        cover: "image/1.png",
        readLink: "https://static.buku.kemdikbud.go.id/content/pdf/bukuteks/k13/bukusiswa/Kelas%20X%20Seni%20Budaya%20BS%20Sem%201%20press.pdf",
        format: "PDF"
    },
    {
        id: 9,
        title: "Pendidikan Agama Islam",
        author: "Nelty Khairiyah , Endi Suhendi Zen",
        category: "Agama",
        class: "10",
        description: "Panduan mengembangkan pola pikir positif dan resilience untuk remaja. Buku ini memberikan teknik praktis untuk mengelola emosi, membangun kepercayaan diri, dan mengatasi tantangan sehari-hari dengan sikap optimis.",
        pages: 180,
        year: 2023,
        cover: "image/3.png",
        readLink: "https://buku.kemendikdasmen.go.id/katalog/Pendidikan-Agama-Islam-Dan-Budi-Pekerti-Kelas-X",
        format: "PDF"
    },
    {
        id: 10,
        title: "Keynesian Economics",
        author: "John Maynard Keynes, Robert Skidelsky",
        category: "Sejarah",
        class: "10, 11, 12",
        description: "Hal ini mengkritik pandangan ekonomi klasik yang meyakini bahwa pasar bebas akan selalu kembali ke kondisi keseimbangan dengan sendirinya, yaitu lapangan kerja penuh (full employment), tanpa perlu intervensi pemerintah (laissez-faire).",
        pages: 680,
        year: 1999,
        cover: "image/5.png",
        readLink: "https://archive.org/details/encyclopediaofke0000unse/page/n15/mode/2up",
        format: "PDF"
    },
    {
        id: 11,
        title: "Bahasa Inggris",
        author: "Puji Astuti, Aria Septi Anggaira",
        category: "Bahasa",
        class: "11",
        description: "Kurikulum ini memberikan keleluasaan bagi satuan/program pendidikan dalam mengimplementasikan kurikulum dengan prinsip diversiikasi sesuai dengan kondisi satuan pendidikan, potensi daerah, dan peserta didik.",
        pages: 288,
        year: 2023,
        cover: "image/6.png",
        readLink: "https://drive.google.com/file/d/1dtfPIndJqYui18dnXx9Z_WgswWM1P5IX/view",
        format: "PDF"
    },
    {
        id: 12,
        title: "Teknologi Jaringan Nirkabel",
        author: "Sastya Hendri Wibowo, Cyntia Andesti",
        category: "Teknologi",
        class: "11",
        description: "Buku ini diharapkan dapat membantu pembaca memahami teori Teknologi Jaringan Nirkabel, sehingga mereka dapat mengaplikasikan ilmunya",
        pages: 151,
        year: 2022,
        cover: "image/0.png",
        readLink: "https://repository.bsi.ac.id/repo/files/353460/download/Buku---Teknologi-Jaringan-Nirkabel.pdf",
        format: "PDF"
    }
];

// DOM Elements
const booksGrid = document.getElementById('books-grid');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const categoryFilter = document.getElementById('category-filter');
const classFilter = document.getElementById('class-filter');
const header = document.getElementById('header');
const scrollToTopBtn = document.getElementById('scroll-to-top');

// Modal functionality
const modal = document.getElementById('book-modal');
const closeModal = document.querySelector('.close-modal');
const modalTitle = document.getElementById('modal-title');
const modalAuthor = document.getElementById('modal-author');
const modalClass = document.getElementById('modal-class');
const modalYear = document.getElementById('modal-year');
const modalPages = document.getElementById('modal-pages');
const modalCategory = document.getElementById('modal-category');
const modalDescription = document.getElementById('modal-description');
const modalCover = document.getElementById('modal-cover');
const modalReadLink = document.getElementById('modal-read-link');

// Function to open modal with book details
function openBookModal(book) {
    modalTitle.textContent = book.title;
    modalAuthor.textContent = book.author;
    modalClass.textContent = book.class;
    modalYear.textContent = book.year;
    modalPages.textContent = book.pages;
    modalCategory.textContent = book.category;
    modalDescription.textContent = book.description;
    modalCover.src = book.cover;
    modalCover.alt = book.title;
    modalReadLink.href = book.readLink;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

// Function to close modal
function closeBookModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scrolling
}

// Event listener for modal close button
closeModal.addEventListener('click', closeBookModal);

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        closeBookModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeBookModal();
    }
});

// Display books
function displayBooks(booksToDisplay) {
    booksGrid.innerHTML = '';
    
    if (booksToDisplay.length === 0) {
        booksGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem; color: var(--text-secondary);">Tidak ada buku yang ditemukan.</p>';
        return;
    }
    
    booksToDisplay.forEach((book, index) => {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';
        bookCard.innerHTML = `
           <div class="book-cover">
        <img src="${book.cover}" alt="${book.title}" onerror="this.src='image/placeholder.jpg'">
        <button class="bookmark-btn" data-book-id="${book.id}">
            <i class="far fa-bookmark"></i>
        </button>
    </div>
    <div class="book-info">
        <h3 class="book-title">${book.title}</h3>
        <p class="book-author">${book.author}</p>
        <div class="book-meta">
            <span>Kelas ${book.class}</span>
            <span>${book.pages} halaman</span>
        </div>
        <button class="read-btn" data-book-id="${book.id}">
            <i class="fas fa-book-open"></i> Baca Buku
        </button>
            </div>
        `;
        booksGrid.appendChild(bookCard);
        
        // Add event listener to the read button
        const readBtn = bookCard.querySelector('.read-btn');
        readBtn.addEventListener('click', function() {
            openBookModal(book);
        });
        
        // Staggered animation
        setTimeout(() => {
            bookCard.classList.add('visible');
        }, 100 * index);
    });
}

// Filter books
function filterBooks() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;
    const selectedClass = classFilter.value;

    const filteredBooks = books.filter(book => {
        const matchesSearch = book.title.toLowerCase().includes(searchTerm) || 
                             book.author.toLowerCase().includes(searchTerm) ||
                             book.description.toLowerCase().includes(searchTerm);
        const matchesCategory = selectedCategory ? book.category === selectedCategory : true;
        const matchesClass = selectedClass ? book.class === selectedClass : true;
        
        return matchesSearch && matchesCategory && matchesClass;
    });
    
    displayBooks(filteredBooks);
}

// Scroll animations
function handleScroll() {
    // Header effect
    if (window.scrollY > 100) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
    
    // Scroll to top button
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
    
    // Animate elements on scroll
    const bookCards = document.querySelectorAll('.book-card:not(.visible)');
    const categoryCards = document.querySelectorAll('.category-card:not(.visible)');
    
    bookCards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (cardTop < windowHeight - 100) {
            card.classList.add('visible');
        }
    });
    
    categoryCards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (cardTop < windowHeight - 100) {
            card.classList.add('visible');
        }
    });
}

// Event Listeners
searchBtn.addEventListener('click', filterBooks);
searchInput.addEventListener('keyup', function(e) {
    if (e.key === 'Enter') {
        filterBooks();
    }
});
categoryFilter.addEventListener('change', filterBooks);
classFilter.addEventListener('change', filterBooks);

// Category cards
document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', function() {
        const category = this.getAttribute('data-category');
        categoryFilter.value = category;
        filterBooks();
        
        // Scroll to books section
        document.getElementById('books').scrollIntoView({ behavior: 'smooth' });
    });
});

// Scroll to top
scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Initialize
window.addEventListener('DOMContentLoaded', function() {
    createParticles();
    initTypingAnimation();
    displayBooks(books);
    
    // Animate category cards
    setTimeout(() => {
        document.querySelectorAll('.category-card').forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('visible');
            }, 150 * index);
        });
    }, 500);
});

window.addEventListener('scroll', handleScroll);

// Loading State & Error Handling
function showLoading() {
    booksGrid.innerHTML = `
        <div class="loading-container" style="grid-column: 1/-1; text-align: center; padding: 3rem;">
            <div class="loading-spinner"></div>
            <p style="margin-top: 1rem; color: var(--text-secondary);">Memuat buku...</p>
        </div>
    `;
}

function showError(message) {
    booksGrid.innerHTML = `
        <div class="error-container" style="grid-column: 1/-1; text-align: center; padding: 3rem;">
            <i class="fas fa-exclamation-triangle" style="font-size: 3rem; color: var(--accent); margin-bottom: 1rem;"></i>
            <p style="color: var(--text-secondary);">${message}</p>
            <button onclick="location.reload()" class="btn btn-primary" style="margin-top: 1rem;">
                <i class="fas fa-redo"></i> Coba Lagi
            </button>
        </div>
    `;
}

// Search dengan Debounce
let searchTimeout;
searchInput.addEventListener('input', function(e) {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        filterBooks();
    }, 300); // Delay 300ms
});

// Bookmark/Local Storage
function toggleBookmark(bookId) {
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    const index = bookmarks.indexOf(bookId);
    
    if (index > -1) {
        bookmarks.splice(index, 1);
    } else {
        bookmarks.push(bookId);
    }
    
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    updateBookmarkUI();
}

function updateBookmarkUI() {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    document.querySelectorAll('.book-card').forEach(card => {
        const bookId = parseInt(card.querySelector('.read-btn').dataset.bookId);
        const bookmarkBtn = card.querySelector('.bookmark-btn');
        
        if (bookmarks.includes(bookId)) {
            bookmarkBtn.innerHTML = '<i class="fas fa-bookmark"></i>';
            bookmarkBtn.style.color = 'var(--accent)';
        } else {
            bookmarkBtn.innerHTML = '<i class="far fa-bookmark"></i>';
            bookmarkBtn.style.color = 'var(--text-secondary)';
        }
    });
}

// Reading Progress & History
function trackReadingProgress(bookId) {
    let readingHistory = JSON.parse(localStorage.getItem('readingHistory')) || {};
    readingHistory[bookId] = {
        lastRead: new Date().toISOString(),
        readCount: (readingHistory[bookId]?.readCount || 0) + 1
    };
    localStorage.setItem('readingHistory', JSON.stringify(readingHistory));
}

// Tambahkan di akhir style2.3.js
function initStatistics() {
    document.getElementById('total-books').textContent = books.length;
    document.getElementById('total-categories').textContent = 
        new Set(books.map(book => book.category)).size;
    
    // Hitung kategori terpopuler
    const categoryCount = {};
    books.forEach(book => {
        categoryCount[book.category] = (categoryCount[book.category] || 0) + 1;
    });
    
    const popularCategory = Object.keys(categoryCount).reduce((a, b) => 
        categoryCount[a] > categoryCount[b] ? a : b
    );
    document.getElementById('popular-category').textContent = popularCategory;
}

// Panggil di window.addEventListener('DOMContentLoaded')
window.addEventListener('DOMContentLoaded', function() {
    createParticles();
    initTypingAnimation();
    displayBooks(books);
    initStatistics();
    updateBookmarkUI();
    
    // Animate category cards
    setTimeout(() => {
        document.querySelectorAll('.category-card').forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('visible');
            }, 150 * index);
        });
    }, 500);
});
