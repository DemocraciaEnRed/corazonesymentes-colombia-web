!function(){"use strict";const n=1640186881424,e=`cache${n}`,o=["/client/client.a83ee005.js","/client/inject_styles.5607aec6.js","/client/index.8bb57567.js"].concat(["/service-worker-index.html","/15.svg","/CNAME","/CORAZONES Y MENTES COLOMBIA-02.svg","/CORAZONES Y MENTES COLOMBIA-peque.png","/LOGO_EXTITUTO-11.png","/Logo_DIP_horizontal.png","/RUTA-17.svg","/background-tech.png","/banner-mobile.jpg","/banner-tablet.jpg","/banner.jpg","/cambio.png","/celular.png","/cerebri.png","/cerebro_celeste.png","/cerebro_enchufe.svg","/check.png","/circulo.svg","/comentarios18.svg","/comentarioscorazon16.svg","/computadora.png","/developers2.png","/dialog.png","/documents/CAPÍTULO_1_C&M.pdf","/documents/CAPÍTULO_2_C&M.pdf","/documents/CAPÍTULO_3_C&M.pdf","/documents/CAPÍTULO_4_C&M.pdf","/documents/CAPÍTULO_5_C&M.pdf","/documents/CAPÍTULO_6_C&M.pdf","/documents/CAPÍTULO_7_C&M.pdf","/documents/CAPÍTULO_8_C&M.pdf","/documents/Corazones-y-mentes.pdf","/excl_globo.png","/favicon-cuadrado.png","/favicon.png","/fonts/Amfibia.otf","/fonts/Staatliches-Regular.ttf","/fonts/circular.otf","/formulario.png","/global.css","/guia.svg","/herramientas.png","/icons/app.png","/icons/article-icon.png","/icons/download.png","/icons/icon-document.png","/icons/mando.png","/icons/mando.svg","/icons/open-link.png","/icons/podcast-icon.png","/icons/puzzle.png","/icons/video-icon.png","/ideas.png","/ideas2.png","/imagenejemplo.png","/incognita22.svg","/internet.png","/less.png","/logo-circular.png","/logo-horizontal-peque.png","/logo-horizontal.html","/logo-horizontal.png","/logo-horizontal_files/logo-horizontal.png","/mando.png","/mando.svg","/manifest.json","/manos21.svg","/minu-logo.png","/more.png","/nocomocuenta.png","/ojo.png","/open.png","/play.png","/puzzle.png","/sesgo17.svg","/social-media-icons/facebook.svg","/social-media-icons/instagram.svg","/social-media-icons/linkedin.svg","/social-media-icons/twitter.svg","/social-media-icons/youtube.svg","/sos-docente.png","/sosdocente-hero.png","/thumbs-up.svg","/triangulook19.svg","/video.png","/xyz20.svg"]),s=new Set(o);self.addEventListener("install",(n=>{n.waitUntil(caches.open(e).then((n=>n.addAll(o))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(n=>{n.waitUntil(caches.keys().then((async n=>{for(const o of n)o!==e&&await caches.delete(o);self.clients.claim()})))})),self.addEventListener("fetch",(e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const o=new URL(e.request.url),t=o.protocol.startsWith("http"),c=o.hostname===self.location.hostname&&o.port!==self.location.port,a=o.host===self.location.host&&s.has(o.pathname),i="only-if-cached"===e.request.cache&&!a;!t||c||i||e.respondWith((async()=>a&&await caches.match(e.request)||async function(e){const o=await caches.open(`offline${n}`);try{const n=await fetch(e);return o.put(e,n.clone()),n}catch(n){const s=await o.match(e);if(s)return s;throw n}}(e.request))())}))}();
