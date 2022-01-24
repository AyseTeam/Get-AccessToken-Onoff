let accessToken = localStorage.accessToken;

if(accessToken == null)
{
    console.log("Oh.. accesToken not found..");
}
    else
{
    console.log("Yess ! AccessToken Found !");
    console.log(accessToken);
}
