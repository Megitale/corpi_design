<?php
use Faker\Generator as Faker;

$factory->define(App\Clientes::class, function (Faker $faker) {
    return [
        'nombre_empresa' => $faker->company,
        'contacto_nombre' => $faker->name,
        'contacto_email' => $faker->unique()->safeEmail,
        'contacto_telefono' => $faker->phoneNumber,
        'fecha_creacion' => now(),
        'fecha_modificacion' => now(),
    ];
});
