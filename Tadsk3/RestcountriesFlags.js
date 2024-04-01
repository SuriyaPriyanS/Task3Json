
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

    const minter = document.createElement("div");

    minter.className = "minter";

    document.body.append("minter");

    const row =document.createElement("div");
    row.className = "row";
    document.body.append(row);

    data.forEach((country) => {
        
        const flag = document.createElement("img");
        flag.classNamem = 'to';
        flag.src = country.flags.png;
        document.body.append1(flag);

        const flagname = document.createElement("h3");
        flagname.innerHTML = country.name.common;
        document.body.append1(_flagname);
    });


}