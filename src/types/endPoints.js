

// export const endPoints = "https://dev-oxigeno.cdmx.gob.mx/api/v3/";

function RemoveLastDirectoryPartOf(the_url)
{
    var the_arr = the_url.split('/');
    the_arr.pop();
    the_arr.pop();
    if (the_url.includes("formulario")) {
        the_arr.pop();
    }
    return( the_arr.join('/') );
}

export const endPoints =  `${RemoveLastDirectoryPartOf(window.location.href)}/api/v3/`;

export const endPointsIndexadora =  `${window.location.href}/api/v3/`;

