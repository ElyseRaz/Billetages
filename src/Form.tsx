import { useState } from "react"
function Formulaire() {
    const [billet20000, setBillet20000] = useState(0);
    const [billet10000, setBillet10000] = useState(0);
    const [billet5000, setBillet5000] = useState(0);
    const [billet2000, setBillet2000] = useState(0);
    const [billet1000, setBillet1000] = useState(0);
    const [billet500, setBillet500] = useState(0);
    const [billet200, setBillet200] = useState(0);
    const [billet100, setBillet100] = useState(0);
     
    const result = document.getElementById("resultat");
    const calcul = () => {
        let total = (billet20000 * 20000) + (billet10000 * 10000) + (billet5000 * 5000) + (billet2000 * 2000) + (billet1000 * 1000) + (billet500 * 500) + (billet200 * 200) + (billet100 * 100);
        let resultat =  "Total : " + total + " Ar";
        if (isNaN(total) || total<0){
            (result as HTMLElement).innerHTML = "Le nombre ne doit pas être négatif";
        }
        else{(result as HTMLElement).innerHTML = resultat ;}
        }

    const reset = () => {
        setBillet20000(0);
        setBillet10000(0);
        setBillet5000(0);
        setBillet2000(0);
        setBillet1000(0);
        setBillet500(0);
        setBillet200(0);
        setBillet100(0);
        (result as HTMLElement).innerHTML = "";
    }

    return (

        <div className="items-center">
            <h1 className="text-xl font-bold font-sans text-center text-green-600 my-8">Formulaire du Billetage</h1>
            <div className="flex flex-col items-center gap-4 my-4">
                <div className="flex flex-wrap gap-4 ">
                <label htmlFor="nom" className="mr-4 mt-2">Billet 20 000 Ar</label>
                <input type="number" name="billet20000" id="billet20000" placeholder="0" className="border border-gray-300 rounded-md p-2 " value={billet20000} onChange={(e) => setBillet20000(parseInt(e.target.value))}/> 
                </div>
                <div className="flex flex-wrap gap-4 ">
                <label htmlFor="nom" className="mr-5 mt-2">Billet 10 000 Ar</label>
                <input type="number" name="billet10000" id="billet10000" placeholder="0" className="border border-gray-300 rounded-md p-2" value={billet10000} onChange={(e) => setBillet10000(parseInt(e.target.value))}/> 
                </div>
                <div className="flex flex-wrap gap-4 ">
                <label htmlFor="nom" className="mr-7 mt-2">Billet 5 000 Ar</label>
                <input type="number" name="billet5000" id="billet5000" placeholder="0" className="border border-gray-300 rounded-md p-2" value={billet5000} onChange={(e) => setBillet5000(parseInt(e.target.value))}/> 
                </div>
                <div className="flex flex-wrap gap-4 ">
                <label htmlFor="nom" className="mr-7 mt-2">Billet 2 000 Ar</label>
                <input type="number" name="billet2000" id="billet2000" placeholder="0" className="border border-gray-300 rounded-md p-2" value={billet2000} onChange={(e) => setBillet2000(parseInt(e.target.value))}/>
                </div>
                <div className="flex flex-wrap gap-4 ">
                <label htmlFor="nom"className="mr-7 mt-2">Billet 1 000 Ar</label>
                <input type="number" name="billet1000" id="billet1000" placeholder="0" className="border border-gray-300 rounded-md p-2" value={billet1000} onChange={(e) => setBillet1000(parseInt(e.target.value))}/>
                </div>
                <div className="flex flex-wrap gap-4 ">
                <label htmlFor="nom" className="mr-10 mt-2">Billet 500 Ar</label>
                <input type="number" name="billet500" id="billet500" placeholder="0" className="border border-gray-300 rounded-md p-2" value={billet500} onChange={(e) => setBillet500(parseInt(e.target.value))}/>
                </div>
                <div className="flex flex-wrap gap-4">
                <label htmlFor="nom" className="mr-10 mt-2">Billet 200 Ar</label>
                <input type="number" name="billet200" id="billet200" placeholder="0" className="border border-gray-300 rounded-md p-2" value={billet200}onChange={(e) => setBillet200(parseInt(e.target.value))}/>
                </div>
                <div className="flex flex-wrap gap-4">
                <label htmlFor="nom"className="mr-10 mt-2">Billet 100 Ar</label>
                <input type="number" name="billet100" id="billet100" placeholder="0" className="border border-gray-300 rounded-md p-2" value={billet100} onChange={(e) => setBillet100(parseInt(e.target.value))}/>
                </div>
                <div className="flex flex-wrap gap-4 py-4 items-center" >
                <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded " onClick={calcul}>Valider</button>
                <button  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={reset}>Remise à zero</button>
                </div>
            </div>
            
            <div id="resultat" className="text-3xl font-bold font-sans text-center text-green-600 w-full h-full mt-4">
             </div>

        </div>
    )
}

export default Formulaire