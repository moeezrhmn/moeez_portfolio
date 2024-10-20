<nav class="navbar navbar-expand-lg border-bottom">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"> <span style="color: #4E6BFF;"> {{ config('app.name') }} </span> </a>
      <button class="navbar-toggler " style="border: 0; outline: none;"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto  me-5 mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link  {{ Request::is('/') ? 'active' : '' }} "  aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link {{ Request::is('about') ? 'active' : '' }} " href="{{ route('about') }}">About Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link {{ Request::is('services') ? 'active' : '' }} " href="{{ route('services') }}">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link {{ Request::is('/blogs') ? 'active' : '' }} " href="{{ route('blogs') }}">Blogs</a>
          </li>
          <li class="nav-item">
            <a class="nav-link nav-contact-btn  {{ Request::is('contact') ? 'active' : '' }}" href="{{ route('contact') }}">Contact Me</a>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>