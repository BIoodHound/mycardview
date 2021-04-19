<template>
    <div class="account">
        <h1 class="title">Account</h1>
        <form action class="form">
            <label class="form-label" for="#name">Nombre</label>
            <input v-model="name" class="form-input" type="text" id="name">
            <label class="form-label" for="#apellido">Apellidos</label>
            <input v-model="apellido" class="form-input" type="text" id="apellido">
            <label class="form-label" for="#email">Email</label>
            <input v-model="email" class="form-input" type="text" id="email">
            <label class="form-label" for="#cambiar">Cambiar contraseña</label>
            <input v-model="password" class="form-input" type="text" id="password">
            <a href="" class="btn">Cancelar</a>
            <input class="form-submit" type="submit" value="Guardar">
        </form>
  </div>
</template>

<style>
    input[type=text] {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    }

    input[type=submit] {
        width: 100%;
        background-color: #2629e2;
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    input[type=submit]:hover {
        background-color: #4548ee;
    }

    a:link, a:visited {
        width: 100%;
        background-color: #2629e2;
        color: white;
        padding: 14px 25px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
    }

    a:hover, a:active {
        background-color: #4548ee;
    }

    .account {
        width: 50%;
        border-radius: 5px;
        background-color: #f2f2f2;
        padding: 20px;
    }
</style>