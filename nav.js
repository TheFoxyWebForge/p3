const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav row">
        <div class="imgclass col-sm ">
            <img src="logo.jpeg" class="brand-logo" alt="">
            </div>
            <div class="nav-items col-sm">
                <div class="search">
                    <input type="text" class="search-box" placeholder="search brand, product">
                    <button class="search-btn">search</button>
                </div>
                <a href="#"><img src="user.png" alt=""></a>
                <a href="#"><img src="cart.png" alt=""></a>
            </div>
        </div>
        
        <ul class="links-container">
            <li class="link-item"><a href="#" class="link">home</a></li>
            <li class="link-item"><a href="#" class="link">About</a></li>
            <li class="link-item"><a href="#" class="link">Designs</a></li>
            <li class="link-item"><a href="#" class="link">Products</a></li>
            <li class="link-item"><a href="#" class="link">accessories</a></li>
        </ul>
    `;
}

createNav();