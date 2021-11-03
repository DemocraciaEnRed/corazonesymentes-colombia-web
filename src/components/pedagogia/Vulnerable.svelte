<script>
	import empatiaModal from './modals/empatiaModal.svelte';
    import disonanciaModal from './modals/disonanciaModal.svelte';
	import confirmacionModal from './modals/confirmacionModal.svelte';
	import atribucionModal from './modals/atribucionModal.svelte';


    import { modal } from '../stores.js';
    const showEmpatia = () => {
        modal.set(empatiaModal);
    };
    const showDisonancia = () => {
        modal.set(disonanciaModal);
    };
    const showConfirmacion = () => {
        modal.set(confirmacionModal);
    };
    const showAtribucion = () => {
        modal.set(atribucionModal);
    };
</script>
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
    @media(max-width: 640px) {
        .empatia-button {
            margin-left: auto;
            margin-right: auto;
        }
        .click-sesgo {
            margin-top: 20px;
        }
    }
     .title-svg {
        position: relative;
    }
    .title-svg svg {
        width: 30px;
        height: 30px;
        position: absolute;
        top: 12px;
        right: 5px;
        opacity: 0.8;
    }
</style>


<section class="pedagogias-digitales-section bg-gris   sm:p-10 sm:mb-10  pb-4 text-2xl 0 ">
    <article class="container h-auto mx-auto py-10 px-2 sm:p-10 sm:mb-10  ">
        <div class="flex flex-wrap sm:grid  sm:grid-cols-4  sm:gap-8 mb-10 mt-14">
            <!-- <div class="col-span-4 grid sm:grid-cols-6  grid-cols-1 "> -->
            <div class=" sm:col-span-4 flex flex-wrap ">

                <div class="flex flex-wrap justify-between sm:flex   	 ">
                    <div class="w-2/5  flex flex-initial order-1  sm:flex-col sm:w-auto sm:flex-grow-0  sm:order-none justify-items-center ">
                        <img src="RUTA-17.svg" alt="Ícono de cambio" class="w-2/2 h-20  ">
                        <span class="pl-1 text-4xl text-left fushia-text sm:text-2xl sm:text-center">LA RUTA</span> 
                    </div>
                    <div class="flex-1 order-3 sm:order-none  sm:px-4 	">
                        <h1 class="text-4xl verdeClaro-text text-left pl-0 sm:text-left sm:w-4/4 mt-4  sm:pl-4  sm:verdeClaro-text mb-5 mx-0 uppercase leading-none">
                            <!-- <span class="fushia-text"> </span>  -->
                            ¿Cuáles sesgos te hacen vulnerables frente a la desinformación?
                        </h1>
                    </div>
                    <div class="w-auto  sm:order-last p-4 order-2 circle	title-svg">
                        <p class=" text-2xl sm:p-0  justify-items-right text-right fontVacia uppercase circle">
                            quinto
                        </p>
                        <svg x="0px" y="0px" viewBox="0 0 95 93">
                            <g>
                                <circle fill="#8AE5EE" cx="46.71" cy="47.57" r="45.5"/>
                            </g>
                        </svg>
        
                    </div>
            
                </div>
            </div>
            <div class="sm:col-span-2 my-auto  ">
               
                <p class="fontVacia text-xs">RTA/</p>
                <p class="font-sans text-white mb-5 leading-none ">
                    <span class="fushia-text leading-none"></span>
                    Así como las heurísticas existen decenas de sesgos que nos afectan en la vida diaria; Empezaremos con tres de esos sesgos que tienen un efecto sobre ti.
                </p>
                <p class="font-sans text-white mb-5 leading-none">
                    <span class="fushia-text"></span>
                    Muchas veces, una de las mejores estrategias para combatir algunos de estos sesgos es desarrollar nuestra
                </p>
                <!-- <hr > -->
                <!-- <div class="grid sm:grid-cols-3 gap-0 pt-4 spac-x-0">
                    <div class="w-12">
                        <img src="/icons/icon-document.png" alt="Ícono de cambio" class=" ">
                    </div>
                    <div class="sm:col-span-2">
                        <h3 class="fushia-text">
                            INTRODUCCIÓN
                        </h3>
    
                        <h3 class=" verdeClaro-text mb-5 uppercase leading-none">
                            INTERNET SE HA DESPLEGADO EN NUESTRA VIDA COTIDIANA
    
                        </h3>
                    </div>
                </div> -->

                <div class=" sm:container flex flex-wrap  pt-4 spac-x-0">
                    <!-- <div class="w-1/5 ">
                        <img src="/icons/icon-document.png" alt="Ícono de cambio" class="w-16 p-0 m-0">
                    </div>
                    <div class="w-3/5">
                        <h3 class="fushia-text">
                            CAPÍTULO 8
                        </h3>
    
                        <h3 class=" verdeClaro-text mb-5 uppercase leading-none">
                            INFORMACIÓN Y DESINFORMACIÓN EN REDES: NO TODO LO QUE SE VIRALIZA ES VERDADERO    
                        </h3>
                    </div>
                    <div class="w-1/5"></div>
                    <div class="w-1/5"></div> -->
                    
                    <button type="button" class="text-2xl ml-14  sm:ml-0 h-10 sm:w-18 fushia-bg px-20  text-white uppercase empatia-button   "  on:click={showEmpatia}>empatia</button>

                </div>
            </div>

            <div class="sm:col-span- mx-auto text-white flex flex-col gap-3 sm:gap-10 max-h-434px">
                <div class=" mx-auto sm:mx-0 h-1  flex items-start mb-5 click-sesgo">
                    click en el sesgo
                </div>
                <!-- <div class="visible sm:invisible sm:h-0 sm:w-1 flex text-white ml-20 pl-4 sm:ml-0 sm:pl-0  mb-5 leading-none ">
                    
                    click en el sesgo
                </div> -->
                    <!-- <button type="button" class="visible sm:invisible text-2xl  sm:w-18 sm:h-0 fushia-bg px-20  text-white uppercase    "  on:click={showEmpatia}>empatia</button> -->
                    <div class=" text-2xl h-10 pt-1 w-56 sm:w-18 fushia-bg  text-center text-white uppercase    " >
                        <button type="button"  on:click={showDisonancia}>disonancia cognitiva</button>
                    </div>
                    <div class=" text-2xl h-10 pt-1 w-56 sm:w-18 fushia-bg  text-center text-white uppercase    " >
                        <button type="button"   on:click={showConfirmacion}>sesgo de confirmación</button>
                    </div>
                    <div class=" text-2xl h-10 pt-1 w-56 sm:w-18 fushia-bg  text-center text-white uppercase    " >
                        <button type="button"   on:click={showAtribucion}>sesgo de atribución</button>
                    </div>

           
                
            </div>
            
        </div>
    </article>


</section>