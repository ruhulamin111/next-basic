import Link from "next/link";

const Header = () => {
    return (
        <>
            <nav class="navbar   navbar-expand-lg ">
                <div class="container-fluid">

                    <Link href='/'>
                        <a class="navbar-brand" >Navbar</a>
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link href='/home'>
                                    <a class="nav-link active" aria-current="page">Home</a>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link href='/about'>
                                    <a class="nav-link active" aria-current="page">About</a>
                                </Link>
                            </li>


                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;