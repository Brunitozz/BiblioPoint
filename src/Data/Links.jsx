/*
    //Esto al ingresar una cuenta
    - Main feed (Inicio)
    - Crear Post
    - Gestionar libros
    - configuración de cuenta
    - Publicaciones
    - Ver perfil

    //Esto en el panel de perfil
    - Editar perfil
    - Ver amigos
    - Solicitudes de amistad
    //
*/
export const LinksCuenta = [
    {
        to: '/inicio',
        text: 'Inicio',
        svg: (
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M6 19h3.692v-5.884h4.616V19H18v-9l-6-4.538L6 10zm-1 1V9.5l7-5.288L19 9.5V20h-5.692v-5.884h-2.616V20zm7-7.77" /></svg>
        ),
    },
    {
        to: '/publicar',
        text: 'Publicar',
        svg: (
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M17 19.22H5V7h7V5H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-7h-2z" /><path fill="currentColor" d="M19 2h-2v3h-3c.01.01 0 2 0 2h3v2.99c.01.01 2 0 2 0V7h3V5h-3zM7 9h8v2H7zm0 3v2h8v-2h-3zm0 3h8v2H7z" /></svg>
        ),
    },
    {
        to: '/libros',
        text: 'Libros',
        svg: (
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="M104 34H56a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h48a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14M54 78h52v100H54Zm2-32h48a2 2 0 0 1 2 2v18H54V48a2 2 0 0 1 2-2m48 164H56a2 2 0 0 1-2-2v-18h52v18a2 2 0 0 1-2 2m125.7-15L196.51 37.16a14 14 0 0 0-16.63-10.85l-46.81 10.06A14.09 14.09 0 0 0 122.3 53l33.19 157.81a14 14 0 0 0 6.1 8.9a13.85 13.85 0 0 0 7.57 2.26a13.6 13.6 0 0 0 3-.32l46.81-10.05A14.09 14.09 0 0 0 229.7 195m-82.81-83.32l50.73-10.9l14.12 67.16L161 178.81Zm-6.63-31.56L191 69.19L195.15 89l-50.73 10.9Zm-4.66-32l46.8-10.05a2 2 0 0 1 .42 0a1.9 1.9 0 0 1 1.05.32a2 2 0 0 1 .89 1.31l3.75 17.82l-50.72 10.82l-3.74-17.78a2.07 2.07 0 0 1 1.55-2.46Zm80.81 151.8L169.6 210a1.92 1.92 0 0 1-1.47-.27a2 2 0 0 1-.89-1.31l-3.75-17.82l50.72-10.9l3.79 17.73a2.07 2.07 0 0 1-1.59 2.47Z" /></svg>
        ),
    },
    {
        to: '/perfil',
        text: 'Perfil',
        svg: (
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M8 7a4 4 0 1 1 8 0a4 4 0 0 1-8 0m0 6a5 5 0 0 0-5 5a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3a5 5 0 0 0-5-5z" clipRule="evenodd" /></svg>
        ),
    },
];

export const LinksPerfil = [
    {
        to: '/inicio',
        text: 'Inicio',
        svg: (
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M6 19h3.692v-5.884h4.616V19H18v-9l-6-4.538L6 10zm-1 1V9.5l7-5.288L19 9.5V20h-5.692v-5.884h-2.616V20zm7-7.77" /></svg>
        ),
    },
    {
        to: '/edit-profile:id',
        text: 'Editar Perfil',
        svg: (
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m7 17.013l4.413-.015l9.632-9.54c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.756-.756-2.075-.752-2.825-.003L7 12.583zM18.045 4.458l1.589 1.583l-1.597 1.582l-1.586-1.585zM9 13.417l6.03-5.973l1.586 1.586l-6.029 5.971L9 15.006z" /><path fill="currentColor" d="M5 21h14c1.103 0 2-.897 2-2v-8.668l-2 2V19H8.158c-.026 0-.053.01-.079.01c-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2" /></svg>
        ),
    },
    {
        to: '/pagina',
        text: 'Pagina del Libro',
        svg: (
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="M4 21.4V2.6a.6.6 0 0 1 .6-.6h11.652a.6.6 0 0 1 .424.176l3.148 3.148A.6.6 0 0 1 20 5.75V21.4a.6.6 0 0 1-.6.6H4.6a.6.6 0 0 1-.6-.6M8 10h8m-8 8h8m-8-4h4" /><path d="M16 2v3.4a.6.6 0 0 0 .6.6H20" /></g></svg>
        ),
    },
];