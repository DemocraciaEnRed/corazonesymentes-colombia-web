<style>
    .parraf {
        letter-spacing: var(--unnamed-character-spacing-0);
        color: var(--unnamed-color-1d1d1b);
        text-align: left;
        letter-spacing: 0px;
        color: #1D1D1B;
        text-transform: lowercase;
        opacity: 1;
    }

    .parrafBG {
        background-color: #9678FF ;

    } 

    .contImg{
        height: 230px;
        width: 480px;
    }

    .imgPart{
        position: absolute;
        bottom: -2px;
        right: 80px;
        float:right;
    }

    .fontVacia{
        font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) 90px/112px var(--unnamed-font-family-staatliches);
        letter-spacing: var(--unnamed-character-spacing-0);
        color: var(--unnamed-color-ffffff);
        text-align: left;
        font: normal normal normal 48px Staatliches;
        letter-spacing: 0px;
        color: #FFFFFF;
        opacity: 1;
    }

    /* .fontPurple{
        letter-spacing: var(--unnamed-character-spacing-0);
        color: var(--unnamed-color-9678ff);
        text-align: left;
        font: normal normal bold 30px Amfibia Narrow;
        letter-spacing: 0px;
        color: #9678FF;
        text-transform: lowercase;
    } */
    hr{
        background-color: var(--verdeClaro);
        border-color:var(--verdeClaro); 
        border-style:solid; 
        height: 1px;
        width: 50%;
    }
    .circle{
        background: transparent url("./static/circulo.svg") no-repeat scroll 60% -20%;
    }

    @media(max-width: 640px){
        .sm-flex-100 {
            flex: 1 1 100%;
        }
    }
</style>


<section class="pedagogias-digitales-section bg-gris     ">
    <article class="container sm:h-full mx-auto py-10 px-2 sm:p-10 ">
        <div class="flex flex-wrap sm:grid sm:grid-cols-4  gap-8 mb-10 mt-14">
            <!-- <div class="col-span-4 grid md:grid-cols-6  grid-cols-1 "> -->
            <div class="col-span-1 sm:col-span-4">
                <div class="flex flex-wrap justify-between sm:flex   	 ">
                    <div class="w-2/5  flex flex-initial order-1  sm:flex-col sm:w-auto sm:flex-grow-0  sm:order-none justify-items-center ">
                        <img src="RUTA-17.svg" alt="Ícono de cambio" class="w-2/2 h-20  ">
                        <span class="pl-1 text-4xl text-left fushia-text sm:text-2xl sm:text-center">LA RUTA</span> 
                    </div>
                    <div class="flex-1 order-3 sm:order-none  sm:px-4 sm-flex-100	">
                        <h1 class="text-4xl verdeClaro-text text-left pl-0 sm:text-left sm:w-4/4 mt-4  sm:pl-4  sm:verdeClaro-text mb-5 mx-0 uppercase leading-none">
                            <!-- <span class="fushia-text"> </span>  -->
                             ¿Por qué debemos hacer algo al respecto de la desinformación? 
                        </h1>
                    </div>
                    <div class="w-auto  sm:order-last p-4 order-2 circle	">
                        <p class=" text-2xl sm:p-0  justify-items-right text-right fontVacia uppercase circle">
                            dos
                        </p>
        
                    </div>
            
                </div>
            </div>
            <div class="sm:col-span-2 my-auto  ">
               
                <p class="fontVacia text-xs">RTA/</p>
                <p class="font-sans text-white mb-5">
                    <span class="fushia-text"></span> 
                    La desinformación tiene un efecto negativo en cómo nos relacionamos con los otros, cómo entendemos nuestra realidad e incluso llevarnos a discriminar, maltratar y ejercer actitudes violentas frente a otros.    
                </p>
                <hr >
                

                <div class=" container flex flex-wrap  pt-4 spac-x-0">
                    <div class="w-1/5 ">
                        <img src="/icons/icon-document.png" alt="Ícono de cambio" class="w-16 p-0 m-0">
                    </div>
                    <div class="w-3/5 sm:w-3/5">
                        <h3 class="fushia-text uppercase">
                            capitulo 8
                        </h3>
    
                        <h3 class=" verdeClaro-text mb-5 uppercase leading-none">
                            INFORMACIÓN Y DESINFORMACIÓN EN REDES: NO TODO LO QUE SE VIRALIZA ES VERDADERO    
                        </h3>
                    </div>
                    <div class="w-1/5 sm:w-1/5"></div>
                    <div class="w-1/5 sm:w-1/5"></div>

                    <div class="w-3/5 sm:w-4/5 ">
                        <a href="/documents/CAPÍTULO_8_C&M.pdf" download
                        class="" ><span class=" text-xl sm:text-1xl  sm:w-18 fushia-bg px-2 sm:px-18 py-3 text-white uppercase    ">Ver más y descargar</span>
                        </a>                    </div>
                </div>
            </div>

            <div class="sm:col-span-2 text-white flex flex-col max-h-434px">
                <div class="flex items-start mb-5">
                    
                    <div class="flex-row">
                        <img src="comentarioscorazon16.svg" alt="Ícono de cambio" class="contImg mb-8 mr-3 mt-4">
                        <h2 class="pl-10  mb-3 mr-8 fushia-text text-2xl">Por eso es necesario que cada uno de nosotros aprenda por qué caemos en las noticias falsas y la desinformación.</h2>
                        <!-- <p class="font-sans celeste-text">CLICK EN LA FLECHA PARA CONOCER LA RUTA</p> -->
                    </div>
                </div>
                
            </div>
    
        </div>
    </article>


</section>