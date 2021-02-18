

export const endPoints = "https://dev-oxigeno.cdmx.gob.mx/api/v2/";
export const endPointsManager = "https://dev-oxigeno.cdmx.gob.mx/oxigeno/v1.1/data/";

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

// export const endPoints =  `${RemoveLastDirectoryPartOf(window.location.href)}/api/v2/`;
// export const endPointsManager =  `${RemoveLastDirectoryPartOf(window.location.href)}/v1.1/data/`;