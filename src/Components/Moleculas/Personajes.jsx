import characters from "../data/characters";
function Personajes() {
    return ( 
        <>
        <div className="flex justify-center text-5xl text-red-600 p-10">
            <p>PERSONAJES DE DRAGON BALL</p>
        </div>
        <div className="">
            {characters.items.map(product =>(
                <div className="">
                    <div className="flex justify-center p-9 ">
                <img src={product.image} className="h-[20rem] bg-[#0000002d] px-10 p-5"></img>
                </div>

                
                <p className="text-4xl flex justify-center font-semibold p-5">{product.name}</p>
                <p className="text-2xl flex justify-center">{product.ki}</p>
                <p className="text-2xl flex justify-center">{product.maxKi}</p>
                <p className="text-2xl flex justify-center">{product.race}</p>
                <p className="text-2xl flex justify-center">{product.gender}</p>
                <p className="text-2xl flex justify-center font-serif text-center pl-32 pr-32">{product.description}</p>
                <p className="text-3xl flex justify-center">{product.affiliation}</p>
                

                <div className="flex justify-center pt-5">
                <div className="w-[70rem] h-[3px] bg-black opacity-40 flex justify-center">
                </div>
                </div>
                </div>
                
            ))}
        </div>
       
        </>
     );
}

export default Personajes;