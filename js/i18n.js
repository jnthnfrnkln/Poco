(() => {
  const PT = {
    'nav.land': 'O território', 'nav.today': 'Hoje', 'nav.future': 'Amanhã', 'nav.events': 'Eventos', 'nav.contact': 'Contato privado',
    'fly.0.eyebrow': 'Fazenda Ambiental do Poço',
    'fly.0.title': 'Alguns lugares ainda<br>só se alcançam pelo mar.',
    'fly.0.hint': 'Role para chegar',
    'fly.1.title': 'O litoral de São Paulo, Brasil.',
    'fly.2.title': 'Uma ilha onde a maior parte da terra<br>é floresta protegida — para sempre.',
    'fly.3.title': 'Nenhuma estrada chega<br>a este lado da ilha.',
    'fly.4.eyebrow': '100 hectares · privado',
    'fly.4.title': 'Este é o Poço.',
    'fly.skip': 'Pular introdução ↓',
    'man.eyebrow': 'Insubstituível',
    'man.title': 'Existem lugares para visitar.<br><em>E existe o último do seu tipo.</em>',
    'man.p1': 'Cem hectares de Mata Atlântica, rio, cachoeira e praia — em uma única matrícula, 100% nossa, cercada por todos os lados pelo Parque Estadual de Ilhabela.',
    'man.p2': 'O parque nunca será ocupado. Isso significa que o entorno do Poço continuará amanhã exatamente como é hoje. E significa também que uma área como esta não pode ser criada de novo — nem aqui, nem em nenhum outro ponto deste litoral.',
    'fact.1': 'Terra privada, 100% própria, quitada, com matrícula limpa',
    'fact.2u': 'casas', 'fact.2': 'Direito de construção já aprovado',
    'fact.3u': 'estradas', 'fact.3': 'Acesso apenas pelo mar — e em breve pelo ar',
    'fact.4': 'Nascente de água própria e totalmente protegida',
    'fact.5': 'De trilhas já abertas na mata',
    'fact.6': 'Cercado pelo Parque Estadual de Ilhabela',
    'film.eyebrow': 'A chegada', 'film.title': 'Chegar já<br>faz parte.', 'film.btn': 'Assistir ao filme ▸',
    'land.eyebrow': 'O território',
    'land.title': 'Mar, rio, cachoeira, floresta.<br><em>Tudo dentro de um mesmo limite.</em>',
    'land.1.t': 'Uma praia privativa de frente para o Atlântico',
    'land.1.p': 'Areia dourada onde o rio encontra o mar, pedras de granito, água transparente. Voltada para o leste, para o mar aberto, sem vizinhos no horizonte.',
    'land.2.t': 'Um rio, uma cachoeira e água que se pode beber',
    'land.2.p': 'A propriedade tem nascente própria — 100% protegida, brotando dentro de uma mata que nunca será derrubada. A água desce por poços e cascatas até a praia.',
    'land.3.t': 'Mata Atlântica por todos os lados',
    'land.3.p': 'Uma das florestas mais biodiversas do planeta — e uma das mais ameaçadas. Aqui ela segue contínua da crista da serra até o mar. Cerca de 2 km de trilhas já a atravessam, com espaço para muitas mais.',
    'land.4.cap': 'Foto provisória — plantação de café e cacau',
    'land.4.t': 'Café e cacau, cultivados à sombra',
    'land.4.p': 'Plantações de café e cacau já crescem sob a copa da floresta — o começo de uma fazenda regenerativa, com história própria, do grão à xícara.',
    'today.eyebrow': 'Hoje',
    'today.title': 'Já habitado.<br><em>Já fora da rede.</em>',
    'today.p': 'O Poço não é um projeto no papel. Três casas, uma área comum generosa e infraestrutura funcionando já estão lá — simples, silenciosas e construídas em volta da paisagem.',
    'spec.1': 'casas', 'spec.2': 'quartos', 'spec.3': 'área comum — deck, cozinha, sala de estar e jantar',
    'spec.4': 'Energia solar', 'spec.5': 'Internet Starlink', 'spec.6': 'Água de nascente própria',
    'future.eyebrow': 'Amanhã',
    'future.title': 'Espaço para cem casas.<br><em>E para mil árvores entre elas.</em>',
    'future.p': 'O direito de construir até 100 casas já existe — o suficiente para uma comunidade de baixa densidade, em que a natureza vem primeiro e a floresta permanece inteira. Duas estruturas vão definir a chegada.',
    'future.render': 'Render em produção',
    'future.dock.t': 'O píer',
    'future.dock.p': 'Um píer de madeira avançando sobre a baía — a porta de entrada do Poço. Barcos de Ilhabela e do continente chegam direto à praia, em qualquer maré.',
    'future.heli.t': 'O heliponto',
    'future.heli.p': 'Um heliponto privativo coloca o Poço a cerca de 45 minutos de São Paulo — remoto por natureza, próximo por escolha.',
    'events.eyebrow': 'Viva agora',
    'events.title': 'Celebre aqui.',
    'events.p': 'O Poço recebe poucas ocasiões privadas por ano — não é resort, não é beach club. O território inteiro é seu por um dia ou um fim de semana.',
    'events.t1': 'Casamentos e pré-weddings', 'events.t2': 'Encontros de família', 'events.t3': 'Retiros de liderança',
    'events.t4': 'Aniversários', 'events.t5': 'Um fim de semana fora',
    'events.btn': 'Consulte as datas disponíveis',
    'inv.eyebrow': 'Um convite, não um anúncio',
    'inv.title': 'Procuramos as pessoas certas<br><em>para escrever o próximo capítulo conosco.</em>',
    'inv.1.t': 'Parceria',
    'inv.1.p': 'Para investidores, operadores de hospitalidade e desenvolvedores comprometidos com a conservação, que queiram construir um projeto raro e de baixa densidade ao lado da família fundadora.',
    'inv.2.t': 'Aquisição',
    'inv.2.p': 'Para um único guardião. Propriedade integral de 100 hectares, matrícula limpa e direitos já existentes. Tratado apenas em conversa privada.',
    'inv.3.t': 'Experiências',
    'inv.3.p': 'Para quem simplesmente quer passar um tempo no Poço — um dia, um fim de semana, uma celebração.',
    'inv.note': 'Documentação de matrícula, estudos ambientais e o plano de desenvolvimento estão disponíveis para interessados qualificados mediante NDA.',
    'contact.eyebrow': 'Contato privado',
    'contact.title': 'Quando você gostaria<br>de ver com os próprios olhos?',
    'contact.p': 'Cada conversa é conduzida pessoalmente e com total sigilo.',
    'form.name': 'Nome', 'form.email': 'E-mail', 'form.interest': 'Tenho interesse em',
    'form.o1': 'Um evento ou estadia', 'form.o2': 'Uma parceria', 'form.o3': 'Uma aquisição', 'form.o4': 'Outro assunto',
    'form.msg': 'Mensagem', 'form.send': 'Enviar', 'form.ok': 'Obrigado. Entraremos em contato pessoalmente.'
  };

  const nodes = [...document.querySelectorAll('[data-i18n]')];
  const EN = Object.fromEntries(nodes.map(n => [n.dataset.i18n, n.innerHTML]));
  const btn = document.getElementById('lang');

  function apply(lang) {
    const dict = lang === 'pt' ? PT : EN;
    nodes.forEach(n => { const v = dict[n.dataset.i18n]; if (v) n.innerHTML = v; });
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    btn.textContent = lang === 'pt' ? 'EN' : 'PT';
    try { localStorage.setItem('poco-lang', lang); } catch (e) {}
  }

  let lang = 'en';
  try { lang = localStorage.getItem('poco-lang') || (navigator.language.startsWith('pt') ? 'pt' : 'en'); } catch (e) {}
  if (lang === 'pt') apply('pt');
  btn.addEventListener('click', () => { lang = lang === 'pt' ? 'en' : 'pt'; apply(lang); });
})();
