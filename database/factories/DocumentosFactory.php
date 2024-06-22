<?php
use Faker\Generator as Faker;

$factory->define(App\Documentos::class, function (Faker $faker) {
    return [
        'proyecto_id' => null, // Adjust based on your relationships
        'nombre_documento' => $faker->sentence,
        'tipo_documento' => $faker->randomElement(['pdf', 'jpg', 'png']),
        'ruta_documento' => $faker->url,
        'fecha_subida' => now(),
    ];
});
