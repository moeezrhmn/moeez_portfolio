<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title> {{ config('app.name', 'Moeez dev') }} @hasSection ('title') | @yield('title') @endif </title>
    <meta name="msapplication-TileImage" content="{{ asset(assets/images/moeez-dp-2.png) }}">

    {{-- Boostrap 5.3v --}}
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

    {{-- Custom Style  --}}
    <link rel="stylesheet" href="{{ asset('assets/css/style.css') }}?ver=1.1">
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
    </script>
</head>

<body class="overflow-hide-horizontal">
    <div id="preloader" class="preloader-outer">
        <div class="preloader" >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
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