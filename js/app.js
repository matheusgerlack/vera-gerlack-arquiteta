(function(){
  var itemsServicos = [

  { src: "img/projetoResidencial.jpeg", h3: "Projeto residencial" , p: "Tenha o melhor projeto para sua casa nova."},
  { src: "img/execucaoDeObra.jpeg", h3: "Execução de obra" , p: "Acompanhamento da sua obra do início ao fim."},
  { src: "img/designDeInteriores.jpeg", h3: "Design de interiores" , p: "Projeção de mobiliário, execução e acessoramento."},
  { src: "img/paisagismo.jpeg", h3: "Paisagismo" , p: "Projetos de paisagismo. Sua casa merece uma área verde."},
  { src: "img/reformas.jpeg", h3: "Reformas" , p: "A melhor reforma para sua casa ou comércio."},
  { src: "img/ppci.jpeg", h3: "PPCI" , p: "Plano de Proteção contra incêndio."},
  { src: "img/regularizacaoResidencial.jpeg", h3: "Regularização residencial" , p: "Legalize sua situação junto à prefeitura da sua cidade hoje."}

  ];

  var itemsPortfolio = [

  { src: "http://placehold.it/400x400", h3: "Projeto residencial" , p: "Descrição."},
  { src: "http://placehold.it/400x400", h3: "Exeução de obra" , p: "Descrição."},
  { src: "http://placehold.it/400x400", h3: "Design de interiores" , p: "Projeção de mobiliário, execução e acessoramento."},
  { src: "http://placehold.it/400x400", h3: "Paisagismo" , p: "Projetos de paisagismo."},
  { src: "http://placehold.it/400x400", h3: "Regularização residencial" , p: "Legalize sua situação junto à prefeitura da sua cidade hoje."},
  { src: "http://placehold.it/400x400", h3: "Reformas" , p: "A melhor reforma para sua casa ou comércio."},
  { src: "http://placehold.it/400x400", h3: "PPCI" , p: "Plano de Proteção contra incêndio."}

  ];
  
  var app = angular.module('arquiteturaApp', []);
  app.controller('mediaController', function(){
  this.servicos = itemsServicos;
  this.portfolio = itemsPortfolio;
  });

  // toggle between the portfolio view
  app.controller('PanelController', function(){

      this.tab = 1; //set the initial value

      this.selectTab = function(setTab){
        this.tab = setTab; //change the tab value
      };

      this.isSelected = function(checkTab){
        return this.tab === checkTab; //check which tab is selected
      };

    });

})();