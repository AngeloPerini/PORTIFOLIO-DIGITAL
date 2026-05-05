import type { PortfolioData } from '../types/portfolio';
import { createAbstractPreview } from '../utils/portfolio';

const publicAsset = (path: string): string => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;

export const portfolio: PortfolioData = {
  profile: {
    name: 'Angelo Perini',
    role: {
      pt: 'Desenvolvedor independente focado em SaaS, automação e sistemas de gestão',
      en: 'Independent developer focused on SaaS, automation, and management systems',
      es: 'Desarrollador independiente enfocado en SaaS, automatización y sistemas de gestión',
      it: 'Sviluppatore indipendente focalizzato su SaaS, automazione e sistemi gestionali',
    },
    microTitle: {
      pt: 'Frontend moderno, backend estruturado e banco de dados para sistemas completos',
      en: 'Modern frontend, structured backend, and database delivery for complete systems',
      es: 'Frontend moderno, backend estructurado y base de datos para sistemas completos',
      it: 'Frontend moderno, backend strutturato e database per sistemi completi',
    },
    headline: {
      pt: 'Construo sistemas completos para operações reais, com clareza técnica e foco em entrega.',
      en: 'I build complete systems for real operations, with technical clarity and delivery focus.',
      es: 'Construyo sistemas completos para operaciones reales, con claridad técnica y foco en la entrega.',
      it: 'Costruisco sistemi completi per operazioni reali, con chiarezza tecnica e focus sulla delivery.',
    },
    subheadline: {
      pt: 'Sou desenvolvedor independente e estudante de Análise e Desenvolvimento de Sistemas, com experiência prática em SaaS, automação de processos e software de gestão.',
      en: 'I am an independent developer and Systems Analysis and Development student, with hands-on experience in SaaS, process automation, and management software.',
      es: 'Soy desarrollador independiente y estudiante de Análisis y Desarrollo de Sistemas, con experiencia práctica en SaaS, automatización de procesos y software de gestión.',
      it: 'Sono uno sviluppatore indipendente e studente di Analisi e Sviluppo dei Sistemi, con esperienza pratica in SaaS, automazione dei processi e software gestionali.',
    },
    longBio: {
      pt: 'Atuo como desenvolvedor independente construindo software de ponta a ponta. Meu trabalho combina frontend moderno, backend estruturado e banco de dados para transformar necessidades operacionais em sistemas utilizáveis, organizados e prontos para evoluir.',
      en: 'I work as an independent developer building software end to end. My work combines modern frontend, structured backend, and database design to turn operational needs into usable, organized systems that are ready to evolve.',
      es: 'Trabajo como desarrollador independiente construyendo software de punta a punta. Mi trabajo combina frontend moderno, backend estructurado y bases de datos para convertir necesidades operativas en sistemas utilizables, organizados y listos para evolucionar.',
      it: 'Lavoro come sviluppatore indipendente costruendo software end to end. Il mio lavoro combina frontend moderno, backend strutturato e database per trasformare esigenze operative in sistemi utilizzabili, organizzati e pronti a evolvere.',
    },
    availability: {
      pt: 'Disponível para projetos freelance e oportunidades internacionais.',
      en: 'Available for freelance and international projects.',
      es: 'Disponible para proyectos freelance y oportunidades internacionales.',
      it: 'Disponibile per progetti freelance e opportunità internazionali.',
    },
    location: {
      pt: 'Brasil · colaboração remota para empresas e equipes internacionais',
      en: 'Brazil · remote collaboration for companies and international teams',
      es: 'Brasil · colaboración remota para empresas y equipos internacionales',
      it: 'Brasile · collaborazione remota per aziende e team internazionali',
    },
    responseTime: {
      pt: 'Normalmente em até 24 horas úteis',
      en: 'Usually within 24 business hours',
      es: 'Normalmente dentro de 24 horas hábiles',
      it: 'Di solito entro 24 ore lavorative',
    },
    stackHighlights: ['React', 'ASP.NET Core', 'Supabase', 'PostgreSQL', 'Flutter', 'Tailwind CSS'],
    highlights: [
      {
        pt: 'Desenvolvedor independente com foco em soluções reais, não apenas interfaces conceituais.',
        en: 'Independent developer focused on real solutions, not only conceptual interfaces.',
        es: 'Desarrollador independiente enfocado en soluciones reales, no solo en interfaces conceptuales.',
        it: 'Sviluppatore indipendente focalizzato su soluzioni reali, non solo su interfacce concettuali.',
      },
      {
        pt: 'Estudante de Análise e Desenvolvimento de Sistemas com prática em sistemas completos.',
        en: 'Systems Analysis and Development student with practical experience in complete systems.',
        es: 'Estudiante de Análisis y Desarrollo de Sistemas con experiencia práctica en sistemas completos.',
        it: 'Studente di Analisi e Sviluppo dei Sistemi con esperienza pratica in sistemi completi.',
      },
      {
        pt: 'Atuação em SaaS, automação de processos e software de gestão.',
        en: 'Work centered on SaaS, process automation, and management software.',
        es: 'Trabajo centrado en SaaS, automatización de procesos y software de gestión.',
        it: 'Lavoro centrato su SaaS, automazione dei processi e software gestionali.',
      },
      {
        pt: 'Entrega combinando frontend moderno, backend estruturado e banco de dados.',
        en: 'Delivery that combines modern frontend, structured backend, and database implementation.',
        es: 'Entrega que combina frontend moderno, backend estructurado e implementación de base de datos.',
        it: 'Delivery che combina frontend moderno, backend strutturato e implementazione del database.',
      },
      {
        pt: 'Interesse em colaboração com empresas e clientes do mercado internacional.',
        en: 'Actively interested in collaborating with international companies and clients.',
        es: 'Interés activo en colaborar con empresas y clientes del mercado internacional.',
        it: 'Interesse concreto nel collaborare con aziende e clienti del mercato internazionale.',
      },
    ],
    commandSamples: [
      {
        pt: 'building condominium SaaS with ASP.NET Core and React',
        en: 'building condominium SaaS with ASP.NET Core and React',
        es: 'building condominium SaaS with ASP.NET Core and React',
        it: 'building condominium SaaS with ASP.NET Core and React',
      },
      {
        pt: 'structuring industrial maintenance workflows in Flutter',
        en: 'structuring industrial maintenance workflows in Flutter',
        es: 'structuring industrial maintenance workflows in Flutter',
        it: 'structuring industrial maintenance workflows in Flutter',
      },
      {
        pt: 'delivering frontend, backend and database as one system',
        en: 'delivering frontend, backend and database as one system',
        es: 'delivering frontend, backend and database as one system',
        it: 'delivering frontend, backend and database as one system',
      },
    ],
    metrics: [
      {
        value: '2',
        label: {
          pt: 'sistemas reais já apresentados no portfólio',
          en: 'real systems currently showcased in the portfolio',
          es: 'sistemas reales ya presentados en el portafolio',
          it: 'sistemi reali attualmente mostrati nel portfolio',
        },
      },
      {
        value: '4',
        label: {
          pt: 'idiomas disponíveis no site',
          en: 'languages available on the site',
          es: 'idiomas disponibles en el sitio',
          it: 'lingue disponibili nel sito',
        },
      },
      {
        value: 'Full Stack',
        label: {
          pt: 'entrega de frontend, backend e banco de dados',
          en: 'delivery across frontend, backend, and database',
          es: 'entrega en frontend, backend y base de datos',
          it: 'delivery tra frontend, backend e database',
        },
      },
    ],
    services: [
      {
        title: {
          pt: 'SaaS e sistemas de gestão',
          en: 'SaaS and management systems',
          es: 'SaaS y sistemas de gestión',
          it: 'SaaS e sistemi gestionali',
        },
        description: {
          pt: 'Construção de plataformas web para operações administrativas, controle e crescimento de produto.',
          en: 'Building web platforms for administrative operations, control, and product growth.',
          es: 'Construcción de plataformas web para operaciones administrativas, control y crecimiento del producto.',
          it: 'Costruzione di piattaforme web per operazioni amministrative, controllo e crescita del prodotto.',
        },
      },
      {
        title: {
          pt: 'Automação de processos',
          en: 'Process automation',
          es: 'Automatización de procesos',
          it: 'Automazione dei processi',
        },
        description: {
          pt: 'Fluxos desenhados para reduzir trabalho manual e organizar processos recorrentes.',
          en: 'Flows designed to reduce manual work and organize recurring processes.',
          es: 'Flujos diseñados para reducir trabajo manual y organizar procesos recurrentes.',
          it: 'Flussi progettati per ridurre il lavoro manuale e organizzare i processi ricorrenti.',
        },
      },
      {
        title: {
          pt: 'Frontend moderno para software real',
          en: 'Modern frontend for real software',
          es: 'Frontend moderno para software real',
          it: 'Frontend moderno per software reale',
        },
        description: {
          pt: 'Interfaces claras, responsivas e voltadas para uso diário em operações e plataformas.',
          en: 'Clear, responsive interfaces designed for daily operational use and platform workflows.',
          es: 'Interfaces claras, responsivas y pensadas para uso diario en operaciones y plataformas.',
          it: 'Interfacce chiare, responsive e pensate per uso quotidiano in operazioni e piattaforme.',
        },
      },
      {
        title: {
          pt: 'Backend e banco de dados estruturados',
          en: 'Structured backend and database',
          es: 'Backend y base de datos estructurados',
          it: 'Backend e database strutturati',
        },
        description: {
          pt: 'Arquitetura preparada para autenticação, persistência, crescimento de dados e novas regras de negócio.',
          en: 'Architecture prepared for authentication, persistence, data growth, and new business rules.',
          es: 'Arquitectura preparada para autenticación, persistencia, crecimiento de datos y nuevas reglas de negocio.',
          it: 'Architettura pronta per autenticazione, persistenza, crescita dei dati e nuove regole di business.',
        },
      },
    ],
    principles: [
      {
        title: {
          pt: 'Escopo realista',
          en: 'Realistic scope',
          es: 'Alcance realista',
          it: 'Scope realistico',
        },
        description: {
          pt: 'Prefiro comunicação direta e entregas coerentes com o que o sistema realmente precisa.',
          en: 'I prefer direct communication and deliveries that match what the system actually needs.',
          es: 'Prefiero comunicación directa y entregas coherentes con lo que el sistema realmente necesita.',
          it: 'Preferisco comunicazione diretta e delivery coerenti con ciò che il sistema richiede davvero.',
        },
      },
      {
        title: {
          pt: 'Software completo',
          en: 'Complete software',
          es: 'Software completo',
          it: 'Software completo',
        },
        description: {
          pt: 'Meu foco é conectar interface, regras de negócio e dados em um fluxo único e consistente.',
          en: 'My focus is to connect interface, business rules, and data into one consistent flow.',
          es: 'Mi enfoque es conectar interfaz, reglas de negocio y datos en un flujo único y consistente.',
          it: 'Il mio focus è collegare interfaccia, regole di business e dati in un flusso unico e coerente.',
        },
      },
      {
        title: {
          pt: 'Clareza profissional',
          en: 'Professional clarity',
          es: 'Claridad profesional',
          it: 'Chiarezza professionale',
        },
        description: {
          pt: 'Busco entregar sistemas que sejam compreensíveis, utilizáveis e apresentáveis para empresas.',
          en: 'I aim to deliver systems that are understandable, usable, and presentable to companies.',
          es: 'Busco entregar sistemas que sean comprensibles, utilizables y presentables para empresas.',
          it: 'Punto a consegnare sistemi comprensibili, utilizzabili e presentabili per aziende.',
        },
      },
    ],
    process: [
      {
        step: '01',
        title: {
          pt: 'Entendimento do problema',
          en: 'Problem understanding',
          es: 'Entendimiento del problema',
          it: 'Comprensione del problema',
        },
        description: {
          pt: 'Levantamento do contexto operacional, das necessidades e da lógica principal do sistema.',
          en: 'Mapping the operational context, the needs, and the core logic of the system.',
          es: 'Levantamiento del contexto operativo, las necesidades y la lógica principal del sistema.',
          it: 'Analisi del contesto operativo, delle esigenze e della logica principale del sistema.',
        },
      },
      {
        step: '02',
        title: {
          pt: 'Estrutura técnica',
          en: 'Technical structure',
          es: 'Estructura técnica',
          it: 'Struttura tecnica',
        },
        description: {
          pt: 'Definição de frontend, backend, autenticação, dados e organização dos principais fluxos.',
          en: 'Definition of frontend, backend, authentication, data, and organization of the main flows.',
          es: 'Definición de frontend, backend, autenticación, datos y organización de los principales flujos.',
          it: 'Definizione di frontend, backend, autenticazione, dati e organizzazione dei flussi principali.',
        },
      },
      {
        step: '03',
        title: {
          pt: 'Implementação completa',
          en: 'Complete implementation',
          es: 'Implementación completa',
          it: 'Implementazione completa',
        },
        description: {
          pt: 'Construção do sistema com foco em uso real, organização do código e consistência visual.',
          en: 'Building the system for real use, clean code organization, and visual consistency.',
          es: 'Construcción del sistema para uso real, organización del código y consistencia visual.',
          it: 'Costruzione del sistema per uso reale, organizzazione del codice e coerenza visiva.',
        },
      },
      {
        step: '04',
        title: {
          pt: 'Ajuste e evolução',
          en: 'Refinement and evolution',
          es: 'Ajuste y evolución',
          it: 'Rifinitura ed evoluzione',
        },
        description: {
          pt: 'Refinos, novas regras e expansão futura sem perder a base já construída.',
          en: 'Refinements, new rules, and future expansion without losing the structure already built.',
          es: 'Ajustes, nuevas reglas y expansión futura sin perder la base ya construida.',
          it: 'Rifiniture, nuove regole ed espansione futura senza perdere la base già costruita.',
        },
      },
    ],
    skills: [
      {
        category: { pt: 'Frontend', en: 'Frontend', es: 'Frontend', it: 'Frontend' },
        items: ['React', 'Vue.js', 'JavaScript', 'TypeScript', 'Tailwind CSS'],
      },
      {
        category: { pt: 'Backend', en: 'Backend', es: 'Backend', it: 'Backend' },
        items: ['C#', 'ASP.NET Core', 'Node.js'],
      },
      {
        category: { pt: 'Banco de Dados', en: 'Database', es: 'Base de Datos', it: 'Database' },
        items: ['PostgreSQL', 'Supabase', 'MySQL', 'SQLite'],
      },
      {
        category: { pt: 'Outros', en: 'Other', es: 'Otros', it: 'Altro' },
        items: ['Docker', 'Firebase', 'GitHub', 'REST APIs'],
      },
    ],
  },
  contacts: {
    whatsapp: 'https://api.whatsapp.com/send/?phone=5579998523375&text=Ola+Angelo%2C+gostaria+de+saber+mais+sobre+seus+servi%C3%A7os&type=phone_number&app_absent=0',
    instagram: 'https://www.instagram.com/p1_angelo/',
    email: 'mailto:angelo.perini351@gmail.com',
    emailAddress: 'angelo.perini351@gmail.com',
  },
  projects: [
    {
      slug: 'condominium-management-saas',
      name: {
        pt: 'Gerenciamento de Condomínio',
        en: 'Condominium Management SaaS',
        es: 'Condominium Management SaaS',
        it: 'Condominium Management SaaS',
      },
      summary: {
        pt: 'Plataforma SaaS para gestão de condomínios com reservas, eventos, dashboard administrativo e arquitetura multi-tenant white-label.',
        en: 'SaaS platform for condominium management with reservations, events, administrative dashboards, and a white-label multi-tenant architecture.',
        es: 'Plataforma SaaS para gestión de condominios con reservas, eventos, dashboard administrativo y arquitectura multi-tenant white-label.',
        it: 'Piattaforma SaaS per la gestione dei condomini con prenotazioni, eventi, dashboard amministrativo e architettura multi-tenant white-label.',
      },
      description: {
        pt: 'Sistema completo voltado para administração condominial, com estrutura para atender múltiplos condomínios, personalização por cliente e operação centralizada.',
        en: 'A complete system designed for condominium administration, structured to support multiple properties, per-client customization, and centralized operations.',
        es: 'Sistema completo orientado a la administración de condominios, estructurado para atender múltiples condominios, personalización por cliente y operación centralizada.',
        it: 'Sistema completo pensato per l’amministrazione condominiale, strutturato per supportare più condomini, personalizzazione per cliente e operazione centralizzata.',
      },
      industry: {
        pt: 'Gestão condominial',
        en: 'Condominium management',
        es: 'Gestión de condominios',
        it: 'Gestione condominiale',
      },
      image: publicAsset('projects/condominio/condominio-login.jpg'),
      imageAlt: {
        pt: 'Tela de login personalizada do sistema de gerenciamento de condomínio Residencial Jardim das Palmeiras.',
        en: 'Customized login screen for the Residencial Jardim das Palmeiras condominium management system.',
        es: 'Pantalla de login personalizada del sistema de gestión de condominios Residencial Jardim das Palmeiras.',
        it: 'Schermata di login personalizzata del sistema di gestione condominiale Residencial Jardim das Palmeiras.',
      },
      gallery: [
        {
          src: publicAsset('projects/condominio/condominio-dashboard.jpg'),
          alt: {
            pt: 'Dashboard administrativo do condomínio com atalhos, indicadores e visão geral operacional.',
            en: 'Condominium admin dashboard with shortcuts, indicators, and operational overview.',
            es: 'Dashboard administrativo del condominio con accesos rápidos, indicadores y visión operativa general.',
            it: 'Dashboard amministrativo del condominio con scorciatoie, indicatori e panoramica operativa.',
          },
        },
        {
          src: publicAsset('projects/condominio/condominio-reservas.jpg'),
          alt: {
            pt: 'Tela de espaços e reservas com churrasqueira selecionada, regras e dados de agendamento.',
            en: 'Spaces and reservations screen with barbecue area selected, rules, and booking details.',
            es: 'Pantalla de espacios y reservas con parrilla seleccionada, reglas y datos de agenda.',
            it: 'Schermata spazi e prenotazioni con area barbecue selezionata, regole e dati di prenotazione.',
          },
        },
        {
          src: publicAsset('projects/condominio/condominio-financeiro.jpg'),
          alt: {
            pt: 'Fila de reservas do condomínio com status financeiro, solicitante e ações administrativas.',
            en: 'Condominium reservation queue with financial status, requester, and administrative actions.',
            es: 'Fila de reservas del condominio con estado financiero, solicitante y acciones administrativas.',
            it: 'Coda delle prenotazioni del condominio con stato finanziario, richiedente e azioni amministrative.',
          },
        },
        {
          src: publicAsset('projects/condominio/condominio-comunicados-editor.jpg'),
          alt: {
            pt: 'Editor de comunicados do condomínio com formulário e prévia do feed.',
            en: 'Condominium announcements editor with form and feed preview.',
            es: 'Editor de comunicados del condominio con formulario y vista previa del feed.',
            it: 'Editor comunicati del condominio con modulo e anteprima del feed.',
          },
        },
        {
          src: publicAsset('projects/condominio/condominio-comunicados-feed.jpg'),
          alt: {
            pt: 'Feed de comunicados e alertas do condomínio com filtros por status e categoria.',
            en: 'Condominium announcements and alerts feed with status and category filters.',
            es: 'Feed de comunicados y alertas del condominio con filtros por estado y categoría.',
            it: 'Feed di comunicati e avvisi del condominio con filtri per stato e categoria.',
          },
        },
      ],
      stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'ASP.NET Core', 'PostgreSQL', 'Supabase'],
      status: {
        pt: 'Pronto para produção',
        en: 'Production Ready',
        es: 'Listo para producción',
        it: 'Pronto per la produzione',
      },
      badges: ['SaaS', 'Full Stack', 'Multi-Tenant', 'White Label'],
      relevanceScore: 100,
      features: [
        {
          pt: 'Sistema de reservas para espaços compartilhados do condomínio.',
          en: 'Reservation system for shared condominium spaces.',
          es: 'Sistema de reservas para espacios compartidos del condominio.',
          it: 'Sistema di prenotazione per gli spazi condivisi del condominio.',
        },
        {
          pt: 'Gestão de eventos e comunicação interna para moradores.',
          en: 'Event management and internal communication for residents.',
          es: 'Gestión de eventos y comunicación interna para residentes.',
          it: 'Gestione eventi e comunicazione interna per i residenti.',
        },
        {
          pt: 'Dashboard administrativo com indicadores operacionais e visão consolidada.',
          en: 'Administrative dashboard with operational indicators and consolidated visibility.',
          es: 'Dashboard administrativo con indicadores operativos y visibilidad consolidada.',
          it: 'Dashboard amministrativo con indicatori operativi e visione consolidata.',
        },
        {
          pt: 'Autenticação com JWT para controle de acesso por perfil e contexto.',
          en: 'JWT-based authentication for profile and context-aware access control.',
          es: 'Autenticación con JWT para control de acceso por perfil y contexto.',
          it: 'Autenticazione con JWT per controllo accessi per profilo e contesto.',
        },
        {
          pt: 'Estrutura multi-condomínio com personalização por cliente.',
          en: 'Multi-condominium structure with per-client customization.',
          es: 'Estructura multi-condominio con personalización por cliente.',
          it: 'Struttura multi-condominio con personalizzazione per cliente.',
        },
      ],
      challenges: [
        {
          title: {
            pt: 'Isolamento multi-tenant',
            en: 'Multi-tenant isolation',
            es: 'Aislamiento multi-tenant',
            it: 'Isolamento multi-tenant',
          },
          description: {
            pt: 'Garantir separação de dados e regras por condomínio sem perder consistência na operação.',
            en: 'Ensure data and rules stay isolated by condominium without losing consistency across the platform.',
            es: 'Garantizar separación de datos y reglas por condominio sin perder consistencia en la plataforma.',
            it: 'Garantire separazione di dati e regole per condominio senza perdere coerenza nella piattaforma.',
          },
        },
        {
          title: {
            pt: 'Customização por cliente',
            en: 'Per-client customization',
            es: 'Personalización por cliente',
            it: 'Personalizzazione per cliente',
          },
          description: {
            pt: 'Permitir variações visuais e operacionais mantendo a base técnica centralizada.',
            en: 'Allow visual and operational variations while keeping the technical foundation centralized.',
            es: 'Permitir variaciones visuales y operativas manteniendo la base técnica centralizada.',
            it: 'Consentire variazioni visive e operative mantenendo centralizzata la base tecnica.',
          },
        },
      ],
      architecture: [
        {
          label: { pt: 'Frontend', en: 'Frontend', es: 'Frontend', it: 'Frontend' },
          value: {
            pt: 'React com Vite e Tailwind CSS para uma interface rápida, responsiva e organizada.',
            en: 'React with Vite and Tailwind CSS for a fast, responsive, and organized interface.',
            es: 'React con Vite y Tailwind CSS para una interfaz rápida, responsiva y organizada.',
            it: 'React con Vite e Tailwind CSS per un’interfaccia rapida, responsive e ordinata.',
          },
        },
        {
          label: { pt: 'Backend', en: 'Backend', es: 'Backend', it: 'Backend' },
          value: {
            pt: 'ASP.NET Core organizando autenticação, regras de negócio e endpoints principais.',
            en: 'ASP.NET Core handling authentication, business rules, and the main endpoints.',
            es: 'ASP.NET Core organizando autenticación, reglas de negocio y endpoints principales.',
            it: 'ASP.NET Core per autenticazione, regole di business e principali endpoint.',
          },
        },
        {
          label: { pt: 'Dados', en: 'Data', es: 'Datos', it: 'Dati' },
          value: {
            pt: 'PostgreSQL e Supabase para persistência, serviços de apoio e estrutura escalável.',
            en: 'PostgreSQL and Supabase for persistence, supporting services, and scalable structure.',
            es: 'PostgreSQL y Supabase para persistencia, servicios de apoyo y estructura escalable.',
            it: 'PostgreSQL e Supabase per persistenza, servizi di supporto e struttura scalabile.',
          },
        },
      ],
      outcomes: [
        {
          pt: 'Sistema preparado para operação real em múltiplos condomínios.',
          en: 'System prepared for real-world use across multiple condominiums.',
          es: 'Sistema preparado para uso real en múltiples condominios.',
          it: 'Sistema pronto per un uso reale su più condomini.',
        },
        {
          pt: 'Base técnica consistente para evolução comercial e novas funcionalidades.',
          en: 'Consistent technical foundation for commercial growth and future features.',
          es: 'Base técnica consistente para crecimiento comercial y nuevas funcionalidades.',
          it: 'Base tecnica coerente per crescita commerciale e nuove funzionalità.',
        },
      ],
    },
    {
      slug: 'society-field-booking-system',
      name: {
        pt: 'Sistema de Reservas de Quadras (Society)',
        en: 'Society Field Booking System',
        es: 'Sistema de Reservas de Canchas Society',
        it: 'Sistema di Prenotazione Campi Society',
      },
      summary: {
        pt: 'Sistema em desenvolvimento inspirado no Airbnb para encontrar, visualizar e reservar quadras society com páginas próprias por local.',
        en: 'Work-in-progress Airbnb-inspired platform to find, view, and book society football fields with dedicated venue pages.',
        es: 'Sistema en desarrollo inspirado en Airbnb para encontrar, visualizar y reservar canchas society con páginas propias por local.',
        it: 'Sistema in sviluppo ispirato ad Airbnb per trovare, visualizzare e prenotare campi society con pagine dedicate per struttura.',
      },
      description: {
        pt: 'A solução organiza a jornada de descoberta e reserva de quadras, combinando busca por arenas, páginas individuais com informações do local, horários disponíveis, disponibilidade e gestão de partidas.',
        en: 'The solution organizes the field discovery and booking journey, combining venue search, individual venue pages, available schedules, availability, and match organization workflows.',
        es: 'La solución organiza la experiencia de descubrimiento y reserva de canchas, combinando búsqueda de arenas, páginas individuales, horarios disponibles, disponibilidad y organización de partidos.',
        it: 'La soluzione organizza il percorso di scoperta e prenotazione dei campi, combinando ricerca strutture, pagine dedicate, orari disponibili, disponibilità e organizzazione partite.',
      },
      industry: {
        pt: 'Reservas esportivas',
        en: 'Sports bookings',
        es: 'Reservas deportivas',
        it: 'Prenotazioni sportive',
      },
      image: publicAsset('projects/society/society-home.png'),
      imageAlt: {
        pt: 'Página inicial do SocietyHub com busca para encontrar e reservar campos society.',
        en: 'SocietyHub homepage with search to find and book society football fields.',
        es: 'Página inicial de SocietyHub con búsqueda para encontrar y reservar canchas society.',
        it: 'Homepage di SocietyHub con ricerca per trovare e prenotare campi society.',
      },
      gallery: [
        {
          src: publicAsset('projects/society/society-encontrar-arenas.png'),
          alt: {
            pt: 'Tela de busca de arenas do SocietyHub com campos em destaque e filtros de reserva.',
            en: 'SocietyHub arena search screen with featured fields and booking filters.',
            es: 'Pantalla de búsqueda de arenas de SocietyHub con canchas destacadas y filtros de reserva.',
            it: 'Schermata di ricerca strutture SocietyHub con campi in evidenza e filtri prenotazione.',
          },
        },
        {
          src: publicAsset('projects/society/society-detalhes-arena.png'),
          alt: {
            pt: 'Página de detalhes da arena com fotos, avaliações, comodidades, horários e painel de reserva.',
            en: 'Arena detail page with photos, reviews, amenities, schedules, and booking panel.',
            es: 'Página de detalles de la arena con fotos, reseñas, comodidades, horarios y panel de reserva.',
            it: 'Pagina dettaglio arena con foto, recensioni, servizi, orari e pannello prenotazione.',
          },
        },
        {
          src: publicAsset('projects/society/society-detalhes-partida.png'),
          alt: {
            pt: 'Tela de detalhes da partida com código de convite, jogadores e divisão de times.',
            en: 'Match detail screen with invite code, players, and team split preview.',
            es: 'Pantalla de detalles del partido con código de invitación, jugadores y división de equipos.',
            it: 'Schermata dettagli partita con codice invito, giocatori e anteprima divisione squadre.',
          },
        },
        {
          src: publicAsset('projects/society/society-admin-dashboard.png'),
          alt: {
            pt: 'Dashboard administrativo com reservas, receita, ocupação e agenda do dia.',
            en: 'Admin dashboard with bookings, revenue, occupancy, and today schedule.',
            es: 'Dashboard administrativo con reservas, ingresos, ocupación y agenda del día.',
            it: 'Dashboard amministrativa con prenotazioni, ricavi, occupazione e agenda del giorno.',
          },
        },
        {
          src: publicAsset('projects/society/society-perfil.png'),
          alt: {
            pt: 'Área do usuário com perfil, reservas, histórico de partidas e campos favoritos.',
            en: 'User area with profile, bookings, match history, and favorite fields.',
            es: 'Área del usuario con perfil, reservas, historial de partidos y canchas favoritas.',
            it: 'Area utente con profilo, prenotazioni, storico partite e campi preferiti.',
          },
        },
      ],
      stack: ['React', 'TypeScript', 'Node.js', 'Supabase', 'Tailwind CSS'],
      status: {
        pt: 'Em desenvolvimento',
        en: 'In development',
        es: 'En desarrollo',
        it: 'In sviluppo',
      },
      badges: ['Marketplace', 'Booking', 'Society', 'Em desenvolvimento'],
      relevanceScore: 97,
      features: [
        {
          pt: 'Busca de quadras por arena, localização, data e horário.',
          en: 'Field search by venue, location, date, and time.',
          es: 'Búsqueda de canchas por arena, ubicación, fecha y horario.',
          it: 'Ricerca campi per struttura, posizione, data e orario.',
        },
        {
          pt: 'Página própria para cada local com informações, fotos, avaliações, preço e disponibilidade.',
          en: 'Dedicated page for each venue with information, photos, reviews, pricing, and availability.',
          es: 'Página propia para cada local con información, fotos, reseñas, precio y disponibilidad.',
          it: 'Pagina dedicata per ogni struttura con informazioni, foto, recensioni, prezzo e disponibilità.',
        },
        {
          pt: 'Fluxo de reserva e organização de jogos com convite, presença de jogadores e divisão de times.',
          en: 'Booking and match organization flow with invites, player attendance, and team split.',
          es: 'Flujo de reserva y organización de partidos con invitación, asistencia y división de equipos.',
          it: 'Flusso di prenotazione e organizzazione partite con inviti, presenze e divisione squadre.',
        },
        {
          pt: 'Painel administrativo para acompanhar reservas, receita, ocupação e agenda do dia.',
          en: 'Admin panel to monitor bookings, revenue, occupancy, and daily schedule.',
          es: 'Panel administrativo para acompañar reservas, ingresos, ocupación y agenda diaria.',
          it: 'Pannello amministrativo per monitorare prenotazioni, ricavi, occupazione e agenda giornaliera.',
        },
      ],
      challenges: [
        {
          title: {
            pt: 'Jornada parecida com marketplace',
            en: 'Marketplace-like journey',
            es: 'Experiencia tipo marketplace',
            it: 'Percorso simile a marketplace',
          },
          description: {
            pt: 'Organizar descoberta, comparação e reserva de quadras sem deixar a experiência pesada para o usuário.',
            en: 'Organize discovery, comparison, and booking without making the user experience feel heavy.',
            es: 'Organizar descubrimiento, comparación y reserva sin hacer pesada la experiencia del usuario.',
            it: 'Organizzare scoperta, confronto e prenotazione senza appesantire l’esperienza utente.',
          },
        },
        {
          title: {
            pt: 'Disponibilidade e organização de jogos',
            en: 'Availability and match organization',
            es: 'Disponibilidad y organización de partidos',
            it: 'Disponibilità e organizzazione partite',
          },
          description: {
            pt: 'Conectar horários disponíveis, reservas, convites e confirmação de jogadores em um fluxo coerente.',
            en: 'Connect available schedules, bookings, invitations, and player confirmation into one coherent flow.',
            es: 'Conectar horarios disponibles, reservas, invitaciones y confirmación de jugadores en un flujo coherente.',
            it: 'Collegare orari disponibili, prenotazioni, inviti e conferma giocatori in un flusso coerente.',
          },
        },
      ],
      architecture: [
        {
          label: { pt: 'Frontend', en: 'Frontend', es: 'Frontend', it: 'Frontend' },
          value: {
            pt: 'React, TypeScript e Tailwind CSS para uma experiência responsiva com foco em busca, reserva e gestão.',
            en: 'React, TypeScript, and Tailwind CSS for a responsive experience focused on search, booking, and management.',
            es: 'React, TypeScript y Tailwind CSS para una experiencia responsiva enfocada en búsqueda, reserva y gestión.',
            it: 'React, TypeScript e Tailwind CSS per un’esperienza responsive focalizzata su ricerca, prenotazione e gestione.',
          },
        },
        {
          label: { pt: 'Backend', en: 'Backend', es: 'Backend', it: 'Backend' },
          value: {
            pt: 'Estrutura prevista para autenticação, reservas, disponibilidade por quadra e gestão administrativa de arenas.',
            en: 'Planned structure for authentication, bookings, field availability, and venue administration.',
            es: 'Estructura prevista para autenticación, reservas, disponibilidad por cancha y gestión administrativa de arenas.',
            it: 'Struttura prevista per autenticazione, prenotazioni, disponibilità dei campi e gestione delle strutture.',
          },
        },
        {
          label: { pt: 'Dados', en: 'Data', es: 'Datos', it: 'Dati' },
          value: {
            pt: 'Modelo orientado a locais, quadras, horários, reservas, jogadores e partidas.',
            en: 'Data model oriented around venues, fields, schedules, bookings, players, and matches.',
            es: 'Modelo orientado a locales, canchas, horarios, reservas, jugadores y partidos.',
            it: 'Modello orientato a strutture, campi, orari, prenotazioni, giocatori e partite.',
          },
        },
      ],
      outcomes: [
        {
          pt: 'Produto em evolução para conectar jogadores a quadras disponíveis com menos fricção.',
          en: 'Evolving product to connect players to available fields with less friction.',
          es: 'Producto en evolución para conectar jugadores con canchas disponibles con menos fricción.',
          it: 'Prodotto in evoluzione per connettere giocatori a campi disponibili con meno attrito.',
        },
        {
          pt: 'Base visual e funcional pronta para amadurecer reservas, pagamentos e operação multi-arena.',
          en: 'Visual and functional foundation ready to mature bookings, payments, and multi-venue operations.',
          es: 'Base visual y funcional lista para evolucionar reservas, pagos y operación multi-arena.',
          it: 'Base visiva e funzionale pronta a evolvere prenotazioni, pagamenti e operazione multi-struttura.',
        },
      ],
    },
    {
      slug: 'maintenance-management-system',
      name: {
        pt: 'Sistema de Manutenção',
        en: 'Maintenance Management System',
        es: 'Maintenance Management System',
        it: 'Maintenance Management System',
      },
      summary: {
        pt: 'Sistema para controle de manutenção industrial com chamados, agendamentos, histórico técnico e gestão de estoque por máquina.',
        en: 'System for industrial maintenance control with tickets, scheduling, maintenance history, and per-machine inventory tracking.',
        es: 'Sistema para control de mantenimiento industrial con tickets, agendamientos, historial técnico y gestión de stock por máquina.',
        it: 'Sistema per il controllo della manutenzione industriale con ticket, pianificazione, storico tecnico e gestione inventario per macchina.',
      },
      description: {
        pt: 'Solução voltada para rotinas de manutenção, organizando chamados, plano de manutenção, estoque e notificações em uma mesma operação.',
        en: 'A solution built for maintenance routines, organizing tickets, maintenance plans, inventory, and notifications in the same operational flow.',
        es: 'Solución enfocada en rutinas de mantenimiento, organizando tickets, planes de mantenimiento, stock y notificaciones en un mismo flujo operativo.',
        it: 'Soluzione pensata per routine di manutenzione, organizzando ticket, piani di manutenzione, inventario e notifiche nello stesso flusso operativo.',
      },
      industry: {
        pt: 'Manutenção industrial',
        en: 'Industrial maintenance',
        es: 'Mantenimiento industrial',
        it: 'Manutenzione industriale',
      },
      image: publicAsset('projects/manutencao/manutencao-quadro-operacional.jpg'),
      imageAlt: {
        pt: 'Quadro operacional do sistema de manutenção com chamados, status e central de alertas.',
        en: 'Operational board from the maintenance system with tickets, statuses, and alert center.',
        es: 'Cuadro operativo del sistema de mantenimiento con llamados, estados y central de alertas.',
        it: 'Quadro operativo del sistema di manutenzione con ticket, stati e centro avvisi.',
      },
      gallery: [
        {
          src: publicAsset('projects/manutencao/manutencao-indicadores.jpg'),
          alt: {
            pt: 'Tela de indicadores do sistema de manutenção com fluxo operacional e eficiência por máquina.',
            en: 'Maintenance system indicators screen with operational flow and machine efficiency.',
            es: 'Pantalla de indicadores del sistema de mantenimiento con flujo operativo y eficiencia por máquina.',
            it: 'Schermata indicatori del sistema di manutenzione con flusso operativo ed efficienza per macchina.',
          },
        },
        {
          src: publicAsset('projects/manutencao/manutencao-agendamentos.jpg'),
          alt: {
            pt: 'Tela de agendamento de manutenção preventiva com equipamento, data e descrição do serviço.',
            en: 'Preventive maintenance scheduling screen with equipment, date, and service description.',
            es: 'Pantalla de programación de mantenimiento preventivo con equipo, fecha y descripción del servicio.',
            it: 'Schermata di pianificazione manutenzione preventiva con attrezzatura, data e descrizione servizio.',
          },
        },
        {
          src: publicAsset('projects/manutencao/manutencao-auditoria.jpg'),
          alt: {
            pt: 'Tela de logs de auditoria com histórico de mudanças de status e agendamentos.',
            en: 'Audit log screen with history of status changes and scheduling events.',
            es: 'Pantalla de logs de auditoría con historial de cambios de estado y agendamientos.',
            it: 'Schermata log di audit con storico di cambi stato e pianificazioni.',
          },
        },
        {
          src: publicAsset('projects/manutencao/manutencao-ordem-servico.jpg'),
          alt: {
            pt: 'Detalhe de ordem de serviço com dados da máquina, relatório de execução e foto do atendimento.',
            en: 'Service order detail with machine data, execution report, and service photo area.',
            es: 'Detalle de orden de servicio con datos de máquina, informe de ejecución y foto del atendimento.',
            it: 'Dettaglio ordine di servizio con dati macchina, report di esecuzione e foto intervento.',
          },
        },
        {
          src: publicAsset('projects/manutencao/manutencao-chamado-publico.jpg'),
          alt: {
            pt: 'Tela pública de consulta de chamado de manutenção com etapas de solicitação e status.',
            en: 'Public maintenance ticket lookup screen with request steps and status.',
            es: 'Pantalla pública de consulta de llamado de mantenimiento con etapas y estado.',
            it: 'Schermata pubblica di consultazione ticket manutenzione con fasi e stato.',
          },
        },
      ],
      stack: ['Flutter', 'Supabase', 'SQLite', 'Firebase'],
      status: {
        pt: 'Em uso / testado',
        en: 'In Use / Tested',
        es: 'En uso / probado',
        it: 'In uso / testato',
      },
      badges: ['Maintenance', 'Flutter', 'Supabase', 'Cross-Platform'],
      relevanceScore: 94,
      features: [
        {
          pt: 'Kanban de chamados para organizar ordens e status de manutenção.',
          en: 'Kanban board for tickets to organize maintenance orders and statuses.',
          es: 'Kanban de tickets para organizar órdenes y estados de mantenimiento.',
          it: 'Kanban dei ticket per organizzare ordini e stati di manutenzione.',
        },
        {
          pt: 'Controle detalhado por máquina, com vínculo entre equipamento e histórico.',
          en: 'Detailed machine-based control linking each asset to its history.',
          es: 'Control detallado por máquina, vinculando cada equipo con su historial.',
          it: 'Controllo dettagliato per macchina, collegando ogni asset al suo storico.',
        },
        {
          pt: 'Histórico de manutenção para acompanhamento técnico e recorrência de falhas.',
          en: 'Maintenance history for technical follow-up and recurring issue tracking.',
          es: 'Historial de mantenimiento para seguimiento técnico y recurrencia de fallas.',
          it: 'Storico manutenzione per follow-up tecnico e tracciamento delle ricorrenze.',
        },
        {
          pt: 'Notificações em Android e Windows para acompanhamento operacional.',
          en: 'Android and Windows notifications for operational follow-up.',
          es: 'Notificaciones en Android y Windows para seguimiento operativo.',
          it: 'Notifiche su Android e Windows per il follow-up operativo.',
        },
        {
          pt: 'Gestão de estoque vinculada à máquina e ao plano de manutenção.',
          en: 'Inventory management linked to each machine and maintenance plan.',
          es: 'Gestión de stock vinculada a cada máquina y al plan de mantenimiento.',
          it: 'Gestione inventario collegata a ogni macchina e al piano di manutenzione.',
        },
      ],
      challenges: [
        {
          title: {
            pt: 'Rastreabilidade operacional',
            en: 'Operational traceability',
            es: 'Trazabilidad operativa',
            it: 'Tracciabilità operativa',
          },
          description: {
            pt: 'Organizar chamados, histórico e estoque sem perder contexto técnico por equipamento.',
            en: 'Keep tickets, history, and inventory organized without losing technical context per machine.',
            es: 'Organizar tickets, historial y stock sin perder el contexto técnico por equipo.',
            it: 'Organizzare ticket, storico e inventario senza perdere il contesto tecnico per macchina.',
          },
        },
        {
          title: {
            pt: 'Uso em rotina de manutenção',
            en: 'Use inside maintenance routines',
            es: 'Uso en rutina de mantenimiento',
            it: 'Uso nelle routine di manutenzione',
          },
          description: {
            pt: 'Manter a interface prática para ambientes operacionais, com leitura rápida e ações diretas.',
            en: 'Keep the interface practical for operational environments, with fast reading and direct actions.',
            es: 'Mantener la interfaz práctica para entornos operativos, con lectura rápida y acciones directas.',
            it: 'Mantenere l’interfaccia pratica per ambienti operativi, con lettura rapida e azioni dirette.',
          },
        },
      ],
      architecture: [
        {
          label: { pt: 'Aplicação', en: 'Application', es: 'Aplicación', it: 'Applicazione' },
          value: {
            pt: 'Flutter para uma experiência unificada em Android e Windows.',
            en: 'Flutter for a unified experience across Android and Windows.',
            es: 'Flutter para una experiencia unificada en Android y Windows.',
            it: 'Flutter per un’esperienza unificata tra Android e Windows.',
          },
        },
        {
          label: { pt: 'Dados', en: 'Data', es: 'Datos', it: 'Dati' },
          value: {
            pt: 'Supabase como base de dados e suporte para sincronização e persistência operacional.',
            en: 'Supabase as the database layer supporting synchronization and operational persistence.',
            es: 'Supabase como base de datos y soporte para sincronización y persistencia operativa.',
            it: 'Supabase come layer dati per sincronizzazione e persistenza operativa.',
          },
        },
        {
          label: { pt: 'Notificações', en: 'Notifications', es: 'Notificaciones', it: 'Notifiche' },
          value: {
            pt: 'Fluxo preparado para alertas e acompanhamento em dispositivos Android e Windows.',
            en: 'Flow prepared for alerts and follow-up across Android and Windows devices.',
            es: 'Flujo preparado para alertas y seguimiento en dispositivos Android y Windows.',
            it: 'Flusso preparato per alert e follow-up su dispositivi Android e Windows.',
          },
        },
      ],
      outcomes: [
        {
          pt: 'Maior organização da manutenção por máquina, chamado e recorrência.',
          en: 'Better maintenance organization by machine, ticket, and recurrence.',
          es: 'Mayor organización del mantenimiento por máquina, ticket y recurrencia.',
          it: 'Maggiore organizzazione della manutenzione per macchina, ticket e ricorrenza.',
        },
        {
          pt: 'Base funcional para uso contínuo e expansão de novos fluxos operacionais.',
          en: 'Functional foundation for continuous use and expansion into new operational flows.',
          es: 'Base funcional para uso continuo y expansión hacia nuevos flujos operativos.',
          it: 'Base funzionale per uso continuo ed espansione verso nuovi flussi operativi.',
        },
      ],
    },
  ],
  ideas: [
    {
      slug: 'predictive-maintenance-intelligence',
      name: {
        pt: 'Sistema Inteligente de Manutenção Preditiva',
        en: 'Intelligent Predictive Maintenance System',
        es: 'Sistema Inteligente de Mantenimiento Predictivo',
        it: 'Sistema Intelligente di Manutenzione Predittiva',
      },
      summary: {
        pt: 'Plataforma para antecipar falhas com base em histórico técnico, padrões de uso e alertas operacionais.',
        en: 'Platform to anticipate failures based on maintenance history, usage patterns, and operational alerts.',
        es: 'Plataforma para anticipar fallas con base en historial técnico, patrones de uso y alertas operativos.',
        it: 'Piattaforma per anticipare guasti sulla base di storico tecnico, pattern di utilizzo e alert operativi.',
      },
      description: {
        pt: 'Evolução natural de um sistema de manutenção tradicional para apoio mais inteligente à decisão.',
        en: 'A natural evolution from a standard maintenance system toward more intelligent operational support.',
        es: 'Una evolución natural de un sistema de mantenimiento tradicional hacia un soporte operativo más inteligente.',
        it: 'Un’evoluzione naturale da un sistema di manutenzione tradizionale verso un supporto operativo più intelligente.',
      },
      opportunity: {
        pt: 'Equipes de manutenção ainda dependem muito de análise manual para prever recorrência e risco.',
        en: 'Maintenance teams still depend heavily on manual analysis to predict recurrence and risk.',
        es: 'Los equipos de mantenimiento aún dependen mucho del análisis manual para prever recurrencia y riesgo.',
        it: 'I team di manutenzione dipendono ancora molto da analisi manuali per prevedere ricorrenza e rischio.',
      },
      stackFocus: ['Maintenance Intelligence', 'Analytics', 'Alerts'],
      image: createAbstractPreview('predictive-maintenance-idea'),
      level: 'concept',
      relevanceScore: 95,
    },
    {
      slug: 'global-calendar-mobile-alarms',
      name: {
        pt: 'Integração entre Calendário Global e Alarmes Mobile',
        en: 'Global Calendar and Mobile Alarm Integration',
        es: 'Integración entre Calendario Global y Alarmas Mobile',
        it: 'Integrazione tra Calendario Globale e Allarmi Mobile',
      },
      summary: {
        pt: 'Fluxo para sincronizar compromissos globais com alertas móveis e lembretes críticos por contexto.',
        en: 'Flow to synchronize global schedules with mobile alerts and context-aware critical reminders.',
        es: 'Flujo para sincronizar agendas globales con alertas móviles y recordatorios críticos por contexto.',
        it: 'Flusso per sincronizzare calendari globali con alert mobile e promemoria critici contestuali.',
      },
      description: {
        pt: 'Produto voltado para equipes e operações que precisam transformar agenda em ação prática.',
        en: 'Product idea for teams and operations that need to turn schedule data into actionable reminders.',
        es: 'Idea de producto para equipos y operaciones que necesitan convertir agenda en recordatorios accionables.',
        it: 'Idea di prodotto per team e operazioni che devono trasformare il calendario in promemoria operativi.',
      },
      opportunity: {
        pt: 'Calendários nem sempre resolvem o problema do alerta correto no momento certo, especialmente em operação móvel.',
        en: 'Calendars do not always solve the problem of delivering the right alert at the right time, especially in mobile operations.',
        es: 'Los calendarios no siempre resuelven el problema de entregar la alerta correcta en el momento adecuado, especialmente en operación móvil.',
        it: 'I calendari non risolvono sempre il problema di fornire l’alert giusto al momento giusto, soprattutto in contesti mobili.',
      },
      stackFocus: ['Mobile Workflow', 'Calendar Sync', 'Notifications'],
      image: createAbstractPreview('calendar-alarm-idea'),
      level: 'mvp',
      relevanceScore: 88,
    },
    {
      slug: 'sports-venue-saas',
      name: {
        pt: 'Plataforma SaaS para Gestão de Espaços Esportivos',
        en: 'Sports Venue Management SaaS',
        es: 'Plataforma SaaS para Gestión de Espacios Deportivos',
        it: 'Piattaforma SaaS per la Gestione di Spazi Sportivi',
      },
      summary: {
        pt: 'SaaS para reservas, agenda, controle de uso e operação administrativa de quadras e espaços esportivos.',
        en: 'SaaS platform for reservations, scheduling, usage control, and administrative operations for sports venues.',
        es: 'Plataforma SaaS para reservas, agenda, control de uso y operación administrativa de espacios deportivos.',
        it: 'Piattaforma SaaS per prenotazioni, agenda, controllo d’uso e gestione amministrativa di spazi sportivi.',
      },
      description: {
        pt: 'Ideia alinhada ao mesmo perfil de gestão e reservas do projeto de condomínio, agora aplicada ao mercado esportivo.',
        en: 'Idea aligned with the same management and booking profile seen in the condominium project, now applied to the sports market.',
        es: 'Idea alineada con el mismo perfil de gestión y reservas del proyecto de condominios, ahora aplicada al mercado deportivo.',
        it: 'Idea allineata allo stesso profilo di gestione e prenotazioni del progetto condominiale, ora applicata al mercato sportivo.',
      },
      opportunity: {
        pt: 'Muitos espaços esportivos ainda operam com agenda manual, pouco controle e experiência inconsistente para clientes.',
        en: 'Many sports venues still rely on manual scheduling, limited control, and inconsistent customer experience.',
        es: 'Muchos espacios deportivos aún dependen de agenda manual, poco control y una experiencia inconsistente para el cliente.',
        it: 'Molti spazi sportivi dipendono ancora da agenda manuale, scarso controllo ed esperienza cliente incoerente.',
      },
      stackFocus: ['SaaS', 'Reservations', 'Operations'],
      image: createAbstractPreview('sports-venue-idea'),
      level: 'planned',
      relevanceScore: 84,
    },
  ],
};
