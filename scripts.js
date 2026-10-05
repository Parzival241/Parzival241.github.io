/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 
const idiomaActual = document.getElementById('navbarDropdownIdiomas');
const listaIdiomas = document.getElementById('idiomas');
const idiomas = document.getElementsByClassName('opcion');
const opcionesArray = document.querySelectorAll('.opcion');

const positionInfo = document.getElementById('position-info');
const subject1 = document.getElementById('subject1');
const subject2 = document.getElementById('subject2');
const subject3 = document.getElementById('subject3');
const portfolioSection = document.getElementById('portfolio-heading');
const currentJob = document.getElementById('current-job');
const aboutHeading = document.getElementById('about-heading');
const contactHeading = document.getElementById('contact-heading');
const current = document.getElementById('job');
const aboutText = document.getElementById('about-content');
const aboutText2 = document.getElementById('about-content-2');
const modal1Text = document.getElementById('modal1-text');
const contactText = document.getElementById('contact-text');


window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    }; 

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


opcionesArray.forEach((opcion) => {
    opcion.addEventListener('click', (e) => {
        e.preventDefault();
        const spanText = opcion.querySelector('span');
        if (spanText) {
            const idioma = spanText.textContent.trim().toLowerCase();
            establecerIdioma(idioma);
        }
    });
});

function establecerIdioma(idioma) {
    idiomaActual.getElementsByTagName('img')[0].src = `assets/banderas/${idioma}.png`;
    switch (idioma) {
        case 'español':
           subject1.textContent = "Experiencia";
            subject2.textContent = "Acerca de mí";
            subject3.textContent = "Contacto";
            portfolioSection.textContent = "EXPERIENCIA"; //id es portafolio pero el texto dira experiencia
            currentJob.textContent = "Soporte técnico de TI";
            aboutHeading.textContent = "Acerca de mí";
            contactHeading.textContent = "Contacto";
            current.textContent = "Soporte técnico de TI";
            aboutText.textContent = "Mi trayectoria me ha permitido desarrollar una combinación muy valiosa que une el mundo técnico con el lado humano. Gracias a mi experiencia en servicio al cliente, mi rol como supervisor en un call center y mi etapa como Especialista de Soporte IT (L1), he cultivado una sólida comunicación asertiva, paciencia y una alta inteligencia emocional. Estas habilidades me permiten escuchar de manera activa, mantener la calma frente a usuarios frustrados y entender la raíz de sus problemas. Además, esta capacidad de empatizar me facilita integrarme de manera fluida en equipos de trabajo y actuar como un puente natural: sé cómo diagnosticar un problema y explicar soluciones técnicas complejas con palabras sencillas, traduciendo las necesidades de los usuarios en resultados efectivos.";
            aboutText2.textContent = "Por otro lado, mi formación como tecnólogo y actual estudiante de ingeniería, sumada a mi experiencia como desarrollador frontend y soporte técnico, ha forjado en mí una gran adaptabilidad y un enfoque muy analítico para la resolución de problemas. Al ser una persona que aprende de forma autodidacta y que siente una profunda curiosidad por diversas ramas del software, he desarrollado una mentalidad ágil y flexible. Aunque no me enfoco en un solo nicho, mi visión generalista me permite no paralizarme ante lo desconocido, investigar errores paso a paso y asimilar nuevos conceptos con rapidez. Esta versatilidad me define como un profesional resiliente, capaz de conectar ideas de distintos campos tecnológicos para encontrar la falla, adaptarme y aportar soluciones creativas a cualquier proyecto.";
            modal1Text.textContent = "Como Especialista de Soporte IT L1, mi enfoque principal es garantizar la continuidad operativa de los usuarios. Mis responsabilidades clave incluyen la gestión y resolución de tickets, el diagnóstico de incidentes de hardware y software, y brindar soporte técnico tanto remoto como presencial. Además, me encargo de la gestión de identidades y accesos (como Active Directory), la documentación técnica y el escalamiento eficiente de problemas complejos a niveles superiores (L2/L3), asegurando siempre una comunicación clara y oportuna.";
            contactText.textContent = "Para oportunidades laborales, proyectos freelance o cualquier propuesta de colaboración, no dudes en ponerte en contacto conmigo. Siempre estoy abierto a nuevos retos y formas de aportar valor. Puedes escribirme directamente a: cesar.gtz.2017@gmail.com. ¡Estaré encantado de platicar contigo!";

            break;
        case 'english':
            positionInfo.textContent = "Developer - IT support specialist";
            subject1.textContent = "Experience";
            subject2.textContent = "About me";
            subject3.textContent = "Contact";
            portfolioSection.textContent = "EXPERIENCE"; 
            currentJob.textContent = "IT support specialist";  
            aboutHeading.textContent = "About Me";
            contactHeading.textContent = "Contact"; 
            current.textContent = "IT support specialist";  
            aboutText.textContent ="My career path has allowed me to develop a valuable combination that bridges the technical and human worlds. Thanks to my background in customer service, my role as a call center supervisor, and my time as an IT Support Specialist (L1), I have cultivated strong assertive communication, patience, and high emotional intelligence. These skills enable me to listen actively, stay calm when dealing with frustrated users, and understand the root of their problems. Furthermore, this empathy allows me to seamlessly integrate into teams and act as a natural bridge: I know how to diagnose issues and explain complex technical solutions in simple terms, translating user needs into effective results.";
            aboutText2.textContent ="On the other hand, my background as a software technologist and current engineering student, combined with my experience as a frontend developer and in technical support, has forged a strong adaptability and a highly analytical approach to problem-solving. Being self-taught with a deep curiosity for various software domains, I have developed an agile and flexible mindset. While I don't confine myself to a single niche, my generalist perspective ensures I never freeze in the face of the unknown; instead, I troubleshoot step-by-step and grasp new concepts quickly. This versatility defines me as a resilient professional, capable of connecting ideas across different technological fields to find the bug, adapt, and bring creative solutions to any project.";
             modal1Text.textContent = "As an IT Support Specialist L1, my main focus is ensuring the operational continuity for users. My key responsibilities include ticket management and resolution, initial troubleshooting for hardware and software incidents, and providing both remote and on-site technical support. Additionally, I handle identity and access management (such as Active Directory), technical documentation, and the efficient escalation of complex issues to higher tiers (L2/L3), always maintaining clear and timely communication.";
            contactText.textContent = "For job opportunities, freelance projects, or any collaboration proposals, please feel free to reach out. I am always open to new challenges and ways to add value. You can contact me directly at: cesar.gtz.2017@gmail.com. I would be glad to connect and discuss how we can work together!";
             break;
        case 'français':
            positionInfo.textContent = "Développeur - Spécialiste du support informatique";
            subject1.textContent = "Expérience";
            subject2.textContent = "À propos de moi";
            subject3.textContent = "Contact";
            portfolioSection.textContent = "EXPÉRIENCE";
            currentJob.textContent = "Spécialiste du support informatique";
            aboutHeading.textContent = "À propos de moi";
            contactHeading.textContent = "Contact";
            current.textContent = "Spécialiste du support informatique";
            aboutText.textContent ="Mon parcours m'a permis de développer une combinaison très précieuse qui relie le monde technique au côté humain. Grâce à mon expérience dans le service client, à mon rôle de superviseur en centre d'appels et à mon passage en tant que spécialiste du support informatique (L1), j'ai cultivé une solide communication assertive, de la patience et une grande intelligence émotionnelle. Ces compétences me permettent d'écouter activement, de garder mon calme face à des utilisateurs frustrés et de comprendre la source de leurs problèmes. De plus, cette capacité d'empathie facilite mon intégration au sein des équipes de travail et me permet d'agir comme un pont naturel : je sais diagnostiquer un problème et expliquer des solutions techniques complexes avec des mots simples, en traduisant les besoins des utilisateurs en résultats concrets.";
            aboutText2.textContent ="D'autre part, ma formation en tant que technologue en développement logiciel et mes études actuelles en ingénierie, combinées à mon expérience comme développeur frontend et en support technique, ont forgé en moi une grande adaptabilité et une approche très analytique de la résolution de problèmes. Étant autodidacte et animé par une profonde curiosité pour diverses branches du logiciel, j'ai développé un état d'esprit agile et flexible. Bien que je ne me limite pas à un seul domaine d'expertise, ma vision généraliste m'empêche de rester bloqué face à l'inconnu ; j'analyse plutôt les erreurs étape par étape et j'assimile rapidement de nouveaux concepts. Cette polyvalence me définit comme un professionnel résilient, capable de connecter des idées issues de différents domaines technologiques pour identifier les failles, m'adapter et apporter des solutions créatives à n'importe quel projet.";
            modal1Text.textContent = "En tant que Spécialiste du Support Informatique L1, mon objectif principal est d'assurer la continuité opérationnelle des utilisateurs. Mes responsabilités clés incluent la gestion et la résolution des tickets d'assistance, le diagnostic des incidents matériels et logiciels, ainsi que le support technique à distance et sur site. De plus, je m'occupe de la gestion des accès et des identités (comme Active Directory), de la documentation technique et de l'escalade efficace des problèmes complexes vers les niveaux supérieurs (L2/L3), tout en assurant une communication claire et réactive.";
            contactText.textContent = "Pour des opportunités professionnelles, des projets en freelance ou toute proposition de collaboration, n'hésitez pas à me contacter. Je suis toujours ouvert à de nouveaux défis et prêt à apporter de la valeur. Vous pouvez m'écrire directement à : cesar.gtz.2017@gmail.com. Je serai ravi d'échanger avec vous !";
            break;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    switch(navigator.language.slice(0,2)){
        case 'es':
            establecerIdioma('español');
            break;
        case 'en':
            establecerIdioma('english');
            break;
        case 'fr':
            establecerIdioma('français');
            break;
        default:
            establecerIdioma('español');
    }
});