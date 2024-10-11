<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title> {{ config('app.name', 'Moeez dev') }}  @hasSection ('title') | @yield('title') @endif </title>

        {{-- Boostrap 5.3v --}}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

        {{-- Custom Style  --}}
        <link rel="stylesheet" href="{{ asset('assets/css/style.css') }}">

        @yield('head_import')
        <script>
            document.addEventListener("DOMContentLoaded", function() {
                var preloader = document.getElementById('preloader');
                window.addEventListener('load', function() {
                    preloader.style.display = 'none';
                });
            });
        </script>
    </head>
    <body style="overflow-x: hidden;"> 
        <div id="preloader" class="preloader-outer">

            <div class="preloader" >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>

        <x-navbar/>
        
        @yield('content')
        
        <x-footer/>

        {{-- Bootstrap 5.3 --}}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

        @yield('foot_import')
    </body>
</html>
