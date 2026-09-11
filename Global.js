const Main = document.getElementById("MainContent");
const Options = document.getElementById("dropbox");

if (Options== "Character-inputs"){

} else if(Options == "Character-Sheet") {
    function Character_SHeet(){
            Main.innerHTML +=`
           
            <div id="header-containor"
                <h4>Dungeons & Dragons</h4>
                <div id="Character-Name" class="heading">
                    <h5 id="Character-name"> ${.name} </h5>
                </div>

                <div id="basic-info" class="heading">
                    <p>${.class} ${.level}</p>
                    <p>${.background}</p>
                </div>
            </div>

            <div id="Stats"

            
            `
        
    }
};
