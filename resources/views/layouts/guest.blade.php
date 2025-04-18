<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Moeez Dev | Web Apps, Automation, SaaS, Inventory & Custom Solutions @hasSection ('title') | @yield('title') @endif </title>

    <!-- Primary Meta Tags -->
    <meta name="title" content="Moeez Dev | Web Apps, Automation, SaaS, Inventory & Custom Solutions">
    <meta name="description" content="Moeez, a skilled software developer specializing in web apps, automation, SaaS products, web scraping, and inventory management solutions. Expertise in PHP (Laravel, CodeIgniter), JavaScript (Node.js, ReactJS), Python (Flask, FastAPI), and WordPress plugin development. Build user-friendly websites, automate tasks, integrate APIs, and create custom SaaS applications.">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://moeezrehman.dev/">
    <meta property="og:title" content="Moeez Dev | Web Apps, Automation, SaaS, Inventory & Custom Solutions">
    <meta property="og:description" content="Professional web apps, SaaS development, automation, inventory management, and custom solutions. Build user-friendly websites, automate tasks, and integrate APIs with expertise in Laravel, Python, and JavaScript.">
    <meta property="og:image" content="{{ asset('assets/images/moeez-dp-2.jpg') }}">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://moeezrehman.dev/">
    <meta property="twitter:title" content="Moeez Dev | Web Apps, Automation, SaaS, Inventory & Custom Solutions">
    <meta property="twitter:description" content="Expert in custom software solutions, web apps, automation, SaaS products, and API integrations. Build efficient, scalable systems for various industries.">
    <meta property="twitter:image" content="{{ asset('assets/images/moeez-dp-2.jpg') }}">


    <meta name="msapplication-TileImage" content="{{ asset('assets/images/moeez-dp-2.jpg') }}">
    <link rel="icon" type="image/x-icon" href="{{ asset('assets/images/moeez-dp-2.jpg') }}">


    {{-- Boostrap 5.3v --}}
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

    {{-- Custom Style  --}}
    <link rel="stylesheet" href="{{ asset('assets/css/style.css') }}?ver={{ time() }}">
    {{-- Prealoader --}}
    <script>
        document.addEventListener("DOMContentLoaded", function() {
            var preloader = document.getElementById('preloader');
            window.addEventListener('load', function() {
                preloader.style.display = 'none';
            });
        });
    </script>

    @yield('head_import')

    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-QPQ3J7KD7Y"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', 'G-QPQ3J7KD7Y');

        // alert handling
        document.addEventListener('DOMContentLoaded', function () {
        const alertSuccess = document.getElementById('alert-success');
        const alertError = document.getElementById('alert-error');
        
        if (alertSuccess) {
            alertSuccess.classList.add('alert-show');
            setTimeout(() => {
                alertSuccess.classList.remove('alert-show');
            }, 4000);
        }

        if (alertError) {
            alertError.classList.add('alert-show');
            setTimeout(() => {
                alertError.classList.remove('alert-show');
            }, 6000);
        }
    });
    </script>
</head>

<body class="overflow-hide-horizontal">
    <div id="preloader" class="preloader-outer">
        <div class="preloader">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
    @if (session('success'))
    <div id="alert-success" class="alert alert-success">
        {{ session('success') }}
    </div>
    @endif
    @if ($errors->any())
    <div id="alert-error" class="alert alert-error">
        <ul>
            @foreach ($errors->all() as $error)
            <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
    @endif
    <main>
        <x-navbar />

        @yield('content')

        <x-footer />
    </main>

    {{-- Bootstrap 5.3 --}}
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

    @yield('foot_import')
</body>

</html>