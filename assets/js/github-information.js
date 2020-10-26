function fecthGitHubInformation(event) {

    let username = $("#gh-username").val();
    if (!username) {
        $("#gh-user-data").html(`<h2>Please enter a GitHub username</h2>`);
        return;
    }
    $("#gh-user-data").html(
        `<div id= "loader">
             <img src="assets/css/loader.gif" alt="laoding..." />
         </div>`);
    
    $.when(
        $.getJSON(`https://api.hithub.com/users/${username}`)
    ).then(
        function(repsonse) {
            let userData = response;
            $("#gh-user-data").html(userInformationHTML(userData));
        }, function(erroResponse) {
            if (erroResponse.status === 404) {
                $("#gh-user-data").html(
                    `<h2>No info found for user ${username}</h2>`);
            } else {
                console.log(errorResponse);
                $("#gh-user-data").html(
                    `<h2>Error: ${errorResponse.responseJSON.message}</h2>`);
                
            }
        });

    
}