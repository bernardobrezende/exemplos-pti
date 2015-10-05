//

function Curso(n, instrutor) {
  this.nome = n
  , this.instrutor = instrutor || 'Bernardo';

  /*this.imprimir = function() {
    return this.nome + '!!!!';
  }*/
};

Curso.prototype.imprimir = function() {
  return this.nome + '!!!!';
};

Curso.prototype.getModulos = function() {
  return ['Overview', 'Arrays', 'JSON', 'Map&Reduce', 'OO', 'Prototypes', 'use strict', 'Errors', 'Module Pattern', 'Closures'];
}

//

function CursoOnline(n, instrutor, url) {
  this.url = url;
  Curso.apply(this, arguments);
};

// extends
CursoOnline.prototype = Object.create(Curso.prototype);
// override
CursoOnline.prototype.imprimir = function() {
  return Curso.prototype.imprimir.call(this) + '\nURL: ' + this.url;
};

//

var js = new Curso('JavaScript Avançado');
var js2 = new Curso('JS Avançado II');
var cursoOnline = new CursoOnline('Shaping up with angular', null, 'codeschool.com');
console.log(js);
console.log(js.imprimir());
console.log(js.imprimir == js2.imprimir);
console.log(js.getModulos());
console.log(cursoOnline.imprimir());