<?php
use Faker\Generator as Faker;

$factory->define(App\Especialidades::class, function (Faker $faker) {
    return [
        'nombre_especialidad' => $faker->unique()->jobTitle,
    ];
});
