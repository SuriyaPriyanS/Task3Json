const getme =() => {
    const m1 = new XMLHttpRequest();
    m1.open("GET", "https://restcountries.com/v3.1/all",true);

    m1.responseType = "json";

    m1.onload = () => {
        const data = m1.response;

        (data);


    };

    m1.send();

}

getme();

function getdata (data) {

    data.forEach ((country) => {
        console.log("Name :" + country.name.common);
        console.log("Name :" + country.name.region);
        console.log("Name :" + country.name.subregion);
        console.log("Name :" + country.name.population);
    });


}
